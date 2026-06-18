import {
  createContext,
  useReducer
} from "react";

import {
  taskReducer,
  initialTaskState
} from "../reducers/taskReducer";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {

  const [state, dispatch] = useReducer(
    taskReducer,
    initialTaskState
  );

  return (
    <TaskContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;