export const mockedData = {
	USER_MAIN_DATA: [
		{
			id: 9,
			userInfos: {
				firstName: "Thomas",
				lastName: "Mockdata",
				age: 33,
			},
			score: 0.22,
			keyData: {
				calorieCount: 2040,
				proteinCount: 175,
				carbohydrateCount: 310,
				lipidCount: 55,
			},
		},
		{
			id: 12,
			userInfos: {
				firstName: "Karl",
				lastName: "Dovineau",
				age: 31,
			},
			todayScore: 0.12,
			keyData: {
				calorieCount: 1930,
				proteinCount: 155,
				carbohydrateCount: 290,
				lipidCount: 50,
			},
		},
		{
			id: 18,
			userInfos: {
				firstName: "Cecilia",
				lastName: "Ratorez",
				age: 34,
			},
			Score: 0.3,
			keyData: {
				calorieCount: 2500,
				proteinCount: 90,
				carbohydrateCount: 150,
				lipidCount: 120,
			},
		},
	],

	USER_ACTIVITY: [
		{
			userId: 9,
			sessions: [
				{
					day: "2020-07-01",
					kilogram: 85,
					calories: 240,
				},
				{
					day: "2020-07-02",
					kilogram: 85,
					calories: 310,
				},
				{
					day: "2020-07-03",
					kilogram: 84,
					calories: 290,
				},
				{
					day: "2020-07-04",
					kilogram: 84,
					calories: 290,
				},
				{
					day: "2020-07-05",
					kilogram: 84,
					calories: 180,
				},
				{
					day: "2020-07-06",
					kilogram: 85,
					calories: 162,
				},
				{
					day: "2020-07-07",
					kilogram: 84,
					calories: 395,
				},
			],
		},
		{
			userId: 12,
			sessions: [
				{
					day: "2020-07-01",
					kilogram: 80,
					calories: 240,
				},
				{
					day: "2020-07-02",
					kilogram: 80,
					calories: 220,
				},
				{
					day: "2020-07-03",
					kilogram: 81,
					calories: 280,
				},
				{
					day: "2020-07-04",
					kilogram: 81,
					calories: 290,
				},
				{
					day: "2020-07-05",
					kilogram: 80,
					calories: 160,
				},
				{
					day: "2020-07-06",
					kilogram: 78,
					calories: 162,
				},
				{
					day: "2020-07-07",
					kilogram: 76,
					calories: 390,
				},
			],
		},
		{
			userId: 18,
			sessions: [
				{
					day: "2020-07-01",
					kilogram: 70,
					calories: 240,
				},
				{
					day: "2020-07-02",
					kilogram: 69,
					calories: 220,
				},
				{
					day: "2020-07-03",
					kilogram: 70,
					calories: 280,
				},
				{
					day: "2020-07-04",
					kilogram: 70,
					calories: 500,
				},
				{
					day: "2020-07-05",
					kilogram: 69,
					calories: 160,
				},
				{
					day: "2020-07-06",
					kilogram: 69,
					calories: 162,
				},
				{
					day: "2020-07-07",
					kilogram: 69,
					calories: 390,
				},
			],
		},
	],
	USER_AVERAGE_SESSIONS: [
		{
			userId: 9,
			sessions: [
				{
					day: 1,
					sessionLength: 22,
				},
				{
					day: 2,
					sessionLength: 33,
				},
				{
					day: 3,
					sessionLength: 44,
				},
				{
					day: 4,
					sessionLength: 28,
				},
				{
					day: 5,
					sessionLength: 36,
				},
				{
					day: 6,
					sessionLength: 50,
				},
				{
					day: 7,
					sessionLength: 45,
				},
			],
		},
		{
			userId: 12,
			sessions: [
				{
					day: 1,
					sessionLength: 30,
				},
				{
					day: 2,
					sessionLength: 23,
				},
				{
					day: 3,
					sessionLength: 45,
				},
				{
					day: 4,
					sessionLength: 50,
				},
				{
					day: 5,
					sessionLength: 0,
				},
				{
					day: 6,
					sessionLength: 0,
				},
				{
					day: 7,
					sessionLength: 60,
				},
			],
		},
		{
			userId: 18,
			sessions: [
				{
					day: 1,
					sessionLength: 30,
				},
				{
					day: 2,
					sessionLength: 40,
				},
				{
					day: 3,
					sessionLength: 50,
				},
				{
					day: 4,
					sessionLength: 30,
				},
				{
					day: 5,
					sessionLength: 30,
				},
				{
					day: 6,
					sessionLength: 50,
				},
				{
					day: 7,
					sessionLength: 50,
				},
			],
		},
	],
	USER_PERFORMANCE: [
		{
			userId: 9,
			kind: {
				1: "cardio",
				2: "energy",
				3: "endurance",
				4: "strength",
				5: "speed",
				6: "intensity",
			},
			data: [
				{
					value: 70,
					kind: 1,
				},
				{
					value: 100,
					kind: 2,
				},
				{
					value: 120,
					kind: 3,
				},
				{
					value: 70,
					kind: 4,
				},
				{
					value: 140,
					kind: 5,
				},
				{
					value: 110,
					kind: 6,
				},
			],
		},
		{
			userId: 12,
			kind: {
				1: "cardio",
				2: "energy",
				3: "endurance",
				4: "strength",
				5: "speed",
				6: "intensity",
			},
			data: [
				{
					value: 80,
					kind: 1,
				},
				{
					value: 120,
					kind: 2,
				},
				{
					value: 140,
					kind: 3,
				},
				{
					value: 50,
					kind: 4,
				},
				{
					value: 200,
					kind: 5,
				},
				{
					value: 90,
					kind: 6,
				},
			],
		},
		{
			userId: 18,
			kind: {
				1: "cardio",
				2: "energy",
				3: "endurance",
				4: "strength",
				5: "speed",
				6: "intensity",
			},
			data: [
				{
					value: 200,
					kind: 1,
				},
				{
					value: 240,
					kind: 2,
				},
				{
					value: 80,
					kind: 3,
				},
				{
					value: 80,
					kind: 4,
				},
				{
					value: 220,
					kind: 5,
				},
				{
					value: 110,
					kind: 6,
				},
			],
		},
	],
};
