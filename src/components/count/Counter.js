import React, { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

const Counter = () => {
  const context = useContext(GlobalContext)

  const increment = () => {
    const newCount = (context.count += 1)

    context.setCount(newCount)
  }

  const decrement = () => {
    const { count, setCount } = context
    setCount(count - 1)
  }

  return (
    <>
      <p>Count: {context.count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </>
  )
}

export default Counter
