import "./style.css";
import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#E60000", "#fbfbfb"];

export default function TodayScore(props) {
	const data = [
		{ name: "achieved", value: props.score },
		{ name: "unAchieved", value: 1 - props.score },
	];
	return (
		<ResponsiveContainer width="100%" height="100%">
			<PieChart width={100} height={100}>
				<Pie
					data={data}
					cx="50%"
					cy="50%"
					innerRadius="80%"
					outerRadius="95%"
                    startAngle={88}
                    endAngle={600}
					fill="#8884d8"
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
