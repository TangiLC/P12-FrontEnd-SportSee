import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FetchAPI } from "../../utils/utils";

import Logo from "../../component/Logo";
import { UserContext } from "../../App";
import Page404 from "../../component/Page404";
import HorizontalWarning from "../../component/HorizontalWarning";
import Navbar from "../../component/Navbar";
import MenuBar from "../../component/MenuBar";
import Bonjour from "../../component/Bonjour";
import Counter from "../../component/Counter";
import "./style.css";

import { menubar } from "../../utils/const";

function DashboardPage() {
	const navigate = useNavigate();
	const user = useParams();
	const { security } = useContext(UserContext);

	Number(user.id) === Number(security) //this is to prevent user from typing any 'id' in address bar
		? console.log("connexion safe") //the security number is the id provided by login
		: console.log("null");

	const [countData, setCountData] = useState([]);

	const [data, setData] = useState([]);
	const [userId, setUserId] = useState(user.id);
	const { REACT_APP_API_URL } = process.env;

	useEffect(() => {
		const fetchAPIData = async (id, path, group) => {
			try {
				const fetchedData = await FetchAPI(id, path, group);
				setData(fetchedData);
				console.log("userid", id, "data", data);
			} catch (error) {
				console.log("erreur de fetch", error);
			}
		};

		if (userId < 15) {
			let path = `/mock/mock.json`;
			fetchAPIData(userId, path, "main");
		} else {
			let path = `${REACT_APP_API_URL}/${userId}`;
			fetchAPIData(userId, path);
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
										firstName={data?.userInfos?.firstName}
										yesterdayObjective={110}
									/>
								</div>
							</div>
							<div className="row">
								<div className="col-md-9">
									<div className="row">
										<div className="col-md-12">Activité</div>
									</div>
									<div className="row">
										<div className="col-md-4">Durée moyenne</div>
										<div className="col-md-4">Performance</div>
										<div className="col-md-4">Score</div>
									</div>
								</div>
								<div className="col-md-3"><Counter items={data.keyData}/></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default DashboardPage;
