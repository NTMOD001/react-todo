import Header from "./components_bak/Header";
import Tasks from "./components_bak/Tasks";
import AddTask from "./components_bak/AddTask";
import { useState } from 'react'
function App() {
  const [tasks, setTasks] = useState(
    [
      { id: 1, text: 'first Task', date: 'Feb 5th at 2:30pm', reminder: true },
      { id: 2, text: 'second Task', date: 'Feb 6th at 1:30pm', reminder: true },
      { id: 3, text: 'third Task', date: 'Feb 5th at 2:30pm', reminder: false },
    ]
  )

  const [showAddTask, setShowAddTask] = useState(false);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // del Task
  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ?
      { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {/* if this then return this */}
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask}
          onToggle={toggleReminder} />
      ) : ('No Tasks To Show')}
    </div>
  );
}

export default App;
