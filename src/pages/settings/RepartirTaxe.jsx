/** @format */

import React, { useState } from "react";
import Heading from "../../components/Heading";
import {
	useGetRepartitionDataQuery,
	useReparatirMutation,
} from "../../api/TaxManagementApi";
import HandleLoading from "../../utils/HandleLoading";
import HandleGetErrors from "../../utils/HandleGetErrors";
import { useParams } from "react-router-dom";
import SingleFormule from "../../components/dashboard/SingleFormule";
import SingleFormuleCalc from "../../components/dashboard/SingleFormuleCalc";
import SingleTax from "../../components/SingleTax";
import OperationDisplay from "../../components/OperationDisplay";
import YourComponent, { Pagination } from "../../components/YourComponent";
import { Dialog, IconButton } from "@mui/material";
import { IoCloseOutline } from "react-icons/io5";
import FormLoader from "../../components/FormLoader";
import toast from "react-hot-toast";

const RepartirTaxe = () => {
	const [repartir] = useReparatirMutation();
	const { id } = useParams();
	const { data, isLoading, isSuccess, isError, error } =
		useGetRepartitionDataQuery(id);
	console.log(data);
	const [validation, setValidation] = useState(false);
	const [isDistribution, setIsDistribution] = useState(false);
	const handleRepartir = async () => {
		setIsDistribution(true);
		const res = await repartir(id);
		if (res) {
			setIsDistribution(false);
			if (res.data) {
				toast.success("Repartition effectuée avec susscès");
			} else if (res.error) {
				console.log(res.error);
				if (res.error.status === 400) {
					toast.error("La taxe à déja été repartie");
				} else {
					toast.error("Une erreur est servenue");
				}
			}
			setValidation(false);
		}
	};
	return (
		<div>
			<Dialog open={validation}>
				<div className="p-8 bg-white">
					<div className="flex justify-end">
						<IconButton onClick={() => setValidation(false)} color="red">
							<IoCloseOutline className="font-bold text-2xl" />
						</IconButton>
					</div>
					<p className="text-center font-bold text-xl">
						Voulez-vous vraiment valider la repartition de cette taxe aux
						différents bénéficaire ?
					</p>
					<div className="flex justify-between my-7">
						<button
							onClick={handleRepartir}
							className="px-7 p-3 bg-indigo-600 text-white rounded-lg">
							{isDistribution ? <FormLoader /> : "Valider"}
						</button>
						<button
							onClick={() => setValidation(false)}
							className="px-7 p-3 bg-red-600 text-white rounded-lg">
							Annuler
						</button>
					</div>
				</div>
			</Dialog>
			<Heading title={"Repartirion de la taxe"} />

			{isLoading && <HandleLoading />}
			{isError && <HandleGetErrors error={error} />}
			{isSuccess && (
				<div className="p-7 bg-white my-7">
					<h1 className="text-2xl font-bold my-4">
						{" "}
						Information de répartition{" "}
					</h1>
					<hr />
					<h1 className="text-xl font-bold my-4"> Information sur la taxe </h1>
					<SingleTax data={data.tax} />
					{/* <SingleFormule data={data.tax} /> */}
					<hr />
					<h1 className="text-xl font-bold my-4">
						{" "}
						Liste des critère de répartition{" "}
					</h1>
					<div className="flex justify-end">
						{data.tax.is_close ? (
							<button
								disabled
								className="px-7 p-3 bg-red-600 text-white rounded-lg">
								Taxe déja repartie
							</button>
						) : (
							<button
								onClick={() => setValidation(true)}
								className="px-7 p-3 bg-indigo-600 text-white rounded-lg">
								Répartir
							</button>
						)}
					</div>
					<div className="grid grid-cols-1 gap-4 my-4 lg:grid-cols-2 xl:grid-cols-3">
						{isSuccess &&
							data.formules.map((el, index) => (
								<SingleFormuleCalc formule={el} key={index} />
							))}
					</div>

					<hr />
					{/* <YourComponent /> */}
					<h1 className="text-xl font-bold my-4"> Liste des répartitions </h1>
					{Object.keys(data.repartitions).map((key, index) => {
						const object = data.repartitions[key];
						return (
							<div key={index}>
								<p className="font-bold my-2"> {key} </p>
								<Pagination data={object} Component={OperationDisplay} />
								{/* {object.map((repartion, reIndex) => (
									<OperationDisplay data={repartion} key={reIndex} />
								))} */}
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default RepartirTaxe;
