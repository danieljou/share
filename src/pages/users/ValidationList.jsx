/** @format */

import { DataGrid, frFR } from "@mui/x-data-grid";
import React, { useState } from "react";
import Heading from "../../components/Heading";
import {
	useGetPengingRequestQuery,
	useSendOtpMutation,
} from "../../api/DashBoardApi";
import HandleLoading from "../../utils/HandleLoading";
import HandleGetErrors from "../../utils/HandleGetErrors";
import { CiSquareChevUp } from "react-icons/ci";
import { IoMailUnreadOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { Container, Dialog, IconButton, Box } from "@mui/material";
import { formStyles } from "../../utils/addErrorClasses";
import FormLoader from "../../components/FormLoader";
import toast from "react-hot-toast";
import { datagridStyles } from "../../utils/datagridStyles";
import SearchDataGrid from "../../components/SearchDataGrid ";

const ActionRender = (params) => {
	const [active, setActive] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [sendOtp] = useSendOtpMutation();
	const [data, setData] = useState({ email: "" });
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		const res = await sendOtp({ data: data, id: params.row.id });
		if (res) {
			setIsLoading(false);
			if (res.error) {
				toast.error("Une erreur est survenu");
			} else if (res.data) {
				toast.success("Otp envoyé avec succès");
				setActive(false);
			}
		}
	};
	return (
		<div>
			<button
				onClick={() => setActive(true)}
				className="bg-orange-400 p-2 rounded-full text-white font-bold text-2xl">
				<IoMailUnreadOutline />
			</button>
			<Dialog open={active} fullWidth>
				<div className="p-8 bg-white">
					<div className="flex justify-end">
						<IconButton onClick={() => setActive(false)} color="red">
							<IoCloseOutline className="font-bold text-2xl" />
						</IconButton>
					</div>
					<p className="text-center font-bold text-xl">
						Envoyerz un mail au responsable de l'institution
					</p>
					<form className="my-7" onSubmit={handleSubmit}>
						<div className="w-full flex flex-col my-3">
							<label className="text-gray-400" htmlFor="ref">
								Entrez l'adresse mail du responsable
							</label>
							<input
								placeholder="Ex: janedoe@example.com"
								type="text"
								name="email"
								onChange={(e) => {
									setData({ ...data, email: e.target.value });
								}}
								// {...formik.getFieldProps("ref")}
								// ${addErrorClasses(formik, "ref")}
								className={`${formStyles}  `}
							/>
							{/* {addErrorMessage(formik, "ref")} */}
						</div>
						<div className="flex justify-end p-4">
							<button
								type="submit"
								className="rounded-lg px-7 py-3 text-white bg-gradient-to-tr from-sky-500 to-indigo-500">
								{isLoading ? <FormLoader /> : "Envoyer"}
							</button>
						</div>
					</form>
				</div>
			</Dialog>
		</div>
	);
};
const ValidationList = () => {
	const { data, isLoading, isSuccess, isError, error } =
		useGetPengingRequestQuery();
	console.log(data);

	const columns = [
		{ field: "custum_name", headerName: "Nom personalisé", flex: 1 },
		{ field: "type", headerName: "Type", flex: 1 },
		{ field: "value", headerName: "Institution", flex: 1 },
		{
			field: "region_value",
			headerName: "Région",
			valueGetter: (params) => {
				if (params.row.region_value) {
					return params.row.region_value;
				}
				// Convert the decimal value to a percentage
				return "/";
			},
			flex: 1,
		},
		{
			field: "value_departement",
			headerName: "Departement",
			valueGetter: (params) => {
				if (params.row.value_departement) {
					return params.row.value_departement;
				}
				// Convert the decimal value to a percentage
				return "/";
			},
			flex: 1,
		},
		{
			field: "action",
			headerName: "Actions",
			renderCell: ActionRender,
			flex: 1,
		},

		// { flex:1, field: "col2", headerName: "Column 2", width: 150 },
	];
	const rows = [
		{ id: 1, col1: "Hello", col2: "World" },
		{ id: 2, col1: "DataGridPro", col2: "is Awesome" },
		{ id: 3, col1: "MUI", col2: "is Amazing" },
	];
	return (
		<div>
			<Heading title={"Demandes de création de compte en attentes"} />
			<div className=" bg-white p-10 my-4">
				<p className="text-gray-500">
					Liste de demande de creation de compte pour les institution <br />
					Selectionez une pour envoyer le code de confirmation.
				</p>
				{isLoading && <HandleLoading />}
				{isError && <HandleGetErrors error={error} />}
				{isSuccess && (
					<div className="my-4  ">
						<Container
							style={{
								width: "100%",
								padding: 0,
								margin: 0,
							}}>
							{/* <SearchDataGrid columns={columns} rows={data} pd={0} /> */}
							<DataGrid
								sx={{ ...datagridStyles }}
								density="comfortable"
								style={{}}
								// sx={{ width: "100%" }}
								columns={columns}
								rows={data}
								localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
							/>
						</Container>
					</div>
				)}
			</div>
		</div>
	);
};

export default ValidationList;
