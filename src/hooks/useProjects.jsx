export const useProjects = (page, limit, searchQuery, sortBy) => {
  const [projects, setProjects] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Pass the new params to the API call
    fetchProjects({ page, limit, searchQuery, sortBy }).then((res) => {
      setProjects(res.items);
      setTotal(res.total);
      setLoading(false);
    });
  }, [page, limit, searchQuery, sortBy]); // 🔄 Re-run when these change

  return { projects, total, loading };
};