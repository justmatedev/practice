import { create } from "zustand"

type Task = {
  id: string | number
  text: string
}

type TaskStore = {
  slogan: string
  tasks: Task[]
  addTask: (text: string) => void
  removeTask: (id: number | string) => void
  editTask: (id: number | string, text: string) => void
  changeSlogan: () => void
}

export const useTaskStore = create<TaskStore>((set) => ({
  slogan: "Projeto",
  tasks: [],
  addTask: (text) =>
    set((state) => ({
      tasks: [...state.tasks, { id: Date.now(), text: text }],
    })),
  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  editTask: (id, text) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, text: text } : task
      ),
    })),
  changeSlogan: () =>
    set(() => ({
      slogan: "projeto 2",
    })),
}))
