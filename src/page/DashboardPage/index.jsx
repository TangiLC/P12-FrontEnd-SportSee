import React, { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { SportSeeContext } from "../../provider";

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
		userID,
		sportData,
		todayScore,
		counter,
		firstName,
		dailyActivity,
		averageSessions,
		performance,
	} = useContext(SportSeeContext);

	console.log(
		userID,
		sportData,
		todayScore,
		counter,
		firstName,
		dailyActivity,
		averageSessions,
		performance
	);
	//this is a shortened security check to ensure user did not type
	//any id, should rather use encrypted token : TO BE CODED PHASE 2
	useEffect(() => {
		if (user.name !== firstName) {
			navigate("/");
		}
	}, [user.name, firstName, navigate]);

	console.log("context", SportSeeContext);

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
									<Bonjour firstName={firstName} yesterdayObjective={110} />
								</div>
							</div>
							<div className="row structure">
								<div className="col-sm-12 col-lg-9">
									<div className="row ">
										<div className="col-md-12 dailyActivity">
											<DailyActivity
												data={dailyActivity !== null ? dailyActivity : []}
											/>
										</div>
									</div>
									<div className="row user-figures">
										<div className="col-md-4 averageSession">
											<AverageSessions
												data={averageSessions !== null ? averageSessions : []}
											/>
											<div className="averageSession-title">
												Durée moyenne des sessions
											</div>
											<div className="week-end-shadow"></div>
										</div>
										<div className="col-md-4 performance">
											<Performance
												data={performance !== null ? performance : []}
											/>{" "}
										</div>
										<div className="col-md-4 todayScore">
											<div className="todayScore-title">Score</div>
											<TodayScore
												score={todayScore !== null ? todayScore : 0}
											/>
											<div className="todayScore-goal">
												<h2>{todayScore !== null ? todayScore * 100 : 0}%</h2>{" "}
												de votre objectif
											</div>
										</div>
									</div>
								</div>
								<div className="col-sm-12 col-lg-3">
									<Counter items={counter !== null ? counter : []} />
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
