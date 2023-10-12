import React, { useState, useContext, useEffect } from "react";
import "../../sass/main.css";
import {
	getUserData,
	normalizeScore,
	addCount,
	normalizeCounter,
	addDayOfWeek,
	fusionArray,
} from "../../utils/utils";
import { SportSeeContext } from "../../provider";
import PropagateLoader from "react-spinners/PropagateLoader";
const { REACT_APP_API_URL } = process.env;

export function GetUserData(props) {
	const {
		userID,
		sportData,
		setSportData,
		setTodayScore,
		setCounter,
		firstName,
		setFirstName,
		dailyActivity,
		setDailyActivity,
		averageSessions,
		setAverageSessions,
		performance,
		setPerformance,
	} = useContext(SportSeeContext);

	const [dataInfo, setDataInfo] = useState("");


	useEffect(() => {
		setSportData({});
		setTodayScore(null);
		setCounter(null);
		setFirstName(null);
		setDailyActivity(null);
		setAverageSessions(null);
		setPerformance(null);
		setDataInfo("Récupération des données en cours");
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const getData = (id) => {
			getUserData(id, `${REACT_APP_API_URL}/`)
				.then((response) => {
					setSportData(response);
				})
				.catch((error) => console.log("error : ", error));
		};
		getData(userID);
	}, [setSportData, userID]);

	useEffect(() => {
		if (
			firstName !== null &&
			dailyActivity !== null &&
			averageSessions !== null &&
			performance !== null
		) {
			props.toggleIsLoading();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [firstName, dailyActivity, averageSessions, performance]);

	useEffect(() => {
		if (sportData.isAPIData !== undefined) {
			sportData.isAPIData
				? setDataInfo("Récupération des données de l'API en cours...")
				: setDataInfo("Récupération des données mockées en cours...");
		} else {
			setDataInfo("Récupération des données en cours");
		}
		if (sportData.user?.id !== undefined) {
			setTodayScore(normalizeScore(sportData.user));
			setCounter(normalizeCounter(sportData.user.keyData));
			setFirstName(sportData.user.userInfos.firstName);
		}
		if (sportData.activity?.userId !== undefined) {
			setDailyActivity(addCount(sportData.activity.sessions));
		}
		if (sportData.sessions?.userId !== undefined) {
			setAverageSessions(addDayOfWeek(sportData.sessions.sessions));
		}
		if (sportData.perform?.userId !== undefined) {
			setPerformance(
				fusionArray(sportData.perform.data, sportData.perform.kind)
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		setAverageSessions,
		setCounter,
		setDailyActivity,
		setFirstName,
		setPerformance,
		setTodayScore,
		sportData,
	]);


	return (
		<>
			<div
				className="background container-fluid row flex"
				style={{ height: "100vh" }}
			>
				<div className="col-lg-4 col-sm-10 card my-auto mx-auto py-3 text-center">
					<h5>{dataInfo}</h5>
					<p>
						<PropagateLoader
							size={18}
							color="#e60000"
							loading={true}
							speedMultiplier={0.7}
						/>
					</p>
				</div>
			</div>
		</>
	);
}
