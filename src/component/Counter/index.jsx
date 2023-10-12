//React bootstrap component getting Calories,proteins,carbohydrates and lipids from props and
//displaying data according to model 
import "../../sass/main.css";


function Counter(props) {
	let countData = props.items;

	return (
		<div className="col-lg-11 col-sm-12 counter-group">
			{countData.length === 0
				? null
				: countData.map((item, index) => {
						return (
							<div className="col counter-item" key={index}>
								<div className="row justify-content-center">
									<div
										className="col-4 box mx-auto"
										style={{ backgroundColor: `rgba(${item.color},.3)` }}
									>
										<img
											src={item.icon}
											className="count-icon"
											alt={item.name}
										/>
									</div>
									<div className="col-7">
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
