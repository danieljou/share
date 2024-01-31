/** @format */

import React from "react";
import Heading from "../../components/Heading";
import { Link } from "react-router-dom";
import HandleLoading from "../../utils/HandleLoading";
import HandleGetErrors from "../../utils/HandleGetErrors";
import { Container } from "@mui/material";
import { DataGrid, frFR } from "@mui/x-data-grid";
import { useGetTaxesQuery } from "../../api/TaxManagementApi";
import SearchDataGrid from "../../components/SearchDataGrid";

const Taxes = () => {
	const { data, isError, isSuccess, isLoading, error } = useGetTaxesQuery();
	console.table(data);
	const RenderAction = (params) => {
		return (
			<>
				{params.row.is_close ? (
					<Link
						to={`repartir/${params.row.id}`}
						className="py-3 w-24 text-center bg-green-500 text-white rounded-lg">
						{" "}
						Voir{" "}
					</Link>
				) : (
					<Link
						to={`repartir/${params.row.id}`}
						className="py-3 w-24 text-center bg-indigo-500 text-white rounded-lg">
						{" "}
						Répartir{" "}
					</Link>
				)}
			</>
		);
	};
	const columns = [
		{ field: "title", headerName: "Titre", flex: 1 },
		{
			field: "Ref",
			headerName: "Référence",
			flex: 1,
			valueGetter: (params) => params.row.formula.title,
		},
		{ field: "start_date", headerName: "Date de début", flex: 1 },
		{ field: "end_date", headerName: "Date de fin", flex: 1 },
		{ field: "zone", headerName: "Zone", flex: 1 },
		{
			field: "amount",
			headerName: "Montant",
			flex: 1,
			valueGetter: (params) => params.row.amount.toLocaleString() + " XFA",
		},
		{
			field: "createur",
			headerName: "Créateur",
			flex: 1,
			valueGetter: (params) => params.row.creator.username,
		},
		{
			field: "Action",
			headerName: "Actions",
			flex: 1,
			renderCell: RenderAction,
		},
	];
	return (
		<div>
			<Heading title={"Taxes"} />
			<div className="flex bg-white p-4 my-4 justify-end">
				<Link
					to={"create"}
					className="px-8 py-3 rounded-md bg-indigo-600 text-white">
					{" "}
					Créer{" "}
				</Link>
			</div>
			{isLoading && <HandleLoading />}
			{isError && <HandleGetErrors error={error} />}
			{isSuccess && (
				<div className=" bg-white p-10 my-4 pb-24 h-auto">
					<SearchDataGrid columns={columns} rows={data} />
				</div>
			)}
		</div>
	);
};

export default Taxes;
