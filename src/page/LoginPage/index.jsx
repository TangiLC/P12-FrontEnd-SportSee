//Login page to get user id
//A more secured version is to be CODED ON PHASE 2
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import matchingId from "../../component/loginSecurity";
import Logo from "../../component/Logo";
import "../../sass/main.css";
import { SportSeeContext } from "../../provider";

function Login() {
	const navigate = useNavigate();
	const { setUserID, userID } = useContext(SportSeeContext);
	const [userFirstName, setUserFirstName] = useState("");
	const [userLastName, setUserLastName] = useState("");
	const [dataInfo, setDataInfo] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const id = matchingId(userFirstName, userLastName);

		if (id !== null) {
			setUserID(id);
			if (userID !== null) {
				navigate(`/dashboard/${(userID * 999979).toString(16)}`);
				setDataInfo("connexion en cours");
			}
		} else {
			setDataInfo("Vous n'êtes pas un utilisateur enregistré...");
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
				{dataInfo}
			</div>
		</div>
	);
}

export default Login;
