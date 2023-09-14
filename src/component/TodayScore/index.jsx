//React component using Recharts 'Piechart' to display user's daily objective achievement (%)
import "./style.css";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#E60000", "transparent"];

export default function TodayScore(props) {
	const data = [
		{ name: "achieved", value: props.score },
		{ name: "unAchieved", value: 1 - props.score },
	];
	return (
		<ResponsiveContainer width="100%" height="100%">
			<PieChart width={100} height={100}>
				<Pie
					stroke="none"
					data={data}
					cx="50%"
					cy="50%"
					innerRadius="81%"
					outerRadius="98%"
					startAngle={88}
					endAngle={600}
					fill="transparent"
					paddingAngle={5}
					dataKey="value"
					cornerRadius="30"
				>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
			</PieChart>
		</ResponsiveContainer>
	);
}
