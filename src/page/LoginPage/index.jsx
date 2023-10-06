//Login page to get user id
//A more secured version is to be CODED ON PHASE 2
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import matchingId from "../../component/loginSecurity";
import Logo from "../../component/Logo";
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
	const [dataInfo, setDataInfo] = useState("");
	const [displayInfo, setDisplayInfo] = useState("");
	const [messageIndex, setMessageIndex] = useState(0);

	const getData = (id) => {
		getUserData(id, `${REACT_APP_API_URL}/`)
			.then((response) => {
				setSportData(response);
				sportData.isApiData
					? setDataInfo("Récupération des données de l'API en cours...")
					: setDataInfo("Récupération des données mockées en cours...");
				console.log(sportData);
			})
			.catch((error) => console.log("error : ", error));
	};
	
	

	const handleSubmit = (e) => {
		e.preventDefault();
		const id = matchingId(userFirstName, userLastName);
		if (id !== null) {
			setUserID(id);
			getData(id);
		} else {
			setDataInfo("Vous n'êtes pas un utilisateur enregistré...");
		}
	};

	useEffect(() => {
		const messages = [
			"Mise à jour des données quotidiennes...",
			"Traitement des données de sessions...",
			"Calcul des données nutritionnelles...",
			"Récupération des performances...",
			"Détermination de l'objectif quotidien...",
			"Préparation de l'affichage...",
			"",
		];

		if (
			firstName !== null &&
			dailyActivity !== null &&
			averageSessions !== null &&
			performance !== null
		) {
			const timer = setTimeout(() => {
				if (messageIndex < messages.length) {
					setDisplayInfo(messages[messageIndex]);
					setMessageIndex(messageIndex + 1);
				}
			}, 800);
			if (messageIndex === messages.length) {
				navigate(`/dashboard/${firstName}${userID}`);
			}
			return () => {
				clearTimeout(timer);
			};
		}
	}, [
		messageIndex,
		firstName,
		dailyActivity,
		averageSessions,
		performance,
		navigate,
		userID,
	]);

	useEffect(() => {
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
		console.log()
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
								setDataInfo("");
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
								setDataInfo("");
							}}
							required
						/>
					</div>
					<button className="btn btn-danger mt-2 mb-1" type="submit">
						Connexion
					</button>
				</form>
				<div className="dataInfo">{dataInfo}</div>
				<div className="displayInfo">{displayInfo}</div>
			</div>
		</div>
	);
}

export default Login;
