/** @format */

// import { Search } from "@mui/icons-material";

import { Box, InputAdornment, TextField } from "@mui/material";
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
		<Box sx={{ height: 400, width: "100%" }}>
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
			<div className="h-full bg-white  pb-6 w-[100%]">
				<DataGrid
					localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
					rows={filteredRows}
					columns={columns}
					initialState={{
						pagination: {
							paginationModel: {
								pageSize: 5,
							},
						},
					}}
					pageSizeOptions={[5, 15, 25]}
					disableRowSelectionOnClick={false}
					sx={{
						boxSizing: "border-box",
						"& .MuiDataGrid-root": {
							// border: "none",
						},
						"& .MuiDataGrid-cell": {
							borderBottom: "none",
							// backgroundColor: "white"
						},
						"& .nane-column--cell": {
							color: "#e4e4e7",
						},
						"& .MuiDataGrid-columnHeaders": {
							backgroundColor: "#f4f4f5",
							borderBottom: "none",
							color: "#52525b",
							marginBottom: "10px",
						},
						"& .MuiDataGrid-virutalScroller": {
							backgroundColor: "#666666",
						},
						"& .MuiDataGrid-footerContainer": {
							backgroundColor: "#f4f4f5",
							borderTop: "none",
							color: "#52525b",
							marginTop: "10px",
						},
						"& .MuiTablePagination-root": {
							color: "#52525b",
						},
						"& .MuiSvgIcon-root": {
							color: "#52525b",
						},
						"& .MuiDataGrid-virtualScrollerRenderZone": {
							// backgroundColor: "white",
						},
					}}
				/>
			</div>
		</Box>
	);
};

export default SearchDataGrid;
