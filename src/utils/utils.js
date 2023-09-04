import React, { useState, useEffect } from "react";
import axios from "axios";


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

