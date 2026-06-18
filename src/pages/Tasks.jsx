import {
  useContext,
  useCallback
} from "react";

import { TaskContext }
from "../context/TaskContext";

import TaskForm
from "../components/forms/Taskform";

import TaskList
from "../components/dashboard/TaskList";

const Tasks = () => {

  const { state, dispatch } =
    useContext(TaskContext);

  const addTask =
    useCallback((title) => {

      dispatch({
        type: "ADD_TASK",
        payload: {
          id: Date.now(),
          title,
          completed: false
        }
      });

    }, [dispatch]);

  const deleteTask = (id) => {

    dispatch({
      type: "DELETE_TASK",
      payload: id
    });

  };

  const toggleTask = (id) => {

    dispatch({
      type: "TOGGLE_TASK",
      payload: id
    });

  };

  return (
    <div>

      <TaskForm
        addTask={addTask}
      />

      <TaskList
        tasks={state.tasks}
        onDelete={deleteTask}
        onToggle={toggleTask}
      />

    </div>
  );
};

export default Tasks;
