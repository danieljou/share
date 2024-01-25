/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const IsAdminProvider = ({ role, children }) => {
	const user = useSelector((state) => state.auth).user;
	return (
		<>
			{user[role] ? (
				<>{children}</>
			) : (
				<>
					<Navigate to="/Error" />
				</>
			)}
		</>
	);
};

export default IsAdminProvider;
