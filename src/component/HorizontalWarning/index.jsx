//This site is better to be viewed on wide screen or landscape mode.
import React from "react";
import "../../sass/main.css";
import rotate from '../../assets/rotate-screen.png'

const HorizontalWarning = () => {
	return (
		<div>
			<div className="alert alert-warning orientation-alert" role="alert">
				Veuillez orienter votre écran en mode horizontal ou élargir la fenêtre
         pour une meilleure	expérience.<br/>
        <img src={rotate} alt="tourner l'écran svp" width="40%"/>
			</div>
		</div>
	);
};

export default HorizontalWarning;
