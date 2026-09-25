import { createContext, useContext, useState } from "react";
import initialTasks from "../data/initialTasks";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (task) => {
    const newTask = {
      ...task,
      id: `TSK-${Date.now().toString().slice(-4)}`,
      raisedAt: new Date().toISOString(),
      status: "Raised",
    };

    setTasks((current) => [newTask, ...current]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? {
              ...task,
              ...updatedTask,
            }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((current) =>
      current.filter((task) => task.id !== id)
    );
  };

  const completeTask = (id) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? {
              ...task,
              status: "Closed",
            }
          : task
      )
    );
  };

  const pendingTasks = tasks.filter(
    (task) => task.status !== "Closed"
  );

  const completedTasks = tasks.filter(
    (task) => task.status === "Closed"
  );

  const highPriority = tasks.filter(
    (task) => task.priority === "High"
  );

  return (
    <TaskContext.Provider
      value={{
        tasks,
        pendingTasks,
        completedTasks,
        highPriority,
        addTask,
        updateTask,
        deleteTask,
        completeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}