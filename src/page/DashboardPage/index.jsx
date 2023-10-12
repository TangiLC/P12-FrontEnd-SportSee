import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { SportSeeContext } from "../../provider";

import HorizontalWarning from "../../component/HorizontalWarning";
import { GetUserData } from "../../component/GetUserData";
import Navbar from "../../component/Navbar";
import MenuBar from "../../component/MenuBar";
import Bonjour from "../../component/Bonjour";
import Counter from "../../component/Counter";
import DailyActivity from "../../component/DailyActivity";
import AverageSessions from "../../component/AverageSessions";
import Performance from "../../component/Performance/performance";
import TodayScore from "../../component/TodayScore";
import "../../sass/main.css";

import { menubar } from "../../utils/const";

function DashboardPage() {
	const [isLoading, setIsLoading] = useState(true);

	const toggleIsLoading = () => {
		const delay = setTimeout(() => {
			setIsLoading(false);
		}, 2000);
		return () => clearTimeout(delay);
	};

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

	//this is a small security check to ensure user does not type random id
	useEffect(() => {
		if (user.hexID !== `${(userID * 999979).toString(16)}`) {
			navigate("/");
		}
	}, [user, navigate, userID]);

	return (
		<>
			{isLoading ? (
				<GetUserData toggleIsLoading={toggleIsLoading} />
			) : (
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
													<div className="todayScore-title">
														Activité quotidienne
													</div>
													<DailyActivity
														data={dailyActivity !== null ? dailyActivity : []}
													/>
												</div>
											</div>
											<div className="row user-figures">
												<div className="col-md-4 averageSession">
													<AverageSessions
														data={
															averageSessions !== null ? averageSessions : []
														}
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
														<h2>
															{todayScore !== null ? todayScore * 100 : 0}%
														</h2>{" "}
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
			)}
		</>
	);
}
export default DashboardPage;
