/** @format */

import React from "react";
import Heading from "../../components/Heading";
import { Link } from "react-router-dom";
import HandleLoading from "../../utils/HandleLoading";
import HandleGetErrors from "../../utils/HandleGetErrors";
import { Container } from "@mui/material";
import { DataGrid, frFR } from "@mui/x-data-grid";
import { useGetTaxesQuery } from "../../api/TaxManagementApi";

const Taxes = () => {
	const { data, isError, isSuccess, isLoading, error } = useGetTaxesQuery();
	console.table(data);
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
				<div className=" bg-white p-10 my-4">
					<div className="my-4  ">
						<Container
							style={{
								width: "100%",
								padding: 0,
								margin: 0,
							}}>
							<DataGrid
								// sx={{ ...datagridStyles }}
								density="comfortable"
								style={{}}
								// sx={{ width: "100%" }}
								columns={columns}
								rows={data}
								localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
							/>
						</Container>
					</div>
				</div>
			)}
		</div>
	);
};

export default Taxes;
