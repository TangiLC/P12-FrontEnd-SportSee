import toggle from "../assets/toggle.png";
import yoga96 from "../assets/yoga96.png";
import swiming96 from "../assets/swim96.png";
import cycling96 from "../assets/cycling96.png";
import barbell96 from "../assets/barbell96.png";

import calories from "../assets/calories.png"
import proteins from "../assets/proteins.png"
import lipids from "../assets/lipids.png"
import carbohydrates from "../assets/carbohydrates.png"

export const menubar = {};
menubar.toggle = toggle;
menubar.items = [
	{ icon: yoga96, text: "Relaxation" },
	{ icon: swiming96, text: "Natation" },
	{ icon: cycling96, text: "Cyclisme" },
	{ icon: barbell96, text: "Altérophilie" },
];

export const normalizeCount = (data) => {
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
