import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import DashboardPage from "./page/DashboardPage";
import NotYet from "./page/NotYet";
import Page404 from "./page/Page404";

import { SportSeeProvider } from "./provider";

function App() {
	return (
		<SportSeeProvider>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/Home" element={<LoginPage />} />
				<Route path="/Dashboard" element={<LoginPage />} />
				<Route path="/Dashboard/:id" element={<DashboardPage />} />
				<Route path="/NotYet" element={<NotYet />} />

				<Route path="/*" element={<Page404 />} />
			</Routes>
		</SportSeeProvider>
	);
}

export default App;
