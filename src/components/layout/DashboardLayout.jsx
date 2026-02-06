import React from "react";
import { Box, Paper, Typography, Divider } from "@mui/material";

const COLORS = {
  primary: "#1A3263",
  background: "#547792",
  accent: "#FAB95B",
  surface: "#E8E2DB",
};

const DashboardLayout = ({ projects = [], children }) => {
  const [table, map] = React.Children.toArray(children);

  // 🔒 Defensive data handling
  const total = projects.length;
  const active = projects.filter(
    (p) => p.status?.toLowerCase() === "active"
  ).length;
  const pending = projects.filter(
    (p) => p.status?.toLowerCase() === "pending"
  ).length;

  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        bgcolor: COLORS.background,
        minHeight: "100vh",
      }}
    >
      {/* HEADER */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ color: COLORS.surface }}
        >
          Geo Project Dashboard
        </Typography>
        <Typography sx={{ color: "#dfe6ed" }}>
          Visualize project locations and status in real time
        </Typography>
      </Box>

      {/* STATS */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
          gap: 3,
          mb: 4,
        }}
      >
        {[
          { label: "Total Projects", value: total },
          { label: "Active Projects", value: active },
          { label: "Pending Projects", value: pending },
        ].map((item) => (
          <Paper
            key={item.label}
            sx={{
              p: 3,
              borderRadius: 3,
              bgcolor: COLORS.surface,
              borderLeft: `6px solid ${COLORS.accent}`,
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{ color: COLORS.primary }}
            >
              {item.label.toUpperCase()}
            </Typography>
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{ color: COLORS.primary }}
            >
              {item.value}
            </Typography>
          </Paper>
        ))}
      </Box>

      {/* MAIN CONTENT */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          alignItems: "stretch",
          flexDirection: { xs: "column", lg: "row" },
          minHeight: 520,
        }}
      >
        {/* PROJECT LIST */}
        <Paper
          sx={{
            width: { xs: "100%", lg: 520 },
            minWidth: 480,
            p: 3,
            borderRadius: 3,
            bgcolor: COLORS.surface,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{ color: COLORS.primary }}
          >
            Project List
          </Typography>
          <Divider sx={{ my: 2, borderColor: COLORS.accent }} />
          <Box sx={{ flexGrow: 1, overflow: "auto" }}>
            {table}
          </Box>
        </Paper>

        {/* PROJECT MAP */}
        <Paper
          sx={{
            flex: 1,
            p: 3,
            borderRadius: 3,
            bgcolor: COLORS.surface,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{ color: COLORS.primary }}
          >
            Project Map
          </Typography>
          <Divider sx={{ my: 2, borderColor: COLORS.accent }} />
          <Box
            sx={{
              flexGrow: 1,
              borderRadius: 2,
              overflow: "hidden",
              border: `2px solid ${COLORS.accent}`,
            }}
          >
            {map}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
