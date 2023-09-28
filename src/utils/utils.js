//this file exports utility fonctions
import axios from "axios";

import calories from "../assets/calories.png";
import proteins from "../assets/proteins.png";
import lipids from "../assets/lipids.png";
import carbohydrates from "../assets/carbohydrates.png";
import {mockedData} from "./mock/mock";
const { REACT_APP_API_URL } = process.env;

export const getUserData = async (userId, url) => {
	try {
		const user = await axios.get(url + userId).then((res) => res.data.data);
		const activity = await axios
			.get(url + userId + "/activity")
			.then((res) => res.data.data);
		const averageSessions = await axios
			.get(url + userId + "/average-sessions")
			.then((res) => res.data.data);
		const performance = await axios
			.get(url + userId + "/performance")
			.then((res) => res.data.data);

		return { user, activity, averageSessions, performance };
	} catch (error) {
		console.log("ERROR WHILE FETCHING API : ", error);
		return getMockedData(userId);
	}
};

const getMockedData = (id) => {
	const userId = parseInt(id);

	const user = mockedData.USER_MAIN_DATA.find((user) => user.id === userId);
	const activity = mockedData.USER_ACTIVITY.find(
		(userActivity) => userActivity.userId === userId
	);
	const averageSessions = mockedData.USER_AVERAGE_SESSIONS.find(
		(averageSessions) => averageSessions.userId === userId
	);
	const performance = mockedData.USER_PERFORMANCE.find(
		(userPerformance) => userPerformance.userId === userId
	);
	return { user, activity, averageSessions, performance };
};

/*export async function fetchAPI(id, path, group) {
	try {
		const response = await axios.get(path);

		let fetchedData = {};
		switch (
			group //fetching part of mocked data to simulate API call
		) {
			case "main":
				fetchedData = response.data.mock.USER_MAIN_DATA;
				break;
			case "activity":
				fetchedData = response.data.mock.USER_ACTIVITY;
				break;
			case "average-sessions":
				fetchedData = response.data.mock.USER_AVERAGE_SESSIONS;
				break;
			case "performance":
				fetchedData = response.data.mock.USER_PERFORMANCE;
				break;
			case "api"://fetching data from genuine API call
				fetchedData= response.data.data;
				break;
			default: 
				fetchedData= response.data.data;
				break;
		}
		const filteredData = fetchedData.find((item) => item.userId === Number(id));

		return filteredData; //return data for single user only
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}*/

// function to return data without treatment
export const noTreatment = (data) => {
	return data;
};

//function to return normalized datas for the Counter component
export const normalizeCounter = (data) => {
	let array = [];
	array.push({
		name: "Calories",
		icon: calories,
		unit: "kCal",
		count: Number(data.calorieCount).toLocaleString("en-US"),
		color: "255,0,0",
	});
	array.push({
		name: "Protéines",
		icon: proteins,
		unit: "g",
		count: data.proteinCount,
		color: "74,184,255",
	});
	array.push({
		name: "Glucides",
		icon: carbohydrates,
		unit: "g",
		count: data.carbohydrateCount,
		color: "253,204,12",
	});
	array.push({
		name: "Lipides",
		icon: lipids,
		unit: "g",
		count: data.lipidCount,
		color: "253,81,129",
	});
	return array;
};

//Normalizing function to add key "count" in the datas used in DailyActivity
export function addCount(array) {
	if (array.length > 0) {
		const newArray = array.map((item, index) => {
			const newItem = { ...item };
			newItem.count = index + 1;
			return newItem;
		});
		console.log("newArray", newArray);
		return newArray;
	} else return array;
}

//Normalizing function to add key "dayOfWeek" in datas used in AverageSessions
export function addDayOfWeek(array) {
	const weekday = ["L", "M", "M", "J", "V", "S", "D"];
	const newArray = array.map((item, index) => {
		const newItem = { ...item };
		if (item.day >= 1 && item.day <= 7) {
			newItem.dayOfWeek = weekday[item.day - 1];
			return newItem;
		}
	});
	return newArray;
}

//Normalizing function to create array used as datas in Performance
export function fusionArray(tab1, tab2) {
	const traduct = {
		cardio: "Cardio",
		energy: "Énergie",
		endurance: "Endurance",
		strength: "Force",
		speed: "Vitesse",
		intensity: "Intensité",
	};

	const newArray = tab1.map((item) => {
		const str = tab2[item.kind.toString()] || "null";
		return { kind: traduct[str] || "null", value: item.value };
	});
	return newArray;
}
