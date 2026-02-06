/**
 * Applies client-side filtering and sorting to project data
 * @param {Array} data - project list
 * @param {string} sortField - field to sort by
 * @param {string} filterText - search keyword
 * @returns {Array} processed data
 */
export const applySortFilter = (data, sortField, filterText) => {
  if (!Array.isArray(data)) return [];

  let result = [...data]; // ⛔ never mutate input

  // 🔍 Text filter (Project Name)
  if (filterText?.trim()) {
    const search = filterText.toLowerCase();
    result = result.filter((item) =>
      item.name.toLowerCase().includes(search)
    );
  }

  // ↕ Sorting
  if (sortField) {
    result.sort((a, b) => {
      const valueA = a[sortField];
      const valueB = b[sortField];

      // Handle missing values safely
      if (valueA == null) return 1;
      if (valueB == null) return -1;

      // String sort
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB);
      }

      // Number / date sort
      return valueA > valueB ? 1 : -1;
    });
  }

  return result;
};
