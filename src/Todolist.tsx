import { FilterValuesType } from "./App";

export type TasksType = {
    id: number,
    title: string,
    isDone: boolean
}

type PropsType = {
    title: string,
    tasks: Array<TasksType>,
    removeTask: (id: number) => void,
    changeFilter: (filter: FilterValuesType) => void
}

export function Todolist(props: PropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input type="text" value='Add' />
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(t => <li><input type='checkbox' checked={t.isDone} />
                    <span>{t.title}</span><span><button onClick={() => props.removeTask(t.id)}>x</button></span></li>)}
            </ul>
            <div>
                <button onClick={() => { props.changeFilter("all"); }}>All</button>
                <button onClick={() => { props.changeFilter("active"); }}>Active</button>
                <button onClick={() => { props.changeFilter("completed"); }}>Completed</button>
            </div>
        </div>
    );
}