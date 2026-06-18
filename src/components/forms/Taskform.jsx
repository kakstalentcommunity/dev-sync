import {
  useContext,
  useState
} from "react";

import { FaPlus, FaTasks }
from "react-icons/fa";

import { NotificationContext }
from "../../context/NotificationContext";

const TaskForm = ({
  addTask
}) => {

  const [title, setTitle] =
    useState("");

  const { dispatch } =
    useContext(NotificationContext);

  const showNotification = (
    message,
    type = "info"
  ) => {
    dispatch({
      type: "SHOW_NOTIFICATION",
      payload: {
        message,
        type
      }
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      showNotification(
        "Please enter a task title.",
        "warning"
      );
      return;
    }

    addTask(trimmedTitle);

    showNotification(
      "Task added successfully.",
      "success"
    );

    setTitle("");
  };

  return (
    <form
      className="task-form form-card"
      onSubmit={handleSubmit}
    >

      <div className="form-header">
        <div className="form-icon">
          <FaTasks />
        </div>

        <div>
          <h2>Create Task</h2>
          <p>Add focused work for your team.</p>
        </div>
      </div>

      <div className="form-body inline-form-body">
        <label>
          Task title
          <input
            type="text"
            placeholder="Add task..."
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />
        </label>
      </div>

      <div className="form-footer">
        <span>Tasks stay in this session.</span>

        <button
          type="submit"
          className="primary-btn"
        >
          <FaPlus />
          Add Task
        </button>
      </div>

    </form>
  );
};

export default TaskForm;
