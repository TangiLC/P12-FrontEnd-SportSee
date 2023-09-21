import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
	FetchAPI,
	addCount,
	addDayOfWeek,
	fusionArray,
} from "../../utils/utils";

import { useSportSee } from "../../provider";

import { menubar } from "../../utils/const";

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
		setUserID,
	} = useSportSee();

	const [userData, setSportSeeData] = useState([]);
	const [dailyActivities, setDailyActivities] = useState([]);
	const [averageSessions, setAverageSessions] = useState([]);
	const [performance, setPerformance] = useState([]);
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

		if (userID < 15) {
			//get from mock
			fetchAPIData(setSportSeeData, userID, `/mock/mock.json`, "main");

			fetchAPIData(setDailyActivities, userID, `/mock/mock.json`, "activity");
			if (dailyActivities) {
				console.log("DAILY ACTIVITIES : FETCHED");
				setDailyProvid(addCount(dailyActivities))
			}

			fetchAPIData(
				setAverageSessions,
				userID,
				`/mock/mock.json`,
				"average-sessions"
			);
			if (averageSessions) {
				console.log("AVERAGE SESSIONS: FETCHED");
			}

			fetchAPIData(setPerformance, userID, `/mock/mock.json`, "performance");
			if (performance) {
				console.log("AVERAGE SESSIONS: FETCHED");
			}
		} else {
			//get from API
			fetchAPIData(setSportSeeData, userID, `${REACT_APP_API_URL}/${userID}`);
			fetchAPIData(
				setDailyActivities,
				userID,
				`${REACT_APP_API_URL}/${userID}/activity`
			);
			fetchAPIData(
				setAverageSessions,
				userID,
				`${REACT_APP_API_URL}/${userID}/average-sessions`
			);
			fetchAPIData(
				setPerformance,
				userID,
				`${REACT_APP_API_URL}/${userID}/performance`
			);
		}
	}, [userData, dailyActivities, averageSessions, performance]);

	useEffect(() => {
		if (userData) {
				console.log("USER DATA : FETCHED", userData);
				if (userData?.score !== undefined) {
					setTodayScoreProvid(userData?.score);
				} else {
					setTodayScoreProvid(userData?.todayScore);
				}
				setBonjourProvid(userData?.userInfos?.firstName);
			}
	}, [userData]);

	useEffect(() => {
		if (todayScoreProvid !== null && bonjourProvid !== null && dailyProvid !== null) {
			navigate(`/Dashboard/${userID}`);
			console.log(todayScoreProvid, bonjourProvid);
		}
	}, [todayScoreProvid, bonjourProvid, dailyProvid, userID]);
}
export default ProcessPage;
