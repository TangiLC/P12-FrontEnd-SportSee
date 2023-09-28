//Recharts element 'LineChart' to display line for average-sessions time /day of week

import "./style.css";
import React from "react";

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

//Tooltip for customized label on hover
const CustomTooltipSessions = ({ active, payload }) => {
	if (active && payload) {
		return (
			<>
				<div className="custom-tooltip-sessions">{`${payload[0].value} min`}</div>
			</>
		);
	}

	return null;
};

export default function AverageSessions(props) {
	const myArray =
		props.data.length > 0
			? props.data
			: [{ dayOfWeek: "L", sessionLength: 10 },
			{ dayOfWeek: "M", sessionLength: 15 },
			{ dayOfWeek: "M", sessionLength: 10 },
			{ dayOfWeek: "J", sessionLength: 15 },
			{ dayOfWeek: "V", sessionLength: 10 },
			{ dayOfWeek: "S", sessionLength: 15 },
			{ dayOfWeek: "D", sessionLength: 10 }];

	return (
		<ResponsiveContainer>
			<LineChart
				data={myArray}
				margin={{
					top: 5,
					right: 5,
					left: 5,
					bottom: 5,
				}}
			>
				<XAxis
					dataKey="dayOfWeek"
					tickLine={false}
					axisLine={false}
					stroke="white"
				/>
				<YAxis
					type="number"
					domain={["dataMin-5", "dataMax+20"]}
					tick={false}
					hide
				/>
				<Tooltip content={<CustomTooltipSessions />} cursor={false} />

				<Line
					type="monotone"
					dataKey="sessionLength"
					stroke="white"
					strokeWidth={3}
					dot={false}
					activeDot={{
						stroke: "rgba(255,240,240, 0.7)",
						strokeWidth: 8,
						r: 5,
					}}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
}
