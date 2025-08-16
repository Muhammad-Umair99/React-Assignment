import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    const addBy1 = () => setCount(count + 1);

    const subBy1 = () => {
        if (count > 0) setCount(count - 1);

    }

    const addBy5 = () => setCount(count + 5);

    const subBy5 = () => setCount(pre => Math.max(0, pre - 5));

    const reset = () => setCount(0);

    return (

        <>
            <h1>Clcik me {count} Times</h1>

            <button onClick={addBy1}>Add 1 </button>
            <button onClick={subBy1}>Sub 1 </button>
            <button onClick={addBy5}>Add by 5 </button>
            <button onClick={subBy5}>Sub by 5 </button>
            <button onClick={reset}>Reset </button>

        </>
    )
}