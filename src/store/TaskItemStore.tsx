import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { persist } from "zustand/middleware";
import { type TaskItemProps, type TaskProps } from "../libs/Task";

export const useTaskStore = create<TaskItemProps>()(
  persist(
    (set) => ({
      tasks: [],
      setTasks: (tasks: TaskProps[]) => set({ tasks }),
      addTask: (title, description, dueDate, assignees) =>
        set((state) => ({
          tasks: [
            {
              id: uuidv4(),
              title,
              description,
              dueDate,
              isDone: false,
              doneAt: null,
              assignees, 
            },
            ...state.tasks, //newnar
          ],
        })),
      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id
              ? {
                  ...task,
                  isDone: !task.isDone,
                  doneAt: task.isDone ? null : new Date().toLocaleDateString(),
                }
              : task
          ),
        })),
      removeTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
    }),
    { name: "tasks-storage" }
  )
);