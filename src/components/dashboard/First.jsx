/** @format */

import React from "react";
import { FaMoneyBill } from "react-icons/fa6";

const First = ({ title }) => {
	return (
		<div className="w-full h-32 p-4 bg-white shadow-lg rounded-lg flex justify-between">
			<div className="flex flex-col justify-between">
				<p className="font-bold text-2xl">{title}</p>
				<p className="">18</p>
			</div>
			<div className=" h-14 w-14 bg-gradient-to-tr from-sky-500  to-indigo-500 p-4 rounded-full">
				<FaMoneyBill className="text-2xl  text-white" />
			</div>
		</div>
	);
};

export default First;
