//React component using Recharts 'BarCharts' to display user's weekly weight and calories lost
import React from "react";
import "../../sass/main.css";
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
			<div className="custom-tooltip-activity">
				<p> {`${payload[0].value}kg`}</p>
				<p> {`${payload[1].value}kCal`}</p>
			</div>
		);
	}
	return null;
};

export default function DailyActivity(props) {
	const myArray = props.data;

	return (
		<ResponsiveContainer width="96%" height="100%">
			<BarChart
				width="100%"
				height="100%"
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
					height={30}
					verticalAlign="top"
					align="right"
					padding="20px 0px 0px 0px"
					wrapperStyle={{ marginTop: "-20px" }}
					formatter={(value, entry, index) => (
						<span className="text-color daily-legend">{value}</span>
					)}
				/>
				<Bar
					name="Poids (kg)"
					yAxisId="right"
					dataKey="kilogram"
					fill="#282d30"
					radius={[20, 20, 0, 0]}
					barSize={12}
				/>
				<Bar
					name="Calories brûlées (kCal)"
					yAxisId="left"
					dataKey="calories"
					fill="#e60000"
					radius={[20, 20, 0, 0]}
					barSize={12}
				/>
			</BarChart>
		</ResponsiveContainer>
	);
}
