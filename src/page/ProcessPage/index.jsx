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
	} = useSportSee();

	/*const [userData, setUserData] = useState([]);
	const [dailyActivities, setDailyActivities] = useState([]);
	const [averageSessions, setAverageSessions] = useState([]);
	const [performance, setPerformance] = useState([]);
	const [ready, setReady] = useState(false);*/
	const { REACT_APP_API_URL } = process.env;

	useEffect(() => {
		const getAPIData = (id, path, group) => {
			
				return FetchAPI(id, path, group);

			
		};

		if (userID < 15) {
			//****************************get datas from mock for user Id <15
			console.log("fetchData", getAPIData(user.id, `/mock/mock.json`, "main"));

			setTodayScoreProvid(
				getAPIData(userID, `/mock/mock.json`, "main").todayScore === undefined
					? getAPIData(userID, `/mock/mock.json`, "main").score
					: getAPIData(userID, `/mock/mock.json`, "main").todayScore
			);
			console.log("todayScoreProvid", todayScoreProvid);

			setCounterProvid(
				normalizeCounter(
					getAPIData(userID, `/mock/mock.json`, "main").keyData
				)
			);
			console.log('counterProvid',counterProvid)

			setBonjourProvid(
				getAPIData(userID, `/mock/mock.json`, "main").userInfos.firstName
			);
			console.log("bonjourProvid", bonjourProvid);

			setDailyProvid(
				addCount(getAPIData(userID, `/mock/mock.json`, "activity"))
			);
			console.log("dailyProvid", dailyProvid);

			setSessionProvid(
				addDayOfWeek(
					getAPIData(userID, `/mock/mock.json`, "average-sessions").datas
						.sessions
				)
			);
			console.log("sessionProvid", sessionProvid);

			setPerformProvid(
				fusionArray(
					getAPIData(userID, `/mock/mock.json`, "performance").data.value,
					getAPIData(userID, `/mock/mock.json`, "performance").data.kind
				)
			);
			console.log("performProvid", performProvid);
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
