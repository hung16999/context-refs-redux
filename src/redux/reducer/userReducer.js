import { users } from "../state/users"
const initialState = {
  users,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AddNewUser":
      // users.push(action.user)
      return { ...state, users: [...users, action.user] }

    case "DeleteUser":
      const indexOfUser = users.findIndex((user) => user.id === action.user.id)
      users.splice(indexOfUser, 1)
      return { users: [...users] }

    default:
      return state
  }
}

export default userReducer
