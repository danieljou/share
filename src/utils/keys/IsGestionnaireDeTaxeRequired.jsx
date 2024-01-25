/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const IsGestionnaireDeTaxeRequired = ({ children }) => {
	const user = useSelector((state) => state.auth).user;
	return (
		<>
			{user ? (
				<>{children}</>
			) : (
				<>
					<Navigate to="/Error" />
				</>
			)}
		</>
	);
};

export default IsGestionnaireDeTaxeRequired;
