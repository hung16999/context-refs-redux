import React, { useState } from "react"
import Counter from "./components/count/Counter"
import Display from "./components/form/Display"
import Insert from "./components/form/Insert"
import { users } from "./constants/users"
import { GlobalContext } from "./context/GlobalContext"

const App = () => {
  const [context, setContext] = useState(users)
  const [count, setCount] = useState(0)

  return (
    <GlobalContext.Provider
      value={{ users: context, setContext, count: count, setCount }}
    >
      <h2>My App</h2>
      <Insert />
      <Display />
      <Counter />
    </GlobalContext.Provider>
  )
}

export default App
