import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import matchingId from "../../component/loginSecurity";
import Logo from "../../component/Logo";
import "./style.css";

import { UserContext } from '../../App';


function Login() {
	const navigate = useNavigate();
	const { setSecurity } = useContext(UserContext);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [noMatch, setNoMatch] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Nom:", lastName, "Prénom:", firstName);
		const id = matchingId(firstName, lastName);
		if (id != null) {
			setSecurity(id)
			navigate(`/Dashboard/${id}`);
		} else {
			setNoMatch("Vous n'êtes pas un utilisateur enregistré...");
		}
	};

	return (
		<div
			className="background container-fluid row flex"
			style={{ height: "100vh" }}
		>
			<div className="col-4 card my-auto mx-auto text-center">
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
