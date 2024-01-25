/** @format */

import React from "react";

const OperationDisplay = ({ data }) => {
	return (
		<div className="shadow-md p-3">
			<div className="flex my-2 justify-between">
				<p>Numero de compte : </p>
				<p className="font-bold">
					{" "}
					{data.account.number.slice(0, 2) + " "}
					{data.account.number.slice(2, 5) + " "}{" "}
					{data.account.number.slice(5, 7)}
				</p>
			</div>
			<div className="flex my-2 justify-between">
				<p>Montant: </p>
				<p className="font-bold"> {data.amount.toLocaleString() + " FCFA"}</p>
			</div>
			<div className="flex my-2 justify-between">
				<p>Pourcentage: </p>
				<p className="font-bold"> {data.percent + " %"}</p>
			</div>
		</div>
	);
};

export default OperationDisplay;
