//React component using Recharts 'RadarCharts' to display user's performances
import "../../sass/main.css";
import React from "react";
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	ResponsiveContainer,
} from "recharts";

export default function Performance(props) {
	const myArray =
		props.data.length > 0
			? props.data
			: [
					{ kind: "no data", value: 33 },
					{ kind: "no data", value: 22 },
					{ kind: "no data", value: 44 },
					{ kind: "no data", value: 33 },
					{ kind: "no data", value: 22 },
			  ];
	return (
		<>
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart
					cx="50%"
					cy="50%"
					outerRadius="75%"
					width="100%"
					height="100%"
					data={myArray}
					startAngle="-150"
					endAngle="210"
				>
					<PolarGrid radialLines={false} />
					<PolarAngleAxis
						dataKey="kind"
						stroke="#ffffff"
						strokeWidth="2"
						tickLine={false}
						axisLine={false}
					/>
					<PolarRadiusAxis tick={false} axisLine={false} tickCount={6} />
					<Radar
						name="Performance"
						dataKey="value"
						stroke="none"
						fill="#e60000"
						fillOpacity={0.6}
					/>
				</RadarChart>
			</ResponsiveContainer>
		</>
	);
}
