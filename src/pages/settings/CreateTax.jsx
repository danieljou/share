/** @format */

import React from "react";
import TaxForm from "../../forms/TaxForm";
import Heading from "../../components/Heading";

const CreateTax = () => {
	return (
		<div>
			<Heading title={"Créer une taxe"} />
			<div className="my-4 bg-white p-10">
				<TaxForm />
			</div>
		</div>
	);
};

export default CreateTax;
