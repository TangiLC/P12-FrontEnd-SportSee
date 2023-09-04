import "./style.css";

const mark = (nb) => {
	if (nb > 105) {
		return "Félicitations ! Vous avez explosé vos objectifs hier 👏";
	} else if (95 > nb && nb >= 105) {
		return "Excellent ! Vos objectifs d'hier sont atteints 👍";
	} else if (75 > nb && nb >= 95) {
		return "Pas mal, il ne manquait pas grand chose hier pour atteindre vos objectifs 😉";
	} else {
		return "Encore un effort... Vos objectifs d'hier sont un peu loin 🥹";
	}
};

function Bonjour(props) {
	console.log("yesturday", props.yesterdayObjective);
	console.log("firstname", props.firstName);

	return (
		<>
			<div className="bonjour-name">Bonjour <span className="text-danger">{props.firstName}</span></div>
			<div className="bonjour-motiv">{[mark(props.yesterdayObjective)]}</div>
		</>
	);
}
export default Bonjour;
