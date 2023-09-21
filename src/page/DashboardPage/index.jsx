import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FetchAPI } from "../../utils/utils";

//import { SportSeeContext } from "../../App";
import {useSportSee} from "../../provider";

import HorizontalWarning from "../../component/HorizontalWarning";
import Navbar from "../../component/Navbar";
import MenuBar from "../../component/MenuBar";
import Bonjour from "../../component/Bonjour";
import Counter from "../../component/Counter";
import DailyActivity from "../../component/DailyActivity";
import AverageSessions from "../../component/AverageSessions";
import Performance from "../../component/Performance/performance";
import TodayScore from "../../component/TodayScore";
import "./style.css";

//This object is the list of icons to be displayed in MenuBar.
//TO BE CODED PHASE 2 : store the list using Redux, change in page Settings
import { menubar } from "../../utils/const";

function DashboardPage() {
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
//this is to prevent user from typing any 'id' in address bar
//the userID number is the id provided by login. This is not
//true userID, encrypted token prevails: TO BE CODED PHASE 2
	Number(user.id) === Number(userID) 
		? console.log("connexion safe") 
		: console.log("null");
	console.log(useSportSee())

	const [userData, setSportSeeData] = useState([]);
	const [dailyActivities, setDailyActivities] = useState([]);
	const [averageSessions, setAverageSessions] = useState([]);
	const [performance, setPerformance] = useState([]);
	const [userId, setSportSeeId] = useState(user.id);
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
			fetchAPIData(setSportSeeData, userId, `/mock/mock.json`, "main");
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
			fetchAPIData(setSportSeeData, userId, `${REACT_APP_API_URL}/${userId}`);
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

	return (
		<>
			<HorizontalWarning />
			<div className="container-flex content">
				<Navbar />
				<div className="container-fluid">
					<div className="row">
						<MenuBar toggle={menubar.toggle} items={menubar.items} />
						<div className="col">
							<div className="row">
								<div className="col-md-12">
									<Bonjour
										firstName={bonjourProvid}
										yesterdayObjective={110}
									/>
								</div>
							</div>
							<div className="row structure">
								<div className="col-sm-12 col-lg-9">
									<div className="row ">
										<div className="col-md-12 dailyActivity">
											<DailyActivity datas={dailyProvid!==null?dailyProvid:[]} />
										</div>
									</div>
									<div className="row user-figures">
										<div className="col-md-4 averageSession">
											<AverageSessions datas={averageSessions} />
											<div className="averageSession-title">
												Durée moyenne des sessions
											</div>
											<div className="week-end-shadow"></div>
										</div>
										<div className="col-md-4 performance"><Performance data={performance}/> </div>
										<div className="col-md-4 todayScore">
											<div className="todayScore-title">Score</div>
											<TodayScore score={todayScoreProvid!==null?todayScoreProvid:0} />
											<div className="todayScore-goal" >
												<h2>{todayScoreProvid!==null?todayScoreProvid*100:0}%</h2> de votre objectif
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-12 col-lg-3">
									<Counter items={userData.keyData} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default DashboardPage;
