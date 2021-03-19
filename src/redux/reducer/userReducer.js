import { users } from "../state/users"

const userReducer = (state = { users }, action) => {
  switch (action.type) {
    case "AddNewUser":
      users.push(action.user)
      return { users: [...users] }

    case "DeleteUser":
      const indexOfUser = users.findIndex((user) => user.id === action.user.id)
      users.splice(indexOfUser, 1)
      return { users: [...users] }

    default:
      return state
  }
}

export default userReducer
