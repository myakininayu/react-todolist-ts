import './App.css';
import { Todolist } from './Todolist';
import { TasksType } from './Todolist'

function App() {
  let tasks1: Array<TasksType> = [
    { id: 1, title: 'HTML', isDone: true },
    { id: 2, title: 'CSS', isDone: true },
    { id: 3, title: 'TS', isDone: false },
    { id: 4, title: 'React', isDone: false }
  ];

  let tasks2: Array<TasksType>  = [
    { id: 1, title: 'Intouchables', isDone: true },
    { id: 2, title: 'The Green Mile', isDone: true },
    { id: 3, title: 'Forrest Gump', isDone: false },
    { id: 4, title: 'Interstellar', isDone: false }
  ];


  return (
    <div className="App">
      <Todolist title='What to learn' tasks={tasks1} />
      <Todolist title='Movies' tasks={tasks2} />
    </div>
  );
}

export default App;
