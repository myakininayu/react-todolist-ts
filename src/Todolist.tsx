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
    filter: FilterValuesType,
    addTask: (title: string) => void,
    removeTask: (id: string) => void,
    changeFilter: (filter: FilterValuesType) => void
    changeStatus: (id: string, isDone: boolean) => void
}

export function Todolist(props: PropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [error, setError] = useState<string | null>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
        setError(null);
    };

    const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.key === 'Enter') {
            if (newTaskTitle.trim()) {
                props.addTask(newTaskTitle);
                setNewTaskTitle("");
            }
            else {
                setError("Field is required!");
            }
        }
    };

    const onAddTaskClickHandler = () => {
        if (newTaskTitle.trim()) {
            props.addTask(newTaskTitle);
            setNewTaskTitle("");
        }
        else {
            setError("Field is required!");
        }
    };

    const onAllFilterClickHandler = () => props.changeFilter("all");
    const onActiveFilterHandler = () => props.changeFilter("active");
    const onCompletedFilterHandler = () => props.changeFilter("completed");

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input type="text" className={error ? "error" : ""}
                    value={newTaskTitle}
                    onChange={onChangeHandler}
                    onKeyDown={onKeyDownHandler} />
                <button onClick={onAddTaskClickHandler}>+</button>
            </div>
            {error && <div className="error-message">{error}</div>}
            <ul>
                {props.tasks.map(t => {
                    const onRemoveTaskClickHandler = () => props.removeTask(t.id);
                    const onChangeStatusClickHandler = (e: ChangeEvent<HTMLInputElement>) => props.changeStatus(t.id, e.currentTarget.checked);

                    return (
                        <li key={t.id} className={t.isDone ? "is-done" : ""}>
                            <input type='checkbox'
                                checked={t.isDone}
                                onChange={onChangeStatusClickHandler} />
                            <span>{t.title}</span>
                            <span><button onClick={onRemoveTaskClickHandler}>x</button></span>
                        </li>)
                })}
            </ul>
            <div>
                <button className={props.filter === "all" ? "active-filter" : ""} onClick={onAllFilterClickHandler}>All</button>
                <button className={props.filter === "active" ? "active-filter" : ""} onClick={onActiveFilterHandler}>Active</button>
                <button className={props.filter === "completed" ? "active-filter" : ""} onClick={onCompletedFilterHandler}>Completed</button>
            </div>
        </div>
    );
}