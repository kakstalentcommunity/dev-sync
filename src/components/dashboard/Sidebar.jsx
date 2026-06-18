import ThemeToggle
from "./ThemeToggle";

const Sidebar = ({
  activeTab,
  isOpen,
  onSelectTab
}) => {

  const tabs = [
    {
      id: "home",
      label: "Home"
    },
    {
      id: "tasks",
      label: "Tasks"
    },
    {
      id: "attendance",
      label: "Attendance"
    },
    {
      id: "analytics",
      label: "Analytics"
    }
  ];

  return (
    <aside
      className={
        isOpen
          ? "sidebar sidebar-open"
          : "sidebar sidebar-closed"
      }
    >

      <h3>Dashboard</h3>

      <ul>
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              type="button"
              className={
                activeTab === tab.id
                  ? "sidebar-tab active"
                  : "sidebar-tab"
              }
              onClick={() => onSelectTab(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="sidebar-footer">
        <ThemeToggle />
      </div>

    </aside>
  );
};

export default Sidebar;
