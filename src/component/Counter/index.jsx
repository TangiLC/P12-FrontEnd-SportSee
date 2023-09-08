import "./style.css";



import { normalizeCount } from "../../utils/const";

function Counter(props) {
	
let countData=[]
	if(props.items!==undefined){countData=normalizeCount(props.items)}

	
	return (
		<div className="col-md-11 counter-group">
			{countData.length=== 0
				? null
				: countData.map((item,index) => {
						return (
							<div className="row counter-item">
								<div className="col-md-4 box" style={{backgroundColor:`rgba(${item.color},.3)`}}>
									<img src={item.icon} className="count-icon" alt={item.name}/>
								</div>
								<div className="col-md-8">
									<div className="row">
										<div className="col counter-digit">{item.count}{item.unit}</div>
									</div>
									<div className="row">
										<div className="col">{item.name}</div>
									</div>
								</div>
							</div>
						);
				  })}
		</div>
	);
}

export default Counter;
