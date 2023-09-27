import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
	FetchAPI,
	noTreatment,
	addCount,
	normalizeCounter,
	addDayOfWeek,
	fusionArray,
} from "../../utils/utils";

import  {useSportSee}  from "../../provider";


function ProcessPage() {
	const navigate = useNavigate();
	const user = useParams();
const {
		bonjourProvid,
		setBonjourProvid,
		counterProvid,
		setCounterProvid,
		dailyProvid,
		setDailyProvid,
		sessionProvid,
		setSessionProvid,
		performProvid,
		setPerformProvid,
		todayScoreProvid,
		setTodayScoreProvid,
		userID,
	} = useSportSee;
	console.log('userID',useSportSee.userID)
	const [userData, setUserData] = useState([]);
	const [dailyActivities, setDailyActivities] = useState([]);
	const [averageSessions, setAverageSessions] = useState([]);
	const [performance, setPerformance] = useState([]);
	const [ready, setReady] = useState(false);
	const { REACT_APP_API_URL } = process.env;

	const getAPIData = async (setVar, id, path, group) => {
		try {
			const fetchedData = await FetchAPI(id, path, group);
			setVar(fetchedData);
		} catch (error) {
			console.log("erreur de fetch", error);
		}
	};

	useEffect(() => {
		if (userID < 15) {
			//****************************get datas from mock for user Id <15
			getAPIData(setUserData, userID, `/mock/mock.json`, "main");
			if (userData && userData.length > 0) {
				setTodayScoreProvid(
					userData.todayScore === undefined
						? userData.score
						: userData.todayScore
				);
				console.log("todayScoreProvid", todayScoreProvid);

				setCounterProvid(normalizeCounter(userData.keyData));
				console.log("counterProvid", counterProvid);

				setBonjourProvid(userData.userInfos.firstName);
				console.log("bonjourProvid", bonjourProvid);
			}

			getAPIData(setDailyActivities, userID, `/mock/mock.json`, "activity");

			if (dailyActivities && dailyActivities.length > 0) {
				setDailyProvid(addCount(dailyActivities));
				console.log("dailyProvid", dailyProvid);
			}

			getAPIData(
				setAverageSessions,
				userID,
				`/mock/mock.json`,
				"average-sessions"
			);
			if (averageSessions && averageSessions.length > 0) {
				setSessionProvid(addDayOfWeek(averageSessions.datas.sessions));
				console.log("sessionProvid", sessionProvid);
			}

			getAPIData(setPerformance, userID, `/mock/mock.json`, "performance");
			if (performance && performance.length > 0) {
				setPerformProvid(
					fusionArray(performance.data.value, performance.data.kind)
				);
				console.log("performProvid", performProvid);
			}
		} /*else {
			//******************************get datas from API for user Id >= 15
			getAPIData(setUserData, userID, `${REACT_APP_API_URL}/${userID}`);
			getAPIData(
				setDailyActivities,
				userID,
				`${REACT_APP_API_URL}/${userID}/activity`
			);
			getAPIData(
				setAverageSessions,
				userID,
				`${REACT_APP_API_URL}/${userID}/average-sessions`
			);
			getAPIData(
				setPerformance,
				userID,
				`${REACT_APP_API_URL}/${userID}/performance`
			);
		}*/
	}, []);

	useEffect(() => {
		if (
			todayScoreProvid !== undefined &&
			bonjourProvid !== undefined &&
			dailyProvid !== undefined
		) {
			//navigate(`/Dashboard/${userID}`);
			console.log("FETCHED", useSportSee);
		}
	}, []);
}
export default ProcessPage;
