import toggle from "../assets/toggle.png";
import yoga96 from "../assets/yoga96.png";
import swiming96 from "../assets/swim96.png";
import cycling96 from "../assets/cycling96.png";
import barbell96 from "../assets/barbell96.png";

import calories from "../assets/count/calories.png"
import proteins from "../assets/count/proteins.png"
import lipids from "../assets/count/lipids.png"
import carbohydrates from "../assets/count/carbohydrates.png"

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
		unit: "KCal",
		count: data.calorieCount,
		bgcol: "#FBEAEA",
	});
	array.push({
		name: "Protéines",
		icon: proteins,
		unit: "g",
		count: data.proteinCount,
		bgcol: "#E9F4FB",
	});
	array.push({
		name: "Glucides",
		icon: carbohydrates,
		unit: "g",
		count: data.carbohydrateCount,
		bgcol: "#FBF6E5",
	});
	array.push({
		name: "Lipides",
		icon: lipids,
		unit: "g",
		count: data.lipidCount,
		bgcol: "#FBEAEF",
	});
	return array;
};
