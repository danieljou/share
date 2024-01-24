/** @format */

import React from "react";
import Heading from "../../components/Heading";
import First from "../../components/dashboard/First";

const DashBoard = () => {
	const first = ["Formules", "Utilisateurs", "Taxes", "Membres"];
	return (
		<div>
			<Heading title={"DashBoard"} />
			<div className="grid grid-cols-1 gap-4 my-4 lg:grid-cols-2 xl:grid-cols-4">
				{first.map((el, index) => (
					<First title={el} key={index} />
				))}
			</div>
		</div>
	);
};

export default DashBoard;
