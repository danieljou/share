/** @format */
import React from "react";
import Heading from "../../components/Heading";
import HandleLoading from "../../utils/HandleLoading";
import HandleGetErrors from "../../utils/HandleGetErrors";
import { Container } from "@mui/material";
import { DataGrid, frFR } from "@mui/x-data-grid";
import { useGetMembersQuery } from "../../api/DashBoardApi";

const Members = () => {
	const { data, isError, isSuccess, isLoading, error } = useGetMembersQuery();
	console.table(data);
	const columns = [
		{
			field: "custum_name",
			headerName: "Nom personalisé",
			flex: 1,
			valueGetter: (params) => {
				if (params.row.account.custum_name) {
					return params.row.region_value;
				}
				// Convert the decimal value to a percentage
				return "/";
			},
		},
		{
			field: "type",
			headerName: "Type",
			flex: 1,
			valueGetter: (params) => params.row.account.type,
		},
		{
			field: "value",
			headerName: "Institution",
			flex: 1,
			valueGetter: (params) => params.row.account.value,
		},
		{
			field: "Region",
			headerName: "Region",
			flex: 1,
			valueGetter: (params) =>
				params.row.account.region ? params.row.account.region : "/",
		},
		{
			field: "department",
			headerName: "Département",
			flex: 1,
			valueGetter: (params) =>
				params.row.account.department ? params.row.account.department : "/",
		},
		{
			field: "number",
			headerName: "Numéro de compte",
			flex: 1,
			valueGetter: (params) =>
				`${params.row.number.slice(0, 2)}  ${params.row.number.slice(
					2,
					5
				)} ${params.row.number.slice(5, 8)}`,
		},
	];
	return (
		<div>
			<Heading title={"Membres"} />
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

export default Members;
