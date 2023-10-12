//Recharts element 'LineChart' to display line for average-sessions time /day of week

import "../../sass/main.css";
import React from "react";

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	Rectangle,
	ResponsiveContainer,
} from "recharts";

//Tooltip for customized label on hover
const CustomTooltipSessions = ({ active, payload }) => {
	if (active && payload) {
		return (
			<>
				<div className="custom-tooltip-sessions">
					{`${payload[0].value} min`}
				</div>
			</>
		);
	}
	return null;
};

//Customized rectangle
const CustomizedCursor = ({ points }) => {
	return (
		<Rectangle
			fill="black"
			opacity={0.2}
			x={points[1].x}
			width={400}
			height={400}
			className="custom-cursor"
		/>
	);
};

export default function AverageSessions(props) {
	const myArray =
		props.data.length > 0
			? props.data
			: [
					{ dayOfWeek: "", sessionLength: 10 },
					{ dayOfWeek: "L", sessionLength: 10 },
					{ dayOfWeek: "M", sessionLength: 15 },
					{ dayOfWeek: "M", sessionLength: 10 },
					{ dayOfWeek: "J", sessionLength: 15 },
					{ dayOfWeek: "V", sessionLength: 10 },
					{ dayOfWeek: "S", sessionLength: 15 },
					{ dayOfWeek: "D", sessionLength: 10 },
					{ dayOfWeek: "", sessionLength: 10 },
			  ];

	return (
		<ResponsiveContainer>
			<LineChart
				data={myArray}
				margin={{
					top: 2,
					right: 0,
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
				<Tooltip
					content={<CustomTooltipSessions />}
					cursor={<CustomizedCursor />}
				/>

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
