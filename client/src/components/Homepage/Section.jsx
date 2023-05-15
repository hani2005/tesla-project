import React, { useEffect } from 'react'
import './Homepage.css'
import Aos from "aos"
import "aos/dist/aos.css"

function Section() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <section style={{backgroundImage: `url("https://tesla-cdn.thron.com/delivery/public/image/tesla/a269d7b4-87a9-4057-9ac5-2565e56a188e/bvlatuR/std/4096x2560/Homepage-Model-3-Desktop-LHD?quality=auto-medium&amp;format=auto")`}} className="banner-top">
        <div className="content">
          <div className="content-title">
            <h1 data-aos="fade-up">Model 3</h1>
            <span data-aos="fade-up">Leasing starting at $349/mo</span>
          </div>
          <div className="home-buttons">
            <button data-aos="fade-up" className="order">Custom Order</button>
            <button data-aos="fade-up" className="test">Demo Drive</button>
          </div>
        </div>
      </section>
      <section style={{backgroundImage: `url("https://tesla-cdn.thron.com/delivery/public/image/tesla/dfa1ee09-8585-422e-a32a-067e14159aa0/bvlatuR/std/2880x2400/Homepage-Model-Y-Global-Desktop?quality=auto-medium&amp;format=auto")`}} className="banner">
        <div className="content">
          <div className="content-title">
            <h1 data-aos="fade-up">Model Y</h1>
          </div>
          <div className="home-buttons">
            <button data-aos="fade-up" className="order">Custom Order</button>
            <button data-aos="fade-up" className="test">Demo Drive</button>
          </div>
        </div>
      </section>
      <section style={{backgroundImage: `url("https://tesla-cdn.thron.com/delivery/public/image/tesla/58949946-f4bf-4908-b707-18b2fa6020a5/bvlatuR/std/2880x1800/Homepage-Model-S-Desktop-LHD?quality=auto-medium&amp;format=auto")`}} className="banner">
        <div className="content">
          <div className="content-title">
            <h1 data-aos="fade-up">Model S</h1>
            <a href="" data-aos="fade-up">Schedule a Demo Drive</a>
          </div>
          <div className="home-buttons">
            <button data-aos="fade-up" className="order">Custom Order</button>
            <button data-aos="fade-up" className="test">View Inventory</button>
          </div>
        </div>
      </section>
      <section style={{backgroundImage: `url("https://tesla-cdn.thron.com/delivery/public/image/tesla/05a76324-947e-453b-a628-8b2d759756fa/bvlatuR/std/2880x1800/Homepage-Model-X-Desktop-LHD?quality=auto-medium&amp;format=auto")`}} className="banner">
        <div className="content">
          <div className="content-title">
            <h1 data-aos="fade-up">Model X</h1>
            <a href="" data-aos="fade-up">Schedule a Demo Drive</a>
          </div>
          <div className="home-buttons">
            <button data-aos="fade-up" className="order">Custom Order</button>
            <button data-aos="fade-up" className="test">View Inventory</button>
          </div>
        </div>
      </section>
      <section style={{backgroundImage: `url("https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D")`}} className="banner">
        <div className="content">
          <div className="content-title">
            <h1 data-aos="fade-up">Solar Panels</h1>
            <span data-aos="fade-up">Lowest Cost Solar Panels in America</span>
          </div>
          <div className="home-buttons">
            <button data-aos="fade-up" className="order">Order Now</button>
            <button data-aos="fade-up" className="test">Learn More</button>
          </div>
        </div>
      </section>
      <section style={{backgroundImage: `url("https://tesla-cdn.thron.com/delivery/public/image/tesla/4a41ec0e-7316-46a8-8ce9-e2f195ba644d/bvlatuR/std/2880x1800/Homepage-SolarRoof-Desktop-Global?quality=auto-medium&format=auto")`}} className="banner">
        <div className="content">
          <div className="content-title">
            <h1 data-aos="fade-up">Solar Roof</h1>
            <span data-aos="fade-up">Produce Clean Energy From Your Roof</span>
          </div>
          <div className="home-buttons">
            <button data-aos="fade-up" className="order">Order Now</button>
            <button data-aos="fade-up" className="test">Learn More</button>
          </div>
        </div>
      </section>
      <section style={{backgroundImage: `url("https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/0x0/dd739764-bcaa-4263-9488-8c73bc9fb046")`}} className="banner-bottom">
        <div className="content">
          <div className="content-title">
            <h1 data-aos="fade-up">Accessories</h1>
          </div>
          <div className="home-buttons">
            <button data-aos="fade-up" className="order">Shop Now</button>
          </div>
        </div>
      </section> 
    </>
  )
}

export default Section