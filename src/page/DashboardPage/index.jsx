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

import { menubar } from "../../utils/const";

function DashboardPage() {
	const navigate = useNavigate();
	const user = useParams();
	const {
		userID,
		todayScore,
		counter,
		firstName,
		dailyActivity,
		averageSessions,
		performance,
	} = useContext(SportSeeContext);

	
	//this is a small security check to ensure user does not type random name
	useEffect(() => {
		if (user.name !== (`${firstName}${userID}`)) {
			navigate("/");
		}
	}, [user.name, firstName, navigate, userID]);

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
