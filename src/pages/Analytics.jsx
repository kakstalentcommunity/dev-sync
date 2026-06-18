import {
  useContext
} from "react";

import { TaskContext }
from "../context/TaskContext";

import DashboardStats
from "../components/dashboard/DashboardStats";

const Analytics = () => {

  const { state } =
    useContext(TaskContext);

  return (
    <div>

      <h1>Analytics</h1>

      <DashboardStats
        tasks={state.tasks}
      />

    </div>
  );
};

export default Analytics;