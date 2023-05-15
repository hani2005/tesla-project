import React, { useContext, useState } from "react"
import { UserContext } from "../UserContext"
import { Link, Navigate, useParams } from "react-router-dom"
import axios from "axios"
import "./Pages.css"

function AccountPage() {
  const [redirect, setRedirect] = useState(null)
  const { ready, user, setUser } = useContext(UserContext)

  let { subpage } = useParams()
  if (subpage === undefined) {
    subpage = "profile"
  }

  async function logout() {
    await axios.post("/logout")
    setRedirect("/")
    setUser(null)
  }

  if (!ready) {
    return "Loading..."
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }
  return (
    <div className="container">
      <div className="account-sidebar">
        <Link to={"/account"}>
          <i className="fa-solid fa-house"></i>Dashboard
        </Link>
        <Link to={"/account/settings"}>
          <i className="fa-solid fa-user"></i>Profile Settings
        </Link>
        <Link to={"/account/payment-method"}>
          <i className="fa-solid fa-credit-card"></i>Payment Method
        </Link>
        <Link to={"/account/loot-box"}>
          <i className="fa-solid fa-box"></i>Loot Box
        </Link>
        <Link to={"/account/order-history"}>
          <i className="fa-solid fa-shirt"></i>Order History
        </Link>
        <button onClick={logout}>
          <i className="fa-solid fa-right-from-bracket"></i>Sign Out
        </button>
      </div>
      <div className="account-content">
        {subpage === "profile" && (
          <div className="profile">
            <h1>Dashboard</h1>
            <div className="profile-container">
              <div className="profile-content">
                <img
                  src="https://tesla-cdn.thron.com/delivery/public/image/tesla/f7ede95a-84bc-436f-952a-8317732c0fdf/s24cey/std/636x300/solar-marketing_636x300"
                  alt=""
                />
                <div className="profile-title">
                  <h3>Order Tesla Solar</h3>
                  <h4>Produce energy to power your Tesla life</h4>
                  <Link>View Solar</Link>
                </div>
              </div>
              <div className="profile-content">
                <img
                  src="https://tesla-cdn.thron.com/delivery/public/image/tesla/19cd4858-858c-4e41-adcb-a7399da113a8/aaovse/std/636x300/dscf6059-4"
                  alt=""
                />
                <div className="profile-title">
                  <h3>Reserve a Car</h3>
                  <h4>Browse our models</h4>
                  <Link>Shop Now</Link>
                </div>
              </div>
              <div className="profile-content">
                <img
                  src="https://tesla-cdn.thron.com/delivery/public/image/tesla/73bbc04a-67ec-47f6-9e07-86183688bd46/jzqmrw/std/636x300/third-party-car_636x300"
                  alt=""
                />
                <div className="profile-title">
                  <h3>Purchased a car from a third party?</h3>
                  <Link>Add</Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {subpage === "settings" && (
          <div className="settings">
            <h1>Profile Settings</h1>
            <div className="name">
              <h4>Full Name</h4>
              <h3>{user.name}</h3>
              <button>Edit</button>
            </div>
            <div className="email">
              <h4>Email</h4>
              <h3>{user.email}</h3>
              <button>Edit</button>
            </div>
          </div>
        )}
        {subpage === "payment-method" && (
          <div className="payment-content">
            <img
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/bb0d2e9a-ada7-401f-bd47-daeff3fd033d/o0vzns/std/0x0/charging-supercharger"
              alt=""
            />
            <div className="payment-title">
              <h3>Get Started</h3>
              <h4>Set up simple and convenient charging</h4>
              <button>Add Card</button>
            </div>
          </div>
        )}
        {subpage === "loot-box" && (
          <div className="loot-box">
            <h1>Loot Box</h1>
            <p>
              When friends and family order through your referral link, you will
              each earn Credits that can be redeemed for Tesla awards. View
              eligible products, track referrals, and redeem your Credits in the
              Loot Box section of the Tesla app.
            </p>
            <p>Your referral link will be available upon delivery of your car or installation of your solar system. <a href="">Learn More</a></p>
          </div>
        )}
        {subpage === "order-history" && (
          <div className="order-history">
            <h1>Order History</h1>
            <img
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/2051e51c-9fe1-4713-b0e4-e7a5e982b6b3/xuauwe/std/500x500/mens_plaid_tee_transparent"
              alt=""
            />
            <div className="order-title">
              <h4>View all shop transactions</h4>
              <a href="">View</a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default AccountPage
