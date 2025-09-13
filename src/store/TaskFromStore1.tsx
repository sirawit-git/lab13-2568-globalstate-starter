import { create } from "zustand";
import { type TaskFormState } from "../libs/Task";

export const useTaskFormStore = create<TaskFormState>((set) => ({
  title: "",
  description: "",
  dueDate: "",
  assignees: [], 
  setTasks: (title) => set({ title }),
  setdescription: (description) => set({ description }),
  setdueDate: (dueDate) => set({ dueDate }),
  setAssignees: (assignees) => set({ assignees }), 
  resetForm: () =>
    set({
      title: "",
      description: "",
      dueDate: "",
      assignees: [], 
    }),
}));