# 🌍 Geo Project Dashboard

A responsive dashboard to visualize infrastructure projects using a data table and an interactive map.  
Built with **React**, **Material UI**, and **Leaflet**.

---

## 📌 Overview

This project displays a list of geo-tagged projects alongside a live map.  
Selecting a project in the table highlights and recenters it on the map, enabling quick spatial understanding of project distribution and status.

---

## 🧠 Design & Technical Decisions

### Why React + MUI
- **React** for component-driven architecture and state management
- **Material UI (MUI)** for consistent, accessible UI components
- `sx` prop used for scoped styling and faster iteration

### Why Leaflet
- Lightweight and open-source
- Works well with React via `react-leaflet`
- Easy marker handling and map controls

### Layout Strategy
- Flexbox-based layout instead of MUI Grid for:
  - Better control over responsive behavior
  - Allowing the map to expand dynamically and fill remaining space
- On mobile: layout stacks vertically
- On desktop: table has fixed width, map grows freely

---

## 🧩 Component Decomposition

