//React component using Recharts 'BarCharts' to display user's weekly weight and calories lost
import "./style.css";
import React from "react";
import { addCount } from "../../utils/utils"; 

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

//Tooltip for customized label on hover
const CustomTooltipActivity = ({ active, payload }) => {
	if (active && payload && payload.length) {
	  return (
		<div className='custom-tooltip-activity'>
		  <p> {`${payload[0].value}kg`}</p>
		  <p> {`${payload[1].value}kCal`}</p>
		</div>
	  )
	}
	return null
  }


export default function DailyActivity(props) {
	const myArray=(props?.datas.sessions?.length>0?addCount(props.datas.sessions):[])
	

	return (
		<ResponsiveContainer width='96%' height='100%'>
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
					barSize={12}
					
				/>
				<Bar
					name="Calories brûlées (kCal)"
					yAxisId="left"
					dataKey="calories"
					fill="#282d30"
					radius={[20, 20, 0, 0]}
					barSize={12}
					
				/>
			</BarChart>
		</ResponsiveContainer>
	);
}
