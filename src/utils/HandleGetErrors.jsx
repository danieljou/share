/** @format */

import React from "react";

const HandleGetErrors = ({ error }) => {
	console.log(error);
	return (
		<div className="w-full h-40 bg-white my-4 flex justify-center items-center shadow-lg rounded-lg">
			{error.status === 404 && "404 pas trouvé"}
			{error.status === "FETCH_ERROR" && (
				<div className="p-7">
					<p className="text-blue-500 text-2xl">VERIFIEZ VOTRE CONNECTION</p>
				</div>
			)}
		</div>
	);
};

export default HandleGetErrors;
