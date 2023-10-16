//this file exports normalization fonctions

import calories from "../assets/calories.png";
import proteins from "../assets/proteins.png";
import lipids from "../assets/lipids.png";
import carbohydrates from "../assets/carbohydrates.png";


// function to get score with unstandardized key
export const normalizeScore = (data) => {
	return [data.todayScore, data.score, data.Score, 0].find(
		(score) => score !== undefined
	);
};

//function to return normalized data for the Counter component
export const normalizeCounter = (data) => {
	let array = [];
	array.push({
		name: "Calories",
		icon: calories,
		unit: "kCal",
		count: Number(data.calorieCount),
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

//Normalizing function to add key "count" in the data used in DailyActivity
export function addCount(array) {
	if (array.length > 0) {
		const newArray = array.map((item) => {
			const newItem = { ...item };
			newItem.count = newItem.day.substring(8, 10);
			return newItem;
		});
		return newArray;
	} else return array;
}

//Normalizing function to add key "dayOfWeek" in data used in AverageSessions
export function addDayOfWeek(array) {
	const weekday = ["L", "M", "M", "J", "V", "S", "D"];
	const newArray = array.map((item, index) => {
		const newItem = { ...item };
		if (item.day >= 1 && item.day <= 7) {
			newItem.dayOfWeek = weekday[item.day - 1];
			return newItem;
		} else return item;
	});
	return newArray;
}

//Normalizing function to create array used as datas in Performance
export function fusionArrayPerf(tab1, tab2) {
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
