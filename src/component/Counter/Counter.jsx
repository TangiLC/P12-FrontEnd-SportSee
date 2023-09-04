import "./style.css";

function Counter(props) {
	return (
		<div className="col-md-12">
			{props.items.map((item) => {
				<div className="row">
					<div className="col-md-3">
						<image src={props.item.src} />
					</div>
					<div className="col-md-9">
						<div className="row">
							<div className="col-md-6">{item.count}</div>
							<div className="col-md-6">{item.unit}</div>
						</div>
						<div className="row">
							<div className="col-md-12">{item.name}</div>
						</div>
					</div>
				</div>;
			})}
		</div>
	);
}

export default Counter;
