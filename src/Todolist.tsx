import { ChangeEvent, KeyboardEventHandler, useState } from "react";
import { FilterValuesType } from "./App";

export type TasksType = {
    id: string,
    title: string,
    isDone: boolean
}

type PropsType = {
    title: string,
    tasks: Array<TasksType>,
    addTask: (title: string) => void,
    removeTask: (id: string) => void,
    changeFilter: (filter: FilterValuesType) => void
}

export function Todolist(props: PropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState("");

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    };

    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.key === 'Enter') {
            props.addTask(newTaskTitle); 
            setNewTaskTitle("");
        }
    };

    const onAddTaskClickHandler = () => {
        props.addTask(newTaskTitle); 
        setNewTaskTitle("");
    };

    const onAllFilterClickHandler = () => props.changeFilter("all");
    const onActiveFilterHandler = () => props.changeFilter("active");
    const onCompletedFilterHandler = () => props.changeFilter("completed");

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input type="text"
                    value={newTaskTitle}
                    onChange={onChangeHandler}
                    onKeyDown={onKeyDownHandler} />
                <button onClick={onAddTaskClickHandler}>+</button>
            </div>
            <ul>
                {props.tasks.map(t =>
                    <li key={t.id}>
                        <input type='checkbox' checked={t.isDone} />
                        <span>{t.title}</span>
                        <span><button onClick={() => props.removeTask(t.id)}>x</button></span>
                    </li>)}
            </ul>
            <div>
                <button onClick={onAllFilterClickHandler}>All</button>
                <button onClick={onActiveFilterHandler}>Active</button>
                <button onClick={onCompletedFilterHandler}>Completed</button>
            </div>
        </div>
    );
}