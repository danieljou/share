/** @format */

import React from "react";

const CreditCard = ({ number, name }) => {
	return (
		<>
			<div className="w-full h-40 bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg shadow-lg">
				<div className="flex justify-between m-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="34"
						height="34"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="#ffffff"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<rect x="3" y="5" width="18" height="14" rx="3" />
						<line x1="3" y1="10" x2="21" y2="10" />
						<line x1="7" y1="15" x2="7.01" y2="15" />
						<line x1="11" y1="15" x2="13" y2="15" />
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="34"
						height="34"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="#ffffff"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<circle cx="9.5" cy="9.5" r="5.5" fill="#fff" />
						<circle cx="14.5" cy="14.5" r="5.5" />
					</svg>
				</div>
				<div className="flex justify-center mt-4">
					<h1 className="text-white font-bold text-2xl font-os">
						<span className="mx-2">{number.slice(0, 2)}</span>
						<span className="mx-2">{number.slice(2, 5)}</span>
						<span className="mx-2">{number.slice(5, 7)}</span>
					</h1>
				</div>
				<div className="flex flex-col justfiy-end mt-4 p-4 text-white font-quick">
					{/* <p className="font-bold text-xs">12 / 17</p> */}
					<h4 className="uppercase tracking-wider font-semibold text-xs">
						{name}
					</h4>
				</div>
			</div>
		</>
	);
};

export default CreditCard;
