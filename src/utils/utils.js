//this file exports utility fonctions
import axios from "axios";

import calories from "../assets/calories.png"
import proteins from "../assets/proteins.png"
import lipids from "../assets/lipids.png"
import carbohydrates from "../assets/carbohydrates.png"
const { REACT_APP_API_URL } = process.env;

export async function FetchAPI(id, path, group) {
	try {
		const response = await axios.get(path);

		let datas = {};
		switch (
			group //fetching part of mocked data to simulate API call
		) {
			case "main":
				datas = response.data.mock.USER_MAIN_DATA;
				break;
			case "activity":
				datas = response.data.mock.USER_ACTIVITY;
				break;
			case "average-sessions":
				datas = response.data.mock.USER_AVERAGE_SESSIONS;
				break;
			case "performance":
				datas = response.data.mock.USER_PERFORMANCE;
				break;
			default: //fetching data from genuine API call
				return response.data.data;
		}
		const filteredData = datas.find((item) => item.userId === Number(id));
		console.log('filteredData',filteredData)
		return filteredData; //return datas for single user only
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}

// function to return data without treatment
export const noTreatment =(data) =>{return data}


//function to return normalized datas for the Counter component
export const normalizeCounter = (data) => {
	let array = [];
	array.push({
		name: "Calories",
		icon: calories,
		unit: "kCal",
		count: Number(data.calorieCount).toLocaleString('en-US'),
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
