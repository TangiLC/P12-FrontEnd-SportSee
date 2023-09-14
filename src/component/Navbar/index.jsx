import {useNavigate,Link} from "react-router-dom"
import sportsee from "../../assets/sportsee.png";
import NotYet from "../../page/NotYet";
import "./style.css";

function Navbar() {
	const navigate=useNavigate()
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
