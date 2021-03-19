import React, { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

const Display = () => {
  const context = useContext(GlobalContext)
  console.log(context)

  const deleteUser = (userDelete) => {
    const { users } = context
    const index = users.findIndex((user) => user.id === userDelete.id)

    users.splice(index, 1)
    context.setContext([...users])
  }

  return (
    <>
      <div>
        {context.users.map((user) => (
          <div key={user.id}>
            <span>{user.name}</span>
            <button onClick={() => deleteUser(user)}>X</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Display
