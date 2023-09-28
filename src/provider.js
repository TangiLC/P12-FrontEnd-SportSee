import React, { useState } from "react";
export const SportSeeContext = React.createContext();

const SportSeeProvider = ({ children }) => {
	
	const [userID, setUserID] = useState(null);

	return (
		<SportSeeContext.Provider
			value={{
				userID,
				setUserID,
			}}
		>
			{children}
		</SportSeeContext.Provider>
	);
};

const SportSeeConsumer = ({ children }) => {
	return (
		<SportSeeContext.Consumer>
			{(context) => {
				if (context === undefined) {
					throw new Error(
						"TemplateConsumer must be used within TemplateProvider"
					);
				}
				return children(context);
			}}
		</SportSeeContext.Consumer>
	);
};

const useSportSee = () => {
	const context = React.useContext(SportSeeContext);
	if (context === undefined)
		throw new Error("useTemplate must be used within TemplateProvider");
	return context;
};

export { SportSeeProvider, SportSeeConsumer, useSportSee };
