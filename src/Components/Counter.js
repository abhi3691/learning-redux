import { useState } from 'react'
function Counter() {
    const [count, setCount] = useState(3)

    const increment = () => {
        setCount(count => count + 1)
    }
    const decrement = () => {
        setCount(count => count - 1)
    }
    return (
        <div className="counter">
            <h2>Counter</h2>
            <h3>The count is - {count}</h3>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
        </div>
    );
}

export default Counter;