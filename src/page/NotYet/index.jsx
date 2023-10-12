//Page under construction *****placeholder*****
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../component/Logo";
import HorizontalWarning from "../../component/HorizontalWarning";
import startingBlock from "../../assets/startingBlock.gif";
import { SportSeeContext } from "../../provider";
import "./style.css";

export default function NotYet() {
	const { userID } = useContext(SportSeeContext);
	const navigate = useNavigate();
	return (
		<>
			<HorizontalWarning />
			<div className="col container-not-yet">
				<div className="row g-0">
					<div className="col-4"></div>
					<div className="col-4">
						<Logo />
						<button
							className="center btn btn-danger"
							onClick={() => {
								navigate(`/dashboard/${(userID * 999979).toString(16)}`);
							}}
						>
							RETOUR
						</button>
					</div>
					<div className="col-4"></div>
				</div>
				<div className="row">
					<div className="col-12">
						<img
							className="not-yet"
							src={startingBlock}
							alt="en construction"
							width="70%"
							height="auto"
						/>
					</div>
					<div className="row g-0 under-construction">
						<div className="col-4">&nbsp;</div>
						<div className="col-4">
							<h3>PAGE EN CONSTRUCTION</h3>

							<button
								className="center btn btn-danger"
								onClick={() => {
									navigate(`/dashboard/${(userID * 999979).toString(16)}`);
								}}
							>
								RETOUR
							</button>
							<Logo />
						</div>
						<div className="col-4">&nbsp;</div>
					</div>
					<div className="row filler"></div>
				</div>
			</div>
		</>
	);
}
