//Page under construction *****placeholder*****
import { useNavigate } from "react-router-dom";
import Logo from "../../component/Logo";
import HorizontalWarning from "../../component/HorizontalWarning";
import startingBlock from "../../assets/startingBlock.gif";
import "./style.css";

export default function NotYet() {
	const navigate = useNavigate();
	return (
		<>
			<HorizontalWarning />
			<div className="col container-not-yet">
				<div className="row">
					<div className="col-4"></div>
					<div className="col-4">
						<Logo />
						<button className="center btn btn-danger" onClick={() => { navigate(-1) }}>
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
					<div className="row under-construction">
						<div className="col-4">&nbsp;</div>
						<div className="col-4">
							<h1>PAGE EN CONSTRUCTION</h1>

							<button className="center btn btn-danger" onClick={() => { navigate(-1) }}>
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
