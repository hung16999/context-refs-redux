import { createSlice } from "@reduxjs/toolkit"
import { users } from "../state/users"

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users,
  },
  reducers: {
    addNewUser: (state, action) => {
      state.users.push(action.payload)
    },

    deleteUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      )
      state.users.splice(index, 1)
    },
  },
})

export const { addNewUser, deleteUser } = userSlice.actions

export default userSlice.reducer
