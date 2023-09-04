import React, { useState, useEffect } from "react";
import axios from "axios";
import calories from "../assets/calories.png";
import proteins from "../assets/proteins.png";
import carbohydrates from "../assets/carbohydrates.png";
import lipids from "../assets/lipids.png";

export async function FetchAPI(id, path, group) {
	try {
		const response = await axios.get(path);
		console.log("response", response.data, "case", group);

		let usersData = {};
		switch (group) {
			case "main":
				usersData = response.data.mock.USER_MAIN_DATA;
				console.log("user", response.data.mock.USER_MAIN_DATA);
				break;
			case "activity":
				usersData = response.data.mock.USER_ACTIVITY;
				console.log("user", response.data.mock.USER_ACTIVITY);
				break;
			case "sessions":
				usersData = response.data.mock.USER_AVERAGE_SESSIONS;
				console.log("user", response.data.mock.USER_AVERAGE_SESSIONS);
				break;
			case "performance":
				usersData = response.data.mock.USER_PERFORMANCE;
				console.log("user", response.data.mock.USER_PERFORMANCE);
				break;
			default: //using API not mock
				return response.data.data;
		}
		const userData = usersData.find((item) => item.id === Number(id));
		return userData;
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}

export function normalizeCount(data) {
	let countArray = {};
	countArray.cal = {
		name: "Calories",
		src: { calories },
		unit: "KCal",
		count: data.calorieCount,
	};
	countArray.prot = {
		name: "Protéines",
		src: { proteins },
		unit: "g",
		count: data.proteinCount,
	};
	countArray.carb = {
		name: "Glucides",
		src: { carbohydrates },
		unit: "g",
		count: data.carbohydrateCount,
	};
	countArray.fat = {
		name: "Lipides",
		src: { lipids },
		unit: "g",
		count: data.lipidCount,
	};
	return countArray;
}
