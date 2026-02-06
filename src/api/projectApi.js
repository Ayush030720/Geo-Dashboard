import data from "../data/projects.json";
// Assuming sortFilter.js exports functions like filterProjects and sortProjects
import { filterAndSortData } from "../utils/sortFilter"; 

export const fetchProjects = ({ page, limit, searchQuery, sortBy }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // 1. First, Filter and Sort the entire dataset
      let processedData = filterAndSortData(data, searchQuery, sortBy);

      // 2. Then, Paginate the results
      const start = page * limit;
      const end = start + limit;

      resolve({
        total: processedData.length,
        items: processedData.slice(start, end),
      });
    }, 300);
  });
};