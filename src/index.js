import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";


import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
//import Header from './components/Header/Header';
//import Footer from './components/Footer/Footer';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	
		<React.StrictMode>
			<Router>
				<App />
			</Router>
		</React.StrictMode>
	
);
