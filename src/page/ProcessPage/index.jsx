import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FetchAPI } from "../../utils/utils";

import {UserContext} from "../../provider";


import { menubar } from "../../utils/const";


function ProcessPage(){

    const navigate = useNavigate();
	const user = useParams();
	const {
		bonjourProps,
		setBonjourProps,
		counterProps,
		setCounterProps,
		sessionProps,
		setSessionProps,
		performProps,
		setPerformProps,
		todayScProps,
		setTodayScProps,
		security,
		setSecurity,
	} = useContext(UserContext);

	Number(user.id) === Number(security) 
		? console.log("connexion safe") 
		: console.log("null");

	const [userData, setUserData] = useState([]);
	const [dailyActivities, setDailyActivities] = useState([]);
	const [averageSessions, setAverageSessions] = useState([]);
	const [performance, setPerformance] = useState([]);
	const [userId, setUserId] = useState(user.id);
    const [ready, setReady] = useState(false);
	const { REACT_APP_API_URL } = process.env;

	useEffect(() => {
		const fetchAPIData = async (setVar, id, path, group) => {
			try {
				const fetchedData = await FetchAPI(id, path, group);
				setVar(fetchedData);
			} catch (error) {
				console.log("erreur de fetch", error);
			}
		};

		if (userId < 15) {
			//get from mock
			fetchAPIData(setUserData, userId, `/mock/mock.json`, "main");
			fetchAPIData(setDailyActivities, userId, `/mock/mock.json`, "activity");
			fetchAPIData(
				setAverageSessions,
				userId,
				`/mock/mock.json`,
				"average-sessions"
			);
			fetchAPIData(setPerformance, userId, `/mock/mock.json`, "performance");
		} else {
			//get from API
			fetchAPIData(setUserData, userId, `${REACT_APP_API_URL}/${userId}`);
			fetchAPIData(
				setDailyActivities,
				userId,
				`${REACT_APP_API_URL}/${userId}/activity`
			);
			fetchAPIData(
				setAverageSessions,
				userId,
				`${REACT_APP_API_URL}/${userId}/average-sessions`
			);
			fetchAPIData(
				setPerformance,
				userId,
				`${REACT_APP_API_URL}/${userId}/performance`
			);
		}
	}, []);

if (userData?.length>0){
    if(userData?.score!==undefined){setTodayScProps(userData.score)}else{setTodayScProps(userData.todayScore)}

}


}
export default ProcessPage;