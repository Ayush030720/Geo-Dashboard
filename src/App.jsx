import { useState } from "react";
import { Box } from "@mui/material";
import DashboardLayout from "./components/layout/DashboardLayout";
import ProjectTable from "./components/table/ProjectTable";
import ProjectMap from "./components/map/ProjectMap";

const MOCK_PROJECTS = [
  {
    id: 1,
    name: "Metro Expansion",
    latitude: 28.6139,
    longitude: 77.209,
    status: "Active",
    lastUpdated: "2025-01-20",
  },
  {
    id: 2,
    name: "Smart City Phase 2",
    latitude: 19.076,
    longitude: 72.8777,
    status: "Pending",
    lastUpdated: "2025-01-10",
  },
  {
    id: 3,
    name: "Solar Power Plant",
    latitude: 26.9124,
    longitude: 75.7873,
    status: "Active",
    lastUpdated: "2025-01-18",
  },
  {
    id: 4,
    name: "Highway Redevelopment",
    latitude: 23.0225,
    longitude: 72.5714,
    status: "Completed",
    lastUpdated: "2024-12-28",
  },
  {
    id: 5,
    name: "Riverfront Beautification",
    latitude: 21.1702,
    longitude: 72.8311,
    status: "Active",
    lastUpdated: "2025-01-22",
  },
  {
    id: 6,
    name: "IT Park Construction",
    latitude: 12.9716,
    longitude: 77.5946,
    status: "Pending",
    lastUpdated: "2025-01-05",
  },
  {
    id: 7,
    name: "Wind Energy Project",
    latitude: 11.0168,
    longitude: 76.9558,
    status: "Active",
    lastUpdated: "2025-01-16",
  },
  {
    id: 8,
    name: "Water Treatment Plant",
    latitude: 22.5726,
    longitude: 88.3639,
    status: "Completed",
    lastUpdated: "2024-12-15",
  },
  {
    id: 9,
    name: "Airport Terminal Upgrade",
    latitude: 17.2403,
    longitude: 78.4294,
    status: "Active",
    lastUpdated: "2025-01-21",
  },
  {
    id: 10,
    name: "Industrial Corridor Development",
    latitude: 18.5204,
    longitude: 73.8567,
    status: "Pending",
    lastUpdated: "2025-01-12",
  },
];

function App() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#6490bb",
      }}
    >
      <DashboardLayout projects={MOCK_PROJECTS}>
        <ProjectTable
          projects={MOCK_PROJECTS}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
        <ProjectMap
          projects={MOCK_PROJECTS}
          selectedId={selectedId}
        />
      </DashboardLayout>
    </Box>
  );
}

export default App;
