/** @format */

// import { Search } from "@mui/icons-material";

import { Box, Container, InputAdornment, TextField } from "@mui/material";
import { DataGrid, frFR } from "@mui/x-data-grid";
import React, { useState } from "react";
import { CgSearch } from "react-icons/cg";

const SearchDataGrid = ({ rows, columns, pd }) => {
	const [filteredRows, setFilteredRows] = useState(rows);
	const [searchText, setSearchText] = useState("");

	const handleSearch = (event) => {
		const { value } = event.target;
		setSearchText(value);

		const filteredData = rows.filter((row) => {
			return Object.values(row).some(
				(fieldValue) =>
					fieldValue &&
					fieldValue.toString().toLowerCase().includes(value.toLowerCase())
			);
		});

		setFilteredRows(filteredData);
	};
	return (
		<Box sx={{ width: "100%" }}>
			<div className={`${pd ? "lg:px-6" : ""} pt-6`}>
				<TextField
					fullWidth
					placeholder="Rechercher"
					variant="outlined"
					value={searchText}
					onChange={handleSearch}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<CgSearch />
							</InputAdornment>
						),
					}}
					sx={{
						mb: 3,
					}}
				/>
			</div>

			{/* <div className="my-4  pb-24"> */}
			<Box sx={{ width: "100%" }}>
				<DataGrid
					autoHeight
					density="comfortable"
					style={{}}
					columns={columns}
					localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
					rows={filteredRows}
					pageSizeOptions={[5, 15, 25]}
					disableRowSelectionOnClick={false}
					initialState={{
						pagination: {
							paginationModel: {
								pageSize: 5,
							},
						},
					}}
				/>
			</Box>
			<Container
				style={{
					width: "100%",
					padding: 0,
					margin: 0,
				}}></Container>
			{/* </div> */}
		</Box>
	);
};

export default SearchDataGrid;
