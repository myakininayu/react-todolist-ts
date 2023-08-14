import { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { TasksType } from './Todolist'

export type FilterValuesType = "all" | "active" | "completed"

function App() {
  let [tasks, setTasks] = useState<Array<TasksType>>([
    { id: 1, title: 'HTML', isDone: true },
    { id: 2, title: 'CSS', isDone: true },
    { id: 3, title: 'TS', isDone: false },
    { id: 4, title: 'React', isDone: false }
  ]);

  let [filter, setFilter] = useState<FilterValuesType>("all");
  let filteredTasks = tasks;

  function removeTask(id: number) {
    setTasks(tasks.filter(t => t.id !== id))
  }

  function changeFilter(filter: FilterValuesType) {
    setFilter(filter)
  }

  if (filter === "active") {
    filteredTasks = tasks.filter(t => !t.isDone);
  }
  if (filter === "completed") {
    filteredTasks = tasks.filter(t => t.isDone);
  }

  return (
    <div className="App">
      <Todolist
        title='What to learn'
        tasks={filteredTasks}
        removeTask={removeTask}
        changeFilter={changeFilter} />
    </div>
  );
}

export default App;
