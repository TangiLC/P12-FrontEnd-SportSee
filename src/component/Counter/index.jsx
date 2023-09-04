import "./style.css";



import { normalizeCount } from "../../utils/const";

function Counter(props) {
	
let countData=[]
	if(props.items!==undefined){countData=normalizeCount(props.items)}

	
	return (
		<div className="col-md-12">
			{countData.length=== 0
				? null
				: countData.map((item,index) => {
						return (
							<div className="row counter-item">
								<div className="col-md-3 box" style={{backgroundColor:item.bgcol}}>
									<img src={item.icon} className="count-icon" alt={item.name}/>
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
							</div>
						);
				  })}
		</div>
	);
}

export default Counter;
