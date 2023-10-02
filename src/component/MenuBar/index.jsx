//React bootstrap component displaying icones and able to toggle
//from horizontal(full screen width bar) to vertical(lateral left bar)
//TO BE CODED PHASE 2: the 'horizontalMode' could be stored in Redux to be available on all pages
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../sass/main.css";

function MenuBar(props) {
	const [horizontalMode, setHorizontalMode] = useState(true);
	const toggleMode = () => {
		setHorizontalMode(!horizontalMode);
	};

	return (
		<div
			className={`menu-bar ${
				horizontalMode ? "horizontal row" : "vertical col-1"
			}`}
		>
			<div className={`item ${horizontalMode ? "col" : "row"}`}>
				<div className="toggle-box" onClick={toggleMode}>
					<img
						className={`list-icon ${horizontalMode ? "" : "rotate90"}`}
						src={props.toggle}
						alt="toggle"
						title="basculer"
					/>
				</div>
			</div>
			<div className={`item ${horizontalMode ? "col" : "row"}`}></div>

			{props.items.map((item, index) => (
				<div
					className={`item ${horizontalMode ? "col" : "row"}`}
					key={`icon-${index}`}
				>
					<div className="icon-box">
						<Link to="/notyet">
							<img className="list-icon" src={item.icon} alt={item.text} />
						</Link>
					</div>
					<span
						className={`${horizontalMode ? "list-text" : "invisible-text"}`}
					>
						{item.text}
					</span>
				</div>
			))}
			<div className={`item ${horizontalMode ? "col" : "row"}`}></div>
			<span
				className={`${
					horizontalMode ? "col copyright-horizontal" : "row copyright-vertical"
				}`}
			>
				Copyright© SportSee 2020
			</span>
		</div>
	);
}

export default MenuBar;
