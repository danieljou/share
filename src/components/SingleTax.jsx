/** @format */

import React from "react";

const SingleTax = ({ data }) => {
	// console.log(data);
	return (
		<div>
			<div className="flex my-2 justify-between">
				<p>Titre : </p>
				<p className="font-bold"> {data.title} </p>
			</div>
			<div className="flex my-2 justify-between gap-4">
				<div className="flex my-2 justify-between w-full">
					<p>Date de début : </p>
					<p className="font-bold"> {data.start_date} </p>
				</div>
				<span className="divider p-7" />
				<div className="flex my-2 justify-between w-full">
					<p>Date de fin : </p>
					<p className="font-bold"> {data.end_date} </p>
				</div>
			</div>
			<div className="flex my-2 justify-between">
				<p>Montant : </p>
				<p className="font-bold"> {data.amount.toLocaleString()} FCFA </p>
			</div>
		</div>
	);
};

export default SingleTax;
