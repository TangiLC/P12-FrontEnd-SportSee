//React component to display the sites's logo and name
import "../../sass/main.css";
import sportSee from "../../assets/sportsee.png";

export default function Logo() {
	return (
		<div className="sportsee">
			<img src={sportSee} alt="logo" className="logo" />
			<h2>SportSee</h2>
		</div>
	);
}
