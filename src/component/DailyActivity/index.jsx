import "./style.css";
import React from "react";
import { CustomTooltipActivity } from '../Custom'

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

function addCount(array) {
	const newArray = array.map((item,index) => {
		const newItem = { ...item };
		newItem.count = index + 1;
		return newItem;
	  });
	  return newArray;
  }


export default function DailyActivity(props) {
	console.log("DAILY ACTIVITY", props.datas.sessions);
	const myArray=(props?.datas.sessions?.length>0?addCount(props.datas.sessions):[])
	

	return (
		<ResponsiveContainer width='100%' height='100%'>
			<BarChart
			width='100%' height='100%'
				data={myArray}

				margin={{
					top: 20,
					right: -5,
					left: -30,
					bottom: 5,
				}}
				barGap={12}
			>
				<CartesianGrid vertical={false} strokeDasharray="1 2" />
				<XAxis dataKey="count" tickLine={false} />
				<YAxis yAxisId="left" orientation="left" stroke="transparent" />
				<YAxis
					yAxisId="right"
					orientation="right"
					tickLine={false}
					stroke="grey"
					domain={["dataMin - 4", "dataMax + 1"]}
					
				/>
				<Tooltip content={<CustomTooltipActivity />} />
				<Legend
					iconType="circle"
					iconSize={8}
					height={25}
					verticalAlign="top"
					align="right"
					wrapperStyle={{ marginTop: "-20px" }}
					formatter={(value, entry, index) => (
						<span className="text-color">{value}</span>
					)}
				/>
				<Bar
					name="Poids (kg)"
					yAxisId="right"
					dataKey="kilogram"
					fill="#e60000"
					radius={[20, 20, 0, 0]}
					barSize={8}
					
				/>
				<Bar
					name="Calories brûlées (kCal)"
					yAxisId="left"
					dataKey="calories"
					fill="#282d30"
					radius={[20, 20, 0, 0]}
					barSize={8}
					
				/>
			</BarChart>
		</ResponsiveContainer>
	);
}
