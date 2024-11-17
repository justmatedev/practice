import TaskList from "./components/task"
import { useTaskStore } from "./store/task"

// https://youtu.be/nutJS8u4RtQ

function App() {
  const { slogan } = useTaskStore()
  return (
    <>
      <h1>{slogan}</h1>
      <TaskList />
    </>
  )
}

export default App
