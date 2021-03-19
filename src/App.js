import React from "react"
import { Provider } from "react-redux"
import AddNewUser from "./components/AddNewUser"
import UsersList from "./components/UsersList"
import store from "./redux/store"

const App = () => {
  return (
    <Provider store={store}>
      <h2>My App</h2>
      <AddNewUser />
      <UsersList />
    </Provider>
  )
}

export default App
