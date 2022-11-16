import React, { useState } from 'react'

const Counter: React.FC = () => {
    const [count, SetCount] = useState<number>(0);

    const increment = () => {
        SetCount(count + 1);

    }
    const decrement = () => {
        SetCount(count - 1);
    }

    const reset = () => {
        SetCount(0);
    }

    return (
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={decrement}>Decrement --</button >
            <button onClick={reset}>Reset</button >
            <button onClick={increment}>Increment ++</button >
        </div>
    )
}

export default Counter