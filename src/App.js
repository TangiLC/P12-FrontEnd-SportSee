import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import ProcessPage from "./page/ProcessPage";
import DashboardPage from "./page/DashboardPage";
import NotYet from "./page/NotYet";
import Page404 from "./page/Page404";

export const UserContext = createContext();

function App() {
	const [bonjourProps, setBonjourProps] = useState(null);
	const [counterProps, setCounterProps] = useState(null);
	const [sessionProps, setSessionProps] = useState(null);
	const [performProps, setPerformProps] = useState(null);
	const [todayScProps, setTodayScProps] = useState(null);
	const [security, setSecurity] = useState(null);

	const store = [
		{ bonjourProps, setBonjourProps },
		{ counterProps, setCounterProps },
		{ sessionProps, setSessionProps },
		{ performProps, setPerformProps },
		{ todayScProps, setTodayScProps },
		{ security, setSecurity },
	];
	return (
		<UserContext.Provider value={store}>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/Home" element={<LoginPage />} />
				<Route path="/Dashboard" element={<LoginPage />} />
				<Route path="/Dashboard/:id" element={<DashboardPage />} />
				<Route path="/Process/:id" element={<ProcessPage />} />
				<Route path="/NotYet" element={<NotYet />} />

				<Route path="/*" element={<Page404 />} />
			</Routes>
		</UserContext.Provider>
	);
}

export default App;
