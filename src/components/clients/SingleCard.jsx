/** @format */

import React from "react";

const SingleCard = ({ title, value, upgrade, color }) => {
	return (
		<div className="flex-shrink max-w-full w-full  mb-6">
			<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full p-6 relative overflow-hidden">
				<h3 className="text-base font-bold mb-2">{title}</h3>
				<h2 className="text-3xl font-bold mb-4">{value}</h2>

				<div className="flex flex-row justify-between w-full">
					<div className="flex items-center" title="Target">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="mr-2 bi bi-calendar-check"
							viewBox="0 0 16 16">
							<path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path>
							<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path>
						</svg>{" "}
						1100
					</div>
					<div className="flex items-center text-green-500">+5%</div>
				</div>

				<div className="absolute -right-16 rtl:-left-16 -top-16">
					<div className="bg-indigo-500 opacity-10 w-36 h-36 rounded-full shadow-lg shadow-indigo-500/10"></div>
				</div>
				<div className="absolute -right-4 rtl:-left-4 -top-24">
					<div className="bg-indigo-500 opacity-10 w-36 h-36 rounded-full shadow-lg shadow-indigo-500/10"></div>
				</div>
			</div>
		</div>
	);
};

export default SingleCard;
