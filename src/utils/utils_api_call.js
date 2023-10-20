//this file exports utility fonctions
import axios from "axios";

import calories from "../assets/calories.png";
import proteins from "../assets/proteins.png";
import lipids from "../assets/lipids.png";
import carbohydrates from "../assets/carbohydrates.png";

import { mockedData } from "./mock/mocked";
const { REACT_APP_API_URL } = process.env;

export const getUserData = async (userId, url) => {
	console.log(url)
	try {
		const user = await axios
			.get(`${REACT_APP_API_URL}/${userId}`)
			.then((response) => response.data.data);
		const activity = await axios
			.get(`${REACT_APP_API_URL}/${userId}/activity`)
			.then((response) => response.data.data);
		const sessions = await axios
			.get(`${REACT_APP_API_URL}/${userId}/average-sessions`)
			.then((response) => response.data.data);
		const perform = await axios
			.get(`${REACT_APP_API_URL}/${userId}/performance`)
			.then((response) => response.data.data);
		console.log("data fetched from api:", user, activity, sessions, perform);
		const isAPIData = true;
		return { user, activity, sessions, perform, isAPIData };
	} catch (error) {
		console.log("ERROR WHILE FETCHING API : ...fetching Mock");
		return getMockedData(userId);
	}
};

export const getMockedData = (id) => {
	if (mockedData) {
		console.log("mocked id", mockedData, id);
		const user = mockedData.USER_MAIN_DATA.find(
			(item) => item.id === Number(id)
		);
		const activity = mockedData.USER_ACTIVITY.find(
			(item) => item.userId === Number(id)
		);
		const sessions = mockedData.USER_AVERAGE_SESSIONS.find(
			(item) => item.userId === Number(id)
		);
		const perform = mockedData.USER_PERFORMANCE.find(
			(item) => item.userId === Number(id)
		);

		if (user && activity && sessions && perform) {
			console.log("data fetched from mock:", user, activity, sessions, perform);
		}
		const isAPIData = false;
		return { user, activity, sessions, perform, isAPIData };
	}
};
