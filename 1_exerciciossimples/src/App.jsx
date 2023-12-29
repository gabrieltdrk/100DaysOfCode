import './App.css'

import Counter from './exercises/Counter'
import Greeting from './exercises/Greeting'
import TaskList from './exercises/TaskList'

    const tasks = [
        {id: 1, text: "Estudar"},
        {id: 2, text: "Dormir"},
        {id: 3, text: "Jogar"}
    ]

function App() {
  return (
    <>
      <Counter />
      <Greeting name="Gabriel" />
      <TaskList tasks={tasks} />
    </>
  )
}

export default App
