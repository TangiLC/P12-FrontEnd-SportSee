import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import matchingId from "../../component/loginSecurity";
import Logo from "../../component/Logo";
import "./style.css";


function Login() {
	const navigate = useNavigate();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [noMatch, setNoMatch] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Nom:", lastName, "Prénom:", firstName);
		const id = matchingId(firstName, lastName);
		if (id != null) {
			console.log("navigate id", id);
			setNoMatch("Utilisateur enregistré");
			//navigate(`/dashboard:${id}`);
		} else {
			setNoMatch("Vous n'êtes pas un utilisateur enregistré");
		}
	};

	return (
		<div
			className="background container-fluid row flex"
			style={{ height: "100vh" }}
		>
			<div className="col-4 card my-auto mx-auto text-center">
				<Logo />
				<form onSubmit={handleSubmit}>
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
				{noMatch}
			</div>
		</div>
	);
}

export default Login;
