import TaskCard from "./TaskCard";

const TaskList = ({
  tasks,
  onDelete,
  onToggle
}) => {

  return (
    <div className="task-list">

      {tasks.map(task => (

        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />

      ))}

    </div>
  );
};

export default TaskList;