/** @format */

import React from "react";
import Heading from "../../components/Heading";
import { useGetRepartitionDataQuery } from "../../api/TaxManagementApi";
import HandleLoading from "../../utils/HandleLoading";
import HandleGetErrors from "../../utils/HandleGetErrors";
import { useParams } from "react-router-dom";
import SingleFormule from "../../components/dashboard/SingleFormule";
import SingleFormuleCalc from "../../components/dashboard/SingleFormuleCalc";
import SingleTax from "../../components/SingleTax";
import OperationDisplay from "../../components/OperationDisplay";
import YourComponent, { Pagination } from "../../components/YourComponent";

const RepartirTaxe = () => {
	const { id } = useParams();
	const { data, isLoading, isSuccess, isError, error } =
		useGetRepartitionDataQuery(id);
	console.log(data);
	return (
		<div>
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
