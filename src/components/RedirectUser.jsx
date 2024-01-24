/** @format */

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectUser = () => {
	const navigate = useNavigate();
	useEffect(() => {
		let user = null;
		try {
			user = localStorage.getItem("user");
		} catch {
			user = null;
		}

		if (user != null) {
			const newUser = JSON.parse(user);
			if (newUser.token.user.is_staff) {
				// document.location.href = '/manage'
				navigate("/manage");
			} else {
				navigate("/user");
			}
		}
	}, []);
	return <div>RedirectUser</div>;
};

export default RedirectUser;
