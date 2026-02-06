import { DataGrid } from "@mui/x-data-grid";
import { Box, Chip } from "@mui/material";
import { useMemo, useState } from "react";
import DataTableToolbar from "./DataTableToolbar";
import { applySortFilter } from "../../utils/sortFilter";

const statusColorMap = {
  Active: "success",
  Pending: "warning",
  Completed: "default",
};

const ProjectTable = ({ projects, setSelectedId, selectedId }) => {
  const [filterText, setFilterText] = useState("");
  const [sortField, setSortField] = useState("");

  const rows = useMemo(
    () => applySortFilter(projects, sortField, filterText),
    [projects, sortField, filterText],
  );

  const columns = [
    { field: "name", headerName: "Project Name", flex: 1.5, minWidth: 150 },
    { field: "latitude", headerName: "Lat", width: 80 },
    { field: "longitude", headerName: "Lng", width: 80 },
    {
      field: "status",
      headerName: "Status",
      width: 110,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={statusColorMap[params.value] || "default"}
          size="small"
          variant="outlined"
        />
      ),
    },
    { field: "lastUpdated", headerName: "Updated", width: 110 },
  ];

  return (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <DataTableToolbar
        searchLabel="Search Project..."
        searchValue={filterText}
        onSearchChange={setFilterText}
        sortLabel="Sort By"
        sortValue={sortField}
        onSortChange={setSortField}
        sortOptions={[
          { value: "name", label: "Project Name" },
          { value: "status", label: "Status" },
        ]}
      />

      {/* THIS MUST BE FLEX ONLY */}
      <Box sx={{ flexGrow: 1 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          density="comfortable"
          disableRowSelectionOnClick
          onRowClick={(p) => setSelectedId(p.id)}
          getRowClassName={(p) => (p.id === selectedId ? "selected-row" : "")}
          sx={{
            border: "none",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f8f9fa",
              borderBottom: "2px solid #E8E2DB",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "1px solid #f0f0f0",
            },
            "& .selected-row": {
              backgroundColor: "#e3f2fd !important",
              fontWeight: 600,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default ProjectTable;
