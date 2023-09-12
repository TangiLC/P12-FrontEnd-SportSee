import React, { useState, useEffect } from "react";
import axios from "axios";
const { REACT_APP_API_URL } = process.env;

export async function FetchAPI(id, path, group) {
	try {
		const response = await axios.get(path);
		//console.log("response", response.data, "case", group);

		let datas = {};
		switch (group) {
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
			default: //using API not mock
				return response.data.data;
		}
		const filteredData = datas.find((item) => item.userId === Number(id));
		console.log(group,filteredData)
		return filteredData;
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}

