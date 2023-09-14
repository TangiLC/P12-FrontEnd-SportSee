//React component using Recharts 'RadarCharts' to display user's performances
import "./style.css";
import React from "react";
import { fusionArray } from "../../utils/utils";
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	ResponsiveContainer,
} from "recharts";

export default function Performance(props) {
	const dataKind = props.data.kind || {};
	const dataValue = props.data.data || [];
	const myArray = fusionArray(dataValue, dataKind);

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
					startAngle={-150}
					endAngle={210}
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
