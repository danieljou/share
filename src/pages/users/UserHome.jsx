/** @format */

import React from "react";
import Heading from "../../components/Heading";
import { useGetUsersQuery } from "../../api/UserManegentApi";
import HandleLoading from "../../utils/HandleLoading";
import HandleGetErrors from "../../utils/HandleGetErrors";
import { DataGrid, frFR } from "@mui/x-data-grid";
import { Container } from "@mui/material";

const UserHome = () => {
	const { data, isError, isSuccess, isLoading, error } = useGetUsersQuery();
	console.table(data);
	const columns = [
		{ field: "last_name", headerName: "Nom", flex: 1 },
		{ field: "first_name", headerName: "Prénom", flex: 1 },
		{ field: "username", headerName: "Nom d'utilisateur", flex: 1 },
		{ field: "email", headerName: "Email", flex: 1 },
	];
	return (
		<div>
			<Heading title={"Utilisateurs"} />
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

export default UserHome;
