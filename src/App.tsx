import { useState } from 'react';
import './App.css';
import { Todolist } from './Todolist';
import { TasksType } from './Todolist'
import { v1 } from 'uuid';

export type FilterValuesType = "all" | "active" | "completed"

function App() {
  let [tasks, setTasks] = useState<Array<TasksType>>([
    { id: v1(), title: 'HTML', isDone: true },
    { id: v1(), title: 'CSS', isDone: true },
    { id: v1(), title: 'TS', isDone: false },
    { id: v1(), title: 'React', isDone: false }
  ]);

  let [filter, setFilter] = useState<FilterValuesType>("all");
  let filteredTasks = tasks;

  function removeTask(id: string) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  function addTask(title: string) {
    let newTask: TasksType = { 
      id: v1(), 
      title: title, 
      isDone: false };
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks);
  }

  function changeFilter(filter: FilterValuesType) {
    setFilter(filter);
  }

  function changeStatus(id:string, isDone: boolean) {
    let task = tasks.find((t)=>t.id === id);
    task!.isDone=isDone;
    setTasks([...tasks]);
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
        addTask={addTask}
        removeTask={removeTask}
        changeFilter={changeFilter}
        changeStatus={changeStatus} />
    </div>
  );
}

export default App;
