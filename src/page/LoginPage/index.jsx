//Login page to get user id
//A more secured version is to be CODED ON PHASE 2
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import matchingId from "../../component/loginSecurity";
import Logo from "../../component/Logo";
import "./style.css";
import {
	getUserData,
	addCount,
	normalizeCounter,
	addDayOfWeek,
	fusionArray,
} from "../../utils/utils";
import { SportSeeContext } from "../../provider";
const { REACT_APP_API_URL } = process.env;

function Login() {
	const navigate = useNavigate();
	const {
		userID,
		setUserID,
		sportData,
		setSportData,
		todayScore,
		setTodayScore,
		counter,
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
	const [userFirstName, setUserFirstName] = useState("");
	const [userLastName, setUserLastName] = useState("");
	const [loginInfo, setLoginInfo] = useState("");

	const getData = (id) => {
		getUserData(id, `${REACT_APP_API_URL}/`)
			.then((response) => {
				setSportData(response);
				setLoginInfo("Récupération des données en cours...");
				console.log(sportData);
			})
			.catch((error) => console.log("error : ", error));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const id = matchingId(userFirstName, userLastName);
		if (id != null) {
			setUserID(id);
			getData(userID);
		} else {
			setLoginInfo("Vous n'êtes pas un utilisateur enregistré...");
		}
	};

	const displayInfo = (txt) => {
		setTimeout(() => {
			setLoginInfo(txt);
		}, 500);
	};

	useEffect(() => {
		if (sportData.user?.userId !== undefined) {
			setTodayScore(
				sportData.user.todayScore === undefined
					? sportData.user.score
					: sportData.user.todayScore
			);
			setCounter(normalizeCounter(sportData.user.keyData));
			setFirstName(sportData.user.userInfos.firstName);
			displayInfo("Récupération du score du jour...");
		}
		if (sportData.activity?.userId !== undefined) {
			setDailyActivity(addCount(sportData.activity));
			displayInfo("Récupération de l'activité quotidienne...");
		}
		if (sportData.sessions?.userId !== undefined) {
			setAverageSessions(addDayOfWeek(sportData.sessions.datas.sessions));
			displayInfo("Récupération des sessions hebdomadaires...");
		}
		if (sportData.perform?.userId !== undefined) {
			setPerformance(
				fusionArray(sportData.perform.data.value, sportData.perform.data.kind)
			);
			displayInfo("Récupération des perfomances moyennes...");
		}
		
	}, [setAverageSessions, setCounter, setDailyActivity, setFirstName, setPerformance, setTodayScore, sportData]);

	return (
		<div
			className="background container-fluid row flex"
			style={{ height: "100vh" }}
		>
			<div className="col-lg-4 col-sm-10 card my-auto mx-auto text-center">
				<Logo />
				<form onSubmit={handleSubmit} autoComplete="off">
					<div>
						<label htmlFor="firstName">Prénom:&nbsp;</label>
						<input
							size="25"
							className="capitalize mt-1"
							type="text"
							id="firstName"
							value={userFirstName}
							onChange={(e) => {
								setUserFirstName(e.target.value);
								setLoginInfo("");
							}}
							required
						/>
					</div>
					<div>
						<label htmlFor="lastName">Nom:&nbsp;&thinsp;</label>
						<input
							size="27"
							className="capitalize mt-1"
							type="text"
							id="lastName"
							value={userLastName}
							onChange={(e) => {
								setUserLastName(e.target.value);
								setLoginInfo("");
							}}
							required
						/>
					</div>
					<button className="btn btn-danger mt-2 mb-1" type="submit">
						Connexion
					</button>
				</form>
				<div className="loginMessage">{loginInfo}</div>
			</div>
		</div>
	);
}

export default Login;
