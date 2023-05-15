import React, { useEffect } from "react"
import "./NavPages.css"
import Aos from "aos"
import "aos/dist/aos.css"

function Model_3() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <section
        style={{
          backgroundImage: `url("https://tesla-cdn.thron.com/delivery/public/image/tesla/5a7b3001-249f-4065-a330-4ea6a17ccf7b/bvlatuR/std/2560x1708/Model-3-Main-Hero-Desktop-LHD")`
        }}
        className="banner-top"
      >
        <div className="model3-content">
          <div data-aos="fade-up" className="model3-title">
            <h1>Model 3</h1>
            <a href="">Schedule a Demo Drive</a>
          </div>
          <div data-aos="fade-up" className="model3-features">
            <div className="model3-features-content">
              <h2>3.1 s</h2>
              <span>0-60 mph*</span>
            </div>
            <div className="model3-features-content">
              <h2>358 mi</h2>
              <span>Range (EPA est.)</span>
            </div>
            <div className="model3-features-content">
              <h2>AWD</h2>
              <span>Dual Motor</span>
            </div>
            <button className="model3-order-btn">Order Now</button>
          </div>
        </div>
      </section>
      <div className="model3-perfomance-content">
        <div data-aos="fade-up" className="model3-perfomance-title">
          <h4>Performance</h4>
          <h2>Quickest Acceleration</h2>
          <div className="model3-perfomance-buttons">
            <button className="model3-perfomance-inv-btn">
              <i className="fa-solid fa-plus"></i>
              View Inventory
            </button>
            <button className="model3-perfomance-order-btn">Order Now</button>
          </div>
        </div>
        <div data-aos="fade-up" className="model3-perfomance-p">
          <p>
            Model 3 comes with the option of dual motor all-wheel drive,
            <br /> 20” Überturbine Wheels and Performance Brakes for total
            control in all weather
            <br /> conditions. A carbon fiber spoiler improves stability at high
            speeds, all allowing
            <br /> Model 3 to accelerate from 0-60 mph* in as little as 3.1
            seconds. Chat with a Tesla
            <br /> Advisor to learn more about Model 3 or schedule a demo drive
            today.
          </p>
        </div>
      </div>
      <section
        style={{
          backgroundImage: `url("https://tesla-cdn.thron.com/delivery/public/image/tesla/a7d91e4d-ba1e-41f1-b996-36fb4c925f57/bvlatuR/std/2560x1600/Model-3-AWD-Hero-Desktop-LHD")`
        }}
        className="model3-banner"
      >
        <div data-aos="fade-up" className="model3-banner-features">
          <div className="model3-banner-content">
            <h2>2</h2>
            <span>
              Independent motors digitally control
              <br /> torque to the front and rear wheels
            </span>
          </div>
          <div className="model3-banner-content">
            <h2>10 ms</h2>
            <span>
              Dual motors respond to changing
              <br /> conditions in as little as 10 milliseconds
            </span>
          </div>
          <div className="model3-banner-content">
            <i className="fa-solid fa-cloud"></i>
            <span>
              Unparalleled traction and control, in all
              <br /> weather conditions
            </span>
          </div>
        </div>
      </section>
      <div data-aos="fade-up" className="model3-awd-content">
        <div className="model3-awd-title">
          <h4>All-Wheel Drive</h4>
          <h2>Dual Motor</h2>
          <button className="model3-awd-order-btn">Order Now</button>
          <button className="model3-awd-inv-btn">View Inventory</button>
        </div>
        <div className="model3-awd-p">
          <p>
            Tesla All-Wheel Drive has two independent motors for improved
            redundancy, each
            <br /> with only one moving part for minimal maintenance and maximum
            durability. Unlike
            <br /> traditional all-wheel drive systems, they digitally control
            torque to the front and rear
            <br /> wheels for far better handling and traction control.
          </p>
        </div>
      </div>
      <div className="model3-specs">
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/cd8ca7c5-ae2e-457a-85e3-a672c37f606f/bvlatuR/std/1024x732/Model-3-Specs-Desktop-Mobile-LHD"
          alt=""
        />
        <div data-aos="fade-up" className="model3-specs-container">
          <h1>
            Model 3 <b>Specs</b>
          </h1>
          <div className="model3-specs-buttons">
            <button>Perfomance</button>
            <button>Long Range AWD</button>
            <button>Rear-Wheel Drive</button>
          </div>
          <div className="model3-specs-content">
            <div className="model3-specs-section-1">
              <h3>Battery</h3>
              <span>Long Range</span>
              <h3>*Acceleration</h3>
              <span>3.1 s 0-60 mph with rollout subtracted</span>
              <h3>Range</h3>
              <span>315 miles (EPA est.)</span>
              <h3>Drive</h3>
              <span>Dual Motor All-Wheel Drive</span>
              <h3>Seating</h3>
              <span>5 Adults</span>
              <h3>Wheels</h3>
              <span>20"</span>
            </div>
            <div className="model3-specs-section-2">
              <h3>Weight</h3>
              <span>4,048 lbs</span>
              <h3>Cargo</h3>
              <span>23 cu ft</span>
              <h3>Displays</h3>
              <span>15" Center Touchscreen</span>
              <h3>Supercharging Max/Payment Type</h3>
              <span>250 kW Max; Pay Per Use</span>
              <h3>Onboard Charger Max</h3>
              <span>11.5 kW max (48A)</span>
              <h3>Warranty</h3>
              <span>
                Basic Vehicle - 4 years or
                <br /> 50,000 mi, whichever comes
                <br /> first Battery & Drive Unit - 8<br /> years or 120,000 mi,
                whichever
                <br /> comes first
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="model3-order-car">
        <div data-aos="fade-up" className="model3-order-car-title">
          <h1>Experience Model 3</h1>
          <span>Leasing starting at $349/mo</span>
          <div className="model3-order-car-buttons">
            <button className="model3-order-car-btn">Order Now</button>
            <button className="model3-inv-car-btn">View Inventory</button>
          </div>
        </div>
        <img
          data-aos="fade-up"
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/1275ab15-9ad9-473c-a329-8e3eb6ebd5de/bvlatuR/std/2266x734/Model-3-Order-Hero-Desktop-Mobile-Global?quality=auto-medium&amp;format=auto"
          alt=""
        />
      </div>
    </>
  )
}

export default Model_3
