import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteUser } from "./../redux/reducer/userSlice"

const Display = () => {
  const users = useSelector((store) => store.user)
  const dispatch = useDispatch()

  return (
    <>
      {users.users.map((user) => (
        <p key={user.id}>
          <span>{user.name}</span>
          <button onClick={() => dispatch(deleteUser(user))}>X</button>
        </p>
      ))}
    </>
  )
}

export default Display
