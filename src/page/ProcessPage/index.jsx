import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
	getUserData,
	noTreatment,
	addCount,
	normalizeCounter,
	addDayOfWeek,
	fusionArray,
} from "../../utils/utils";

import { SportSeeContext } from "../../provider";

async function ProcessPage() {
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
	} = useContext(SportSeeContext);

	const [fetchedData, setFetchedData] = useState(null);
	const [userData, setUserData] = useState(null);
	const [dailyActivities, setDailyActivities] = useState(null);
	const [averageSessions, setAverageSessions] = useState(null);
	const [performance, setPerformance] = useState(null);
	const [loadingState, setLoadingState] = useState("loading");
	const { REACT_APP_API_URL } = process.env;

	const errorHandle = (error) => {
		console.log("Error : ", error);
		setLoadingState("NotFound");
	};
	const responseHandle = (response) => {
		if (response.user === undefined) {
			return errorHandle("User was not found");
		} else {
			setLoadingState("Success");
			setFetchedData(response);
			setUserData(fetchedData.user); console.log('user',userData)
			setDailyActivities(fetchedData.activity); console.log('acitivity',dailyActivities)
			setAverageSessions(fetchedData.averageSessions);console.log('sessions',averageSessions)
			setPerformance(fetchedData.performance);console.log('perf',performance)
		}
	};

	useEffect(() => {
		getUserData(userID, `${REACT_APP_API_URL}/`)
			.then((response) => responseHandle(response))
			.catch((error) => errorHandle(error));
	}, []);

	//fetch data then normalize Score, Counter and Bonjour

	/*if (userData){console.log('userData',userData)}
		if (userData?.length > 0) {
			setTodayScoreProvid(
				userData.todayScore === undefined ? userData.score : userData.todayScore
			);
			console.log("todayScoreProvid", todayScoreProvid);

			setCounterProvid(normalizeCounter(userData.keyData));
			console.log("counterProvid", counterProvid);
			setBonjourProvid(userData.userInfos.firstName);
			console.log("bonjourProvid", bonjourProvid);
		}*/

	/*fetch data then normalize Daily Activities
	useEffect(() => {
		const getPath = isMocked
			? `/mock/mock.json`
			: `${REACT_APP_API_URL}/${userID}/activity`;
		const getGroup = isMocked ? "activity" : "api";

		FetchAPI(userID, getPath, getGroup, setDailyActivities);

		if (dailyActivities?.length > 0) {
			setDailyProvid(addCount(dailyActivities));
			console.log("dailyProvid", dailyProvid);
		}
	}, [dailyActivities]);

	//fetch data then normalize Sessions
	useEffect(() => {
		const getPath = isMocked
			? `/mock/mock.json`
			: `${REACT_APP_API_URL}/${userID}/average-sessions`;
		const getGroup = isMocked ? "average-sessions" : "api";
		FetchAPI(userID, getPath, getGroup, setAverageSessions);

		if (averageSessions?.length > 0) {
			setSessionProvid(addDayOfWeek(averageSessions.datas.sessions));
			console.log("sessionProvid", sessionProvid);
		}
	}, [averageSessions]);
	//fetch data then normalize Performance
	useEffect(() => {
		const getPath = isMocked
			? `/mock/mock.json`
			: `${REACT_APP_API_URL}/${userID}/performance`;
		const getGroup = isMocked ? "performance" : "api";

		FetchAPI(userID, getPath, getGroup, setPerformance);

		if (performance?.length > 0) {
			setPerformProvid(
				fusionArray(performance.data.value, performance.data.kind)
			);
			console.log("performProvid", performProvid);
		}
	}, [performance]);

	
	useEffect(() => {
		if (
			bonjourProvid &&
			bonjourProvid.length > 0 /*&&
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
			console.log("*************READY*******");
			//navigate(`/Dashboard/${userID}`);
		}
	}, []);*/
}
export default ProcessPage;
