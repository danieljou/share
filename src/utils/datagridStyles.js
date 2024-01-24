export const datagridStyles = () => {
    return {
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
    }
}