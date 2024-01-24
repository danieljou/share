/** @format */

import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../slices/AuthSlice";
import { useDispatch } from "react-redux";

const DropDown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};
	const logout = () => {
		dispatch(loginUser());
		localStorage.removeItem("user");
		window.location.href = "/";
	};
	return (
		<div className="relative inline-block">
			{/* Dropdown toggle button */}
			<button
				onClick={toggleDropdown}
				className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none">
				<CiUser className="font-bold text-2xl" />
			</button>

			{/* Dropdown menu */}
			<div
				onClick={() => setIsOpen(false)}
				className={`absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800 ${
					isOpen
						? "opacity-100 scale-100 transition ease-out duration-100"
						: "hidden scale-90 transition ease-in duration-100"
				}`}>
				<Link className="flex items-center px-3 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
					<svg
						className="w-5 h-5 mx-1"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z"
							fill="currentColor"></path>
						<path
							d="M6.34315 16.3431C4.84285 17.8434 4 19.8783 4 22H6C6 20.4087 6.63214 18.8826 7.75736 17.7574C8.88258 16.6321 10.4087 16 12 16C13.5913 16 15.1174 16.6321 16.2426 17.7574C17.3679 18.8826 18 20.4087 18 22H20C20 19.8783 19.1571 17.8434 17.6569 16.3431C16.1566 14.8429 14.1217 14 12 14C9.87827 14 7.84344 14.8429 6.34315 16.3431Z"
							fill="currentColor"></path>
					</svg>
					<span className="mx-1">Profile</span>
				</Link>

				{/* Add other menu items here */}

				<hr className="border-gray-200 dark:border-gray-700 " />

				<Link className="flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
					<svg
						className="w-5 h-5 mx-1"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M21 19H3C1.89543 19 1 18.1046 1 17V16H3V7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V16H23V17C23 18.1046 22.1046 19 21 19ZM7 17H5V8H7V17ZM19 17H7V8H19V17Z"
							fill="currentColor"></path>
					</svg>
					<span className="mx-1">Paramètres</span>
				</Link>

				<button
					// to={"Logout"}
					onClick={logout}
					className="w-full flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
					<svg
						className="w-5 h-5 mx-1"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
							fill="currentColor"></path>
					</svg>
					<span className="mx-1">Déconnexion</span>
				</button>
			</div>
		</div>
	);
};

export default DropDown;
