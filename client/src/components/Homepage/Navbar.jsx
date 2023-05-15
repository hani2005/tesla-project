import React, { useState, useContext, useEffect } from "react"
import logo from "./tesla.png"
import "./Homepage.css"
import { Link } from "react-router-dom"
import { UserContext } from "../../UserContext"

function Navbar() {
  const { user } = useContext(UserContext)
  const [backDrop, setBackDrop] = useState("backdrop")
  const [aside, setAside] = useState("aside")

  const openMenu = () => {
    setBackDrop("backdrop active")
    setAside("aside active")
  }

  const closeMenu = () => {
    setBackDrop("backdrop")
    setAside("aside")
  }

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
          </div>
          <ul className="nav-items">
            <li>
              <Link to={"/model-s"}>Model S</Link>
            </li>
            <li>
              <Link to={"/model-3"}>Model 3</Link>
            </li>
            <li>
              <Link to={"/model-x"}>Model X</Link>
            </li>
            <li>
              <Link to={"/model-y"}>Model Y</Link>
            </li>
          </ul>
          <div className="navigation">
            <div className="account">
              <Link to={user ? "/account" : "/login"}>Account</Link>
            </div>
            <div className="menu" onClick={openMenu}>
              Menu
            </div>
          </div>
        </nav>
      </header>
      <div className={backDrop}></div>
      <aside className={aside}>
        <i className="fa-solid fa-xmark" onClick={closeMenu}></i>
        <Link to={"/model-s"}>Model S</Link>
        <Link to={"/model-3"}>Model 3</Link>
        <Link to={"/model-x"}>Model X</Link>
        <Link to={"/model-y"}>Model Y</Link>
      </aside>
    </>
  )
}

export default Navbar
