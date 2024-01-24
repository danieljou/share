/** @format */

import React from "react";

const Heading = ({ title }) => {
	return (
		// sticky top-20 bg-white p-4
		<div className="text-3xl font-bold ">
			{title}
			<hr className="mt-3 font-bold border border-slate-300" />
		</div>
	);
};

export default Heading;
