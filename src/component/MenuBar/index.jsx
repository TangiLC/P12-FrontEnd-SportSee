import React, { useState } from "react";
import "./style.css";

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
        <img className={`list-icon ${horizontalMode ? "" : "rotate90"}`} src={props.toggle} alt="toggle" title="basculer"/>
				</div>
			</div><div className={`item ${horizontalMode ? "col" : "row"}`}></div>

			{props.items.map((item, index) => (
				<div className={`item ${horizontalMode ? "col" : "row"}`} key={`icon-${index}`}>
					<div className="icon-box">
						<img className="list-icon" src={item.icon} alt={item.text} />
					</div>
					<span className={`${horizontalMode ? "list-text" : "invisible-text"}`}>
						{item.text}
					</span>
				</div>
			))}
      <div className={`item ${horizontalMode ? "col" : "row"}`}></div>
      <span className={`${horizontalMode ? "col copyright-horizontal" : "row copyright-vertical"}`}>Copyright© SportSee 2020</span>
		</div>
	);
}

export default MenuBar;
