import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import "./App.css"
import axios from "axios"
import Homepage from "./components/Homepage/Homepage"
import LoginPage from "./Pages/LoginPage"
import RegisterPage from "./Pages/RegisterPage"
import { UserContextProvider } from "./UserContext"
import AccountPage from "./Pages/AccountPage"
import Model_S from "./components/NavPages/Model_S"
import Model_X from "./components/NavPages/Model_X"
import Model_3 from "./components/NavPages/Model_3"
import Model_Y from "./components/NavPages/Model_Y"

axios.defaults.baseURL = "http://localhost:3000"
axios.defaults.withCredentials = true

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/account/:subpage?" element={<AccountPage />} />
          <Route path="/model-s" element={<Model_S />} />
          <Route path="/model-x" element={<Model_X />} />
          <Route path="/model-3" element={<Model_3 />} />
          <Route path="/model-y" element={<Model_Y />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
