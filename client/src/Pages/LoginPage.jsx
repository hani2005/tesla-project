import React, { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import axios from "axios"
import { UserContext } from "../UserContext"

function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(false)
  const { setUser } = useContext(UserContext)

  async function handleLoginSubmit(ev) {
    ev.preventDefault()
    try {
      const { data } = await axios.post("/login", { email, password })
      setUser(data)
      alert("login successful")
      setRedirect(true)
    } catch (e) {
      alert("login failed")
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />
  }

  return (
    <div>
      <div className="login">
        <form onSubmit={handleLoginSubmit}>
          <h1>Sign In</h1>
          <div className="login-content">
            <span>Enter Yourl Email</span>
            <input
              type="email"
              placeholder="your@gmail.com"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </div>
          <div className="register-content">
            <span>Enter Your password</span>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
          </div>
          <button>Login</button>
          <div className="reg-page">
            Dont have an account? <Link to={"/register"}>Register</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
