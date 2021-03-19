import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { v4 } from "uuid"
import { addNewUser } from "./../redux/reducer/userSlice"

const AddNewUser = () => {
  const [name, setName] = useState("")
  const dispatch = useDispatch()

  const add = (event) => {
    event.preventDefault()
    const newUser = { id: v4(), name: name }

    dispatch(addNewUser(newUser))

    setName("")
  }

  return (
    <form onSubmit={add}>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={add}>+</button>
    </form>
  )
}

export default AddNewUser
