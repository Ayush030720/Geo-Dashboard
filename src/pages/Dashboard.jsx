const Dashboard = () => {
  const [page, setPage] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  
  // 🔍 Add Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name"); // Default sort by name

  // 📦 Pass filters to the hook
  const { projects, total, loading } = useProjects(page, PAGE_SIZE, searchQuery, sortBy);

  return (
    <DashboardLayout projects={projects}>
      <ProjectTable
        projects={projects}
        total={total}
        page={page}
        pageSize={PAGE_SIZE}
        setPage={setPage}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        loading={loading}
        // Pass these down so the Search/Sort UI can update the state
        onSearchChange={setSearchQuery}
        onSortChange={setSortBy}
      />
      {/* ... ProjectMap stays the same */}
      <ProjectMap
        projects={projects}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
    </DashboardLayout>

    
  );
};