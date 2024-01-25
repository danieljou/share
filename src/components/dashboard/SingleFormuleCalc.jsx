/** @format */

import React from "react";

const FLex = ({ title, data }) => {
	return (
		<div className="flex justify-between my-1">
			<p className="font-semibold"> {title} </p>
			<p className="text-gray-500"> {data} </p>
		</div>
	);
};

const SingleFormuleCalc = ({ formule }) => {
	// console.log(formule);
	return (
		<div className="w-full p-4 bg-white shadow-lg">
			<FLex data={formule.chapter} title={"Chapitre"} />
			<FLex data={formule.article} title={"Article"} />
			<br />
			<hr />
			<br />
			<FLex data={formule.member_type} title={"Type de membre"} />
			<FLex data={`${formule.taux} %`} title={"Taux"} />
			{formule.benfeniciare && (
				<FLex data={formule.benfeniciare} title={"Bénéficiaire"} />
			)}
		</div>
	);
};

export default SingleFormuleCalc;
