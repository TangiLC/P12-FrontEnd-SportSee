import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FetchAPI } from "../../utils/utils";

import Logo from "../../component/Logo";
import { UserContext } from "../../App";

import HorizontalWarning from "../../component/HorizontalWarning";
import Navbar from "../../component/Navbar";
import MenuBar from "../../component/MenuBar";
import Bonjour from "../../component/Bonjour";
import Counter from "../../component/Counter";
import DailyActivity from "../../component/DailyActivity";
import AverageSessions from "../../component/AverageSessions";
import TodayScore from "../../component/TodayScore";
import "./style.css";

import { menubar } from "../../utils/const";

function DashboardPage() {
	const navigate = useNavigate();
	const user = useParams();
	const { security } = useContext(UserContext);

	Number(user.id) === Number(security) //this is to prevent user from typing any 'id' in address bar
		? console.log("connexion safe") //the security number is the id provided by login
		: console.log("null");

	const [datas, setDatas] = useState([]);
	const [countData, setCountData] = useState([]);
	const [userData, setUserData] = useState([]);
	const [dailyActivities, setDailyActivities] = useState([]);
	const [averageSessions, setAverageSessions] = useState([]);
	const [performance, setPerformance] = useState([]);
	const [userId, setUserId] = useState(user.id);
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
										firstName={userData?.userInfos?.firstName}
										yesterdayObjective={110}
									/>
								</div>
							</div>
							<div className="row structure">
								<div className="col-sm-12 col-lg-9">
									<div className="row ">
										<div className="col-md-12 dailyActivity">
											<DailyActivity datas={dailyActivities} />
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
										<div className="col-md-4">Performance </div>
										<div className="col-md-4 todayScore">
											<TodayScore score={userData?.todayScore} />
											<div className="todayScore-title" >
												<h2>{userData?.todayScore*100}%</h2> de votre objectif
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
