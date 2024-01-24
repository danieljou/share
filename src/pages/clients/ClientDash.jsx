/** @format */

import React from "react";
import CreditCard from "../../components/CreditCard";
import Cards from "../../components/Cards";
import SingleCard from "../../components/clients/SingleCard";
import Heading from "../../components/Heading";
import { useGetDashboardDataForUserQuery } from "../../api/DashBoardApi";
import HandleLoading from "../../utils/HandleLoading";
import HandleGetErrors from "../../utils/HandleGetErrors";
import { Link } from "react-router-dom";

const ClientDash = () => {
	const { data, isLoading, isSuccess, isError, error } =
		useGetDashboardDataForUserQuery();
	console.log("DATA ", data);
	return (
		<div>
			<Heading title={"DashBoard client"} />
			{isLoading && <HandleLoading />}
			{isError && <HandleGetErrors error={error} />}
			{isSuccess && (
				<div>
					<div className="div grid grid-col-3 md:grid-cols-3  my-3 ">
						<div className="col-span-3 lg:col-span-1 sm:col-span-3">
							<CreditCard />
						</div>
						{!data.account && (
							<div className=" col-span-3 lg:col-span-2 flex flex-col justify-between items-end md:mt-4">
								<div className="my-4 text-justify ">
									<div className="parent w-full p-4">
										<h1 className="">
											Vous n'avez pas encore de compte pour votre institution
										</h1>
									</div>
								</div>
								<div className="flex">
									<Link
										to={"/user/create-account"}
										className="py-3 px-12 rounded-lg text-2xl text-white bg-gradient-to-br from-sky-600 to-blue-600 my-4">
										Créer
									</Link>
								</div>
							</div>
						)}
						{data.account && (
							<div className="flex flex-col p-4 justify-between sm:h-[150px]">
								<p className="font-semibold"> Status : {data.member.status}</p>
								<div>
									<Link
										to={`/user/validate-account/${data.member.id}`}
										className="py-3 px-12 rounded-lg text-2xl text-white bg-gradient-to-br from-sky-600 to-blue-600 my-4">
										Valider
									</Link>
								</div>
							</div>
						)}
					</div>
					{}
					<div className="grid grid-cols-1 gap-4 my-4 lg:grid-cols-2 xl:grid-cols-4">
						<SingleCard
							value={data.all_operations || 0}
							title={"Total des operations"}
						/>
						<SingleCard
							value={data.all_operations || 0}
							title={"Operations ce mois"}
						/>
						<SingleCard
							value={data.all_operations || 0}
							title={"Total des operations"}
						/>
						<SingleCard
							value={data.all_operations || 0}
							title={"Total des operations"}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default ClientDash;
