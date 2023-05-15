import React, { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import "./Pages.css"

function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function registerUser(ev) {
    ev.preventDefault()
    try {
      await axios.post("/register", {
        name,
        email,
        password
      })
      alert("Registration successful, Now you can log in")
    } catch (e) {
      alert("Registration failed, Please try again later")
    }
  }

  return (
    <div className="register">
      <form onSubmit={registerUser}>
        <h1>Create Account</h1>
        <div className="register-content">
          <span>Enter Your Name</span>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </div>
        <div className="register-content">
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
        <button>Register</button>
        <div className="log-page">
          Already a member? <Link to={"/login"}>Login</Link>
        </div>
      </form>
    </div>
  )
}

export default RegisterPage
