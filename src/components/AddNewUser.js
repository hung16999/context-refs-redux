import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { uuid } from "uuidv4"

const AddNewUser = () => {
  const [name, setName] = useState("")
  const dispatch = useDispatch()

  const addNewUser = () => {
    const newUser = { id: uuid(), name: name }
    if (!name) {
      alert("ko duoc de trong")
      return
    }

    dispatch({
      type: "AddNewUser",
      user: newUser,
    })

    setName("")
  }

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={addNewUser}>+</button>
    </>
  )
}

export default AddNewUser
