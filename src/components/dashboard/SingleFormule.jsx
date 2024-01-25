/** @format */

import React from "react";
import {
	IoInformationOutline,
	IoPencil,
	IoSettingsOutline,
} from "react-icons/io5";

import { Link } from "react-router-dom";

const SingleFormule = ({ data, settable }) => {
	return (
		<div className="w-full p-4 bg-white hover:bg-slate-100 shadow-lg rounded-lg flex justify-between px-7 min-h-[120px]">
			<div className="flex flex-col justify-between">
				<p className="font-semibold text-xl"> {data.title} </p>
				<p className="text-gray-500"> {data.ref} </p>
			</div>
			{settable && (
				<div className="flex flex-col justify-between">
					<Link>
						{" "}
						<IoInformationOutline className="text-xl" title="Infos" />{" "}
					</Link>
					<Link>
						{" "}
						<IoPencil className="text-xl" />{" "}
					</Link>
					<Link to={`config/${data.id}`}>
						{" "}
						<IoSettingsOutline className="text-xl" />{" "}
					</Link>
				</div>
			)}
		</div>
	);
};

export default SingleFormule;
