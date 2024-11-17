import React, { FormEvent, useState } from "react"
import TaskItem from "./item"
import { useTaskStore } from "../../store/task"

export default function TaskList() {
  const [newTask, setNewTask] = useState("")
  const { tasks, addTask, changeSlogan } = useTaskStore()

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault()

    addTask(newTask)

    setNewTask("")
  }

  return (
    <main>
      <span>Voce {tasks.length} tarefas em aberto</span>

      <form action="" onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Adicione uma nova tarefa"
        />

        <button type="submit">Adicionar</button>
      </form>

      <button onClick={changeSlogan}>Trocar slogan</button>

      <TaskItem />
    </main>
  )
}
