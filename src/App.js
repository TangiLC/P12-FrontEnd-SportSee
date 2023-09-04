import React, {useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import DashboardPage from "./page/DashboardPage";
import Page404 from "./page/Page404";

export const UserContext = createContext();

function App() {
	const [security, setSecurity] = useState(null);

	return (
		<UserContext.Provider value={{ security, setSecurity }}>
		<Routes>
			<Route path="/" element={<LoginPage />} />
			<Route path="/Home" element={<LoginPage />} />
			<Route path="/Dashboard" element={<LoginPage />} />
			<Route path="/Dashboard/:id" element={<DashboardPage />} />
			<Route path="/*" element={<Page404 />} />
		</Routes>
		</UserContext.Provider>
	);
}

export default App;
