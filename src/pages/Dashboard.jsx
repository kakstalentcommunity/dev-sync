import {
  useContext,
  useState
} from "react";

import Navbar
from "../components/dashboard/Navbar";

import Sidebar
from "../components/dashboard/Sidebar";

import Notification
from "../components/dashboard/Notification";

import Footer
from "../components/common/Footer";

import DashboardStats
from "../components/dashboard/DashboardStats";

import Tasks from "./Tasks";

import Analytics from "./Analytics";

import Attendance from "./Attendance";

import useDocumentTitle
from "../hooks/useDocumentTitle";

import { ThemeContext }
from "../context/ThemeContext";

import { TaskContext }
from "../context/TaskContext";

import dashboardImage
from "../assets/background.jpg";

const Dashboard = () => {

  useDocumentTitle(
    "DevSync Dashboard"
  );

  const { darkMode } =
    useContext(ThemeContext);

  const { state: taskState } =
    useContext(TaskContext);

  const [
    isSidebarOpen,
    setIsSidebarOpen
  ] = useState(true);

  const [
    activeTab,
    setActiveTab
  ] = useState("home");

  const toggleSidebar = () => {
    setIsSidebarOpen(
      (currentValue) => !currentValue
    );
  };

  const selectTab = (tab) => {
    setActiveTab(tab);

    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false);
    }
  };

  const renderActiveTab = () => {
    if (activeTab === "tasks") {
      return <Tasks />;
    }

    if (activeTab === "attendance") {
      return <Attendance />;
    }

    if (activeTab === "analytics") {
      return <Analytics />;
    }

    return (
      <section className="dashboard-home">
        <div
          className="dashboard-hero"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(15, 23, 42, 0.72), rgba(15, 23, 42, 0.2)), url(${dashboardImage})`
          }}
        >

          <h1>Home</h1>
          <p>
            Keep your team aligned with tasks, attendance, and analytics.
          </p>
        </div>

        <DashboardStats
          tasks={taskState.tasks}
        />
      </section>
    );
  };

  return (
    <div
      className={
        darkMode
          ? "dark app-container"
          : "app-container"
      }
    >

      <Sidebar
        activeTab={activeTab}
        isOpen={isSidebarOpen}
        onSelectTab={selectTab}
      />

      <div
        className={
          isSidebarOpen
            ? "main-content"
            : "main-content main-content-expanded"
        }
      >

        <Navbar
          onToggleSidebar={toggleSidebar}
        />

        <main className="dashboard-main">

          <Notification />

          {renderActiveTab()}

        </main>

        <Footer />

      </div>

    </div>
  );
};

export default Dashboard;
