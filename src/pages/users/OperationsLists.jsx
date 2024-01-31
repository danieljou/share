/** @format */

import React, { useState } from "react";
import Heading from "../../components/Heading";
import { useGetOwnOperationsQuery } from "../../api/OperationApi";
import HandleLoading from "../../utils/HandleLoading";
import HandleGetErrors from "../../utils/HandleGetErrors";
import SearchDataGrid from "../../components/SearchDataGrid";
import { Dialog, IconButton } from "@mui/material";
import OperationDisplay from "../../components/OperationDisplay";
import OperationDetails from "../../components/OperationDetails";
import FilterTax from "../../components/FilterTax";
import { CgClose } from "react-icons/cg";

const renderDetails = (params) => {
	const [isOpen, setisOpen] = useState(false);
	console.log("Row", params.row);
	return (
		<>
			<button
				onClick={() => setisOpen(true)}
				className="px-7 py-3 bg-indigo-600 text-white rounded-lg">
				{" "}
				Details
			</button>
			<Dialog open={isOpen} fullWidth sx={{ padding: 0 }}>
				<div className="">
					<div className="flex justify-end p-2">
						<IconButton onClick={() => setisOpen(false)}>
							<CgClose />
						</IconButton>
					</div>
					<OperationDetails data={params.row} />
				</div>
			</Dialog>
		</>
	);
};
const OperationsLists = () => {
	const { data, isLoading, isError, error, isSuccess } =
		useGetOwnOperationsQuery();
	console.log(data);
	const columns = [
		{ field: "id", headerName: "ID de l'opération", flex: 1 },
		{
			field: "date",
			headerName: "Date",
			flex: 1,
			valueGetter: (params) => params.row.date.slice(0, 10),
		},
		{
			field: "Heure",
			headerName: "Heure",
			flex: 1,
			valueGetter: (params) => params.row.date.slice(12, 22),
		},
		{
			field: "Montant",
			headerName: "Montant",
			flex: 1,
			valueGetter: (params) => params.row.amount.toLocaleString() + " FCFA",
		},
		{
			field: "Details",
			headerName: "Détails",
			flex: 1,
			renderCell: renderDetails,
		},
	];
	return (
		<div>
			<Heading title={"Liste des opérations"} />
			{isLoading && <HandleLoading />}
			{isError && <HandleGetErrors error={error} />}
			{isSuccess && (
				<div>
					{!data.account && (
						<div className="my-2 h-40 flex justify-center items-center  bg-white rounded-md shadow-lg ">
							<p className="text-2xl"> Vous n'avez pas de compte </p>
						</div>
					)}
					{data.account && (
						<div className=" bg-white p-10 my-4 pb-24 h-auto">
							{/* <FilterTax /> */}
							<SearchDataGrid columns={columns} rows={data.operations} />
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default OperationsLists;
