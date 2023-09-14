//React bootstrap component navigation header
//TO BE CODED PHASE 2 : the links are dead should lead to some pages
import {Link} from "react-router-dom"
import sportsee from "../../assets/sportsee.png";
import "./style.css";

function Navbar() {
	return (
		<div className="row g-0 container-flex bg-black">
			<div className="col navigate">
				<div className="site-name">
					<img src={sportsee} className="sportsee" alt="logo" />
					<h2>SportSee</h2>
				</div>
                <div className="nav-item"><Link to="/NotYet" >Accueil</Link></div>
                <div className="nav-item"><Link to="/NotYet" >Profil</Link></div>
                <div className="nav-item"><Link to="/NotYet" >Réglage</Link></div>
                <div className="nav-item"><Link to="/NotYet" >Communauté</Link></div>
			</div>
		</div>
	);
}
export default Navbar;
