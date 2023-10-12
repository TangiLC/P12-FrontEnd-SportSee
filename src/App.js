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
				<Route path="/home" element={<LoginPage />} />
				<Route path="/dashboard" element={<LoginPage />} />
				<Route path="/dashboard/:hexID" element={<DashboardPage />} />
				<Route path="/notyet" element={<NotYet />} />

				<Route path="/*" element={<Page404 />} />
			</Routes>
		</SportSeeProvider>
	);
}

export default App;
