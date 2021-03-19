import React from "react"
import { useDispatch, useSelector } from "react-redux"

const UsersList = () => {
  const dispatch = useDispatch()
  const value = useSelector((store) => store)
  console.log(value)

  const deleteUser = (user) => {
    dispatch({
      type: "DeleteUser",
      user: user,
    })
  }

  return (
    <>
      {value.users.map((user) => (
        <p key={user.id}>
          <span>{user.name}</span>
          <button onClick={() => deleteUser(user)}>x</button>
        </p>
      ))}
    </>
  )
}

export default UsersList
