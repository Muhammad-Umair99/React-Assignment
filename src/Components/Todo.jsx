import { useState } from "react";

export default function Todo() {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState('');


    const getInputValue = (e) => {
        const value = e.target.value.trim()
        setInput(value);
    }
    const addTodo = () => {
        if (!input) {
            alert('input is required');
            return;
        }
        const copyTodo = [...todo];
        copyTodo.push(input);
        setTodo(copyTodo);
        setInput('');
    }
    const delTodo = (index) => {
        const copyTodo = [...todo];
        copyTodo.splice(index, 1);
        setTodo(copyTodo);
    }
    return (
        <div>
            <h1>This is Todo App : Assignment 4  </h1>
            <input value={input} onChange={getInputValue} placeholder="Type Todo" />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todo.map((t, i) => (
                    <li key={i}>
                        {t} <button onClick={delTodo}> Delte Todo</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}