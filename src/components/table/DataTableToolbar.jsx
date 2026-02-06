import { Box, TextField, MenuItem, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"; // Optional: adds a nice touch

const DataTableToolbar = ({
  searchLabel,
  searchValue,
  onSearchChange,
  sortLabel,
  sortValue,
  sortOptions = [],
  onSortChange,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap", // Allows items to stack on mobile
        alignItems: "center",
        justifyContent: "space-between", // Pushes search and sort apart
        gap: 2,
        mb: 2,
        p: 2,
        borderRadius: 2,
        backgroundColor: "#f9fafb", // Lighter, modern shade
        border: "1px solid #E8E2DB"
      }}
    >
      {/* Search Input */}
      <TextField
        placeholder={searchLabel}
        size="small"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        sx={{ 
          flex: { xs: "1 1 100%", sm: "0 1 300px" }, // Full width on mobile, 300px on desktop
          backgroundColor: "#fff" 
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" color="action" />
            </InputAdornment>
          ),
        }}
      />

      {/* Sort Dropdown */}
      <TextField
        select
        label={sortLabel}
        size="small"
        value={sortValue}
        onChange={(e) => onSortChange(e.target.value)}
        sx={{ 
          minWidth: 180, 
          flex: { xs: "1 1 100%", sm: "0 1 auto" },
          backgroundColor: "#fff" 
        }}
      >
        <MenuItem value=""><em>None</em></MenuItem>
        {sortOptions.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default DataTableToolbar;