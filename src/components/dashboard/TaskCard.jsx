import React from "react";

const TaskCard = ({
  task,
  onDelete,
  onToggle
}) => {

  return (
    <div
      className={
        task.completed
          ? "task-card completed"
          : "task-card"
      }
    >

      <h3>{task.title}</h3>

      <p>
        {task.completed
          ? "Completed"
          : "Pending"}
      </p>

      <button
        onClick={() =>
          onToggle(task.id)
        }
      >
        Toggle
      </button>

      <button
        className="delete-btn"
        onClick={() =>
          onDelete(task.id)
        }
      >
        Delete
      </button>

    </div>
  );
};

export default React.memo(TaskCard);
