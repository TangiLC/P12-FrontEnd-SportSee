//React component to display the sites's logo and name
import "./style.css";
import sportSee from "../../assets/sportsee.png";

export default function Logo() {
	return (
		<div className="container sportsee-login">
			<img src={sportSee} alt="logo" className=" logo" />
			<h2>SportSee</h2>
		</div>
	);
}
