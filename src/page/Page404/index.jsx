import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import matchingId from "../../component/loginSecurity";
import Logo from "../../component/Logo";
import "./style.css";

import { UserContext } from "../../App";
import DashboardPage from "../DashboardPage";

export default function Page404() {
	return (
		<div className="no-result">
			<div className="falling-container">
				<div className="falling-text">404</div>
                <div className="home-link">
                <Link to={"/Home"}>Retour au menu</Link>
                </div>
			</div>
		</div>
	);
}
