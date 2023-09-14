//React bootstrap component getting Calories,proteins,carbohydrates and lipids from props and
//displaying data according to model 
import "./style.css";
import { normalizeCount } from "../../utils/const";

function Counter(props) {
	let countData = [];
	if (props.items !== undefined) {
		countData = normalizeCount(props.items);
	}

	return (
		<div className="col-lg-11 col-sm-12 counter-group">
			{countData.length === 0
				? null
				: countData.map((item, index) => {
						return (
							<div className="col-lg-12 col-sm-3 counter-item" key={index}>
								<div className="row">
									<div
										className="col-4 box"
										style={{ backgroundColor: `rgba(${item.color},.3)` }}
									>
										<img
											src={item.icon}
											className="count-icon"
											alt={item.name}
										/>
									</div>
									<div className="col-8">
										<div className="row">
											<div className="col counter-digit">
												{item.count}
												{item.unit}
											</div>
										</div>
										<div className="row">
											<div className="col">{item.name}</div>
										</div>
									</div>
								</div>
							</div>
						);
				  })}
		</div>
	);
}

export default Counter;
