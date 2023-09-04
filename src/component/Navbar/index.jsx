import "./style.css";
import sportsee from "../../assets/sportsee.png";

function Navbar() {
	return (
		<div className="row g-0 container-flex bg-black">
			<div className="col navigate">
				<div className="site-name">
					<img src={sportsee} className="sportsee" alt="logo" />
					<h2>SportSee</h2>
				</div>
                <div className="nav-item">Accueil</div>
                <div className="nav-item">Profil</div>
                <div className="nav-item">Réglage</div>
                <div className="nav-item">Communauté</div>
			</div>
		</div>
	);
}
export default Navbar;
