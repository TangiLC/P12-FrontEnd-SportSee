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

import { SportSeeContext } from "../../provider";

function ProcessPage() {
	const navigate = useNavigate();
	const user = useParams();
	const {
		userData,
		setUserData,
		dailyActivities,
		setDailyActivities,
		averageSessions,
		setAverageSessions,
		performance,
		setPerformance,
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
	} = useContext(SportSeeContext);
	console.log("context", SportSeeContext);

	const [ready, setReady] = useState(false);
	const { REACT_APP_API_URL } = process.env;

	const getAPIData = async (id, path, group) => {
		try {
			const fetchedData = await FetchAPI(id, path, group);
			console.log("fetched", fetchedData);
			return fetchedData;
		} catch (error) {
			console.log("erreur de fetch", error);
		}
	};

	useEffect(() => {
		if (userID < 15) {
			//****************************get datas from mock for user Id <15
			setUserData(getAPIData(userID, `/mock/mock.json`, "main"));
			setDailyActivities(getAPIData(userID, `/mock/mock.json`, "activity"));
			setPerformance(getAPIData(userID, `/mock/mock.json`, "performance"));
			setAverageSessions(
				getAPIData(userID, `/mock/mock.json`, "average-sessions")
			);
			console.log(
				"got from Mock :",
				userData,
				dailyActivities,
				performance,
				averageSessions
			);
		} else {
			setUserData(getAPIData(userID, `${REACT_APP_API_URL}/${userID}`));
			setAverageSessions(
				getAPIData(userID, `${REACT_APP_API_URL}/${userID}/average-sessions`)
			);
			setPerformance(
				getAPIData(userID, `${REACT_APP_API_URL}/${userID}/performance`)
			);
			setDailyActivities(
				getAPIData(userID, `${REACT_APP_API_URL}/${userID}/activity`)
			);
			console.log(
				"got from API :",
				userData,
				dailyActivities,
				performance,
				averageSessions
			);
		}
	}, [
		REACT_APP_API_URL,
		averageSessions,
		dailyActivities,
		performance,
		userData,
		userID,
	]);

	useEffect(() => {
		if (userData && userData.length > 0) {
			setTodayScoreProvid(
				userData.todayScore === undefined ? userData.score : userData.todayScore
			);
			console.log("todayScoreProvid", todayScoreProvid);

			setCounterProvid(normalizeCounter(userData.keyData));
			console.log("counterProvid", counterProvid);

			setBonjourProvid(userData.userInfos.firstName);
			console.log("bonjourProvid", bonjourProvid);
		}

		if (dailyActivities && dailyActivities.length > 0) {
			setDailyProvid(addCount(dailyActivities));
			console.log("dailyProvid", dailyProvid);
		}

		if (averageSessions && averageSessions.length > 0) {
			setSessionProvid(addDayOfWeek(averageSessions.datas.sessions));
			console.log("sessionProvid", sessionProvid);
		}

		if (performance && performance.length > 0) {
			setPerformProvid(
				fusionArray(performance.data.value, performance.data.kind)
			);
			console.log("performProvid", performProvid);
		}
	}, [
		userData,
		dailyActivities,
		averageSessions,
		performance,
		setTodayScoreProvid,
		todayScoreProvid,
		setCounterProvid,
		counterProvid,
		setBonjourProvid,
		bonjourProvid,
		setDailyProvid,
		dailyProvid,
		setSessionProvid,
		sessionProvid,
		setPerformProvid,
		performProvid,
	]);

	useEffect(() => {
		if (
			bonjourProvid &&
			bonjourProvid.length > 0 &&
			counterProvid &&
			counterProvid.length > 0 &&
			dailyProvid &&
			dailyProvid.length > 0 &&
			sessionProvid &&
			sessionProvid.length > 0 &&
			performProvid &&
			performProvid.length > 0 &&
			todayScoreProvid &&
			todayScoreProvid.length > 0
		) {
			navigate(`/Dashboard/${userID}`);
		}
	}, []);
}
export default ProcessPage;
