import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Box } from "@mui/material";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// 🔧 Fix Leaflet default marker icons
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// 🔄 Ensures map resizes correctly when layout changes
const MapResizeFix = () => {
  const map = useMap();

  useEffect(() => {
    // Delay required so Leaflet sees final flex height
    setTimeout(() => {
      map.invalidateSize();
    }, 200);
  }, [map]);

  return null;
};

// 📍 Fly to selected project
const RecenterMap = ({ projects, selectedId }) => {
  const map = useMap();

  useEffect(() => {
    if (!selectedId) return;

    const project = projects.find((p) => p.id === selectedId);
    if (project?.latitude && project?.longitude) {
      map.flyTo(
        [project.latitude, project.longitude],
        12,
        { duration: 1.2 }
      );
    }
  }, [selectedId, projects, map]);

  return null;
};

const ProjectMap = ({ projects = [], selectedId }) => {
  return (
    // 🔑 This wrapper MUST be height: 100% for flex layouts
    <Box sx={{ height: "100%", width: "100%", position: "relative" }}>
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={5}
        scrollWheelZoom
        style={{ height: "100%", width: "100%" }} // 🔑 Critical
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapResizeFix />
        <RecenterMap projects={projects} selectedId={selectedId} />

        {projects.map(
          (p) =>
            p.latitude &&
            p.longitude && (
              <Marker
                key={p.id}
                position={[p.latitude, p.longitude]}
              >
                <Popup>
                  <strong>{p.name}</strong>
                  <br />
                  Status: {p.status}
                </Popup>
              </Marker>
            )
        )}
      </MapContainer>
    </Box>
  );
};

export default ProjectMap;
