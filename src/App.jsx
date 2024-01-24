/** @format */

import {} from "react";
import AppRoutes from "./utils/AppRoutes";
import { Toaster } from "react-hot-toast";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { loginSuccess } from "./slices/AuthSlice";
import { useNavigate } from "react-router-dom";
function App() {
	// const {}
	// const navigate = useNavigate()
	const dispatch = useDispatch();
	let localUser = { access: "", refresh: "", user: {} };
	let user = null;
	try {
		user = localStorage.getItem("user");
	} catch {
		user = null;
	}

	if (user != null) {
		// console.log("  CONECTED USER  : ", JSON.parse(user).token);

		dispatch(loginSuccess(JSON.parse(user)));
		const newUser = JSON.parse(user);
		if (newUser.token.user.is_staff) {
			// document.location.href = '/manage'
		}
		// navigate('/dashboard');
		// setIsLogin(true)
		// document.location.href = '/dashboard'
	}

	return (
		<div className="">
			<AppRoutes />
			<Toaster />
		</div>
	);
}

export default App;
