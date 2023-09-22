//Login page to get user id
//A more secured version is to be CODED ON PHASE 2
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import matchingId from "../../component/loginSecurity";
import Logo from "../../component/Logo";
import "./style.css";

import { SportSeeContext } from "../../provider";

function Login() {
	const navigate = useNavigate();
	const {
		bonjourProvid,
		setBonjourProvid,
		counterProvid,
		setCounterProvid,
		sessionProvid,
		setSessionProvid,
		performProvid,
		setPerformProvid,
		todayScoreProvid,
		setTodayScoreProvid,
		userID,
		setUserID,
	} = useContext(SportSeeContext);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [noMatch, setNoMatch] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const id = matchingId(firstName, lastName);
		if (id != null) {
			setUserID(id);
			//navigate(`/Dashboard/${id}`);
			navigate(`/Process/${id}`);
		} else {
			setNoMatch("Vous n'êtes pas un utilisateur enregistré...");
		}
	};

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
							value={firstName}
							onChange={(e) => {
								setFirstName(e.target.value);
								setNoMatch("");
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
							value={lastName}
							onChange={(e) => {
								setLastName(e.target.value);
								setNoMatch("");
							}}
							required
						/>
					</div>
					<button className="btn btn-danger mt-2 mb-1" type="submit">
						Connexion
					</button>
				</form>
				<div className="loginMessage">{noMatch}</div>
			</div>
		</div>
	);
}

export default Login;
