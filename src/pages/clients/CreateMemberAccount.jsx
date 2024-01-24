/** @format */

import React from "react";
import Heading from "../../components/Heading";
import AccountMemberForm from "../../forms/AccountMemberForm";

const CreateMemberAccount = () => {
	return (
		<div className="w-full p-4">
			<Heading title={"Créer le compte de votre institution"} />

			<p className="w-full leading-9 overflow-hidden overflow-ellipsis "></p>
			<div className="max-sm:w-full my-4 p-4 bg-white shadow-lg">
				<div className="pt-3 ml-4 mr-2 mb-3">
					<h3 className="text-xl text-gray-900"></h3>
					<p className="text-gray-400 text-sm mt-1">
						Créez un compte pour votre institution{" "}
						<span className="font-semibold">
							{" "}
							(Commune, commune d'arrondissement, communauté urbaine)
						</span>{" "}
						dans l'objectif de percevoir les taxes
					</p>
				</div>
				<AccountMemberForm />
			</div>
		</div>
	);
};

export default CreateMemberAccount;
