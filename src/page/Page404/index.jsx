//Page error404  *****page not found*****
import { useNavigate } from "react-router-dom";
import Logo from "../../component/Logo";
import HorizontalWarning from "../../component/HorizontalWarning";
import searching from "../../assets/searching.gif";
import "./style.css";

export default function NotYet() {
	const navigate = useNavigate();
	return (
		<>
			<HorizontalWarning />
			<div className="col container-page404">
				<div className="row g-0">
					<div className="col-3"></div>
					<div className="col-6">
						<Logo />
						<button className="center btn btn-danger" onClick={() => { navigate(-1) }}>
							RETOUR
						</button>
					</div>
					<div className="col-3"></div>
				</div>
				<div className="row">
					<div className="col-12">
						<img
							className="search404"
							src={searching}
							alt="page not found"
							width="70%"
							height="auto"
						/>
					</div>
					<div className="row g-0 page404">
						<div className="col-3">&nbsp;</div>
						<div className="col-6">
							<h1>PAGE INTROUVABLE<br/>E R R E U R&emsp;4 0 4</h1>

							<button className="center btn btn-danger" onClick={() => { navigate(-1) }}>
								RETOUR
							</button>
							<Logo />
						</div>
						<div className="col-3">&nbsp;</div>
					</div>
					<div className="row filler404"></div>
				</div>
			</div>
		</>
	);
}
