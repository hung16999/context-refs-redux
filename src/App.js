import React from "react"
import { Provider } from "react-redux"
import AddNewUser from "./components/AddNewUser"
import Display from "./components/Display"
import store from "./redux/store"

const App = () => {
  return (
    <Provider store={store}>
      <h2>My app</h2>
      <AddNewUser />
      <Display />
    </Provider>
  )
}

export default App
