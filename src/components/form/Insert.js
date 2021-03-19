import React, { useContext, useState } from "react"
import { uuid } from "uuidv4"
import { GlobalContext } from "../../context/GlobalContext"

const Insert = () => {
  const [name, setName] = useState("")
  const context = useContext(GlobalContext)

  const addNewUser = () => {
    const newUser = { id: uuid(), name: name }
    context.value.push(newUser)

    context.setContext([...context.value])
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button onClick={addNewUser}>+</button>
      </div>
    </>
  )
}

export default Insert
