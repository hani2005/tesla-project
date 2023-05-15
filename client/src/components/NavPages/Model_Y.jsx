import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"

function Model_Y() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <section
        style={{
          backgroundImage: `url("https://tesla-cdn.thron.com/delivery/public/image/tesla/91abd4c7-32a1-41cc-ade5-b64774dbea61/bvlatuR/std/2880x1800/Model-Y-Main-Hero-Desktop-Global?quality=auto-medium&amp;format=auto")`
        }}
        className="banner-top"
      >
        <div className="model3-content">
          <div data-aos="fade-up" className="model3-title">
            <h1>Model Y</h1>
            <a href="">Schedule a Demo Drive</a>
          </div>
          <div data-aos="fade-up" className="model3-features">
            <div className="model3-features-content">
              <h2>76 cu ft</h2>
              <span>Cargo Space</span>
            </div>
            <div className="model3-features-content">
              <h2>330 mi</h2>
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
          <h4>Utility</h4>
          <h2>A Place For Everything</h2>
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
            Model Y provides maximum versatility—able to carry 7 passengers and
            their cargo.
            <br /> Each second row seat folds flat independently, creating
            flexible storage for skis,
            <br /> furniture, luggage and more. The liftgate opens to a low
            trunk floor that makes
            <br /> loading and unloading easy and quick. Chat with a Tesla
            Advisor to learn more
            <br /> about Model Y or schedule a demo drive today.
          </p>
        </div>
      </div>
      <section
        style={{
          backgroundImage: `url("https://tesla-cdn.thron.com/delivery/public/image/tesla/48b20b9d-9322-4cf9-b079-44797fc32600/bvlatuR/std/0x0/AWD_hero@2")`
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
            <h2>3.5s</h2>
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
      <div className="model3-awd-content">
        <div data-aos="fade-up" className="model3-awd-title">
          <h4>All-Wheel Drive</h4>
          <h2>Dual Motor</h2>
          <button className="model3-awd-order-btn">Order Now</button>
          <button className="model3-awd-inv-btn">View Inventory</button>
        </div>
        <div data-aos="fade-up" className="model3-awd-p">
          <p>
            Tesla All-Wheel Drive has two ultra-responsive, independent electric
            motors that
            <br /> digitally control torque to the front and rear wheels—for far
            better handling, traction
            <br /> and stability control. Model Y is capable in rain, snow, mud
            and off-road.
          </p>
        </div>
      </div>
      <div className="model3-specs">
        <img
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/c2f0eec0-e1ea-4cd6-9525-5579c6852a2f/bvlatuR/std/1800x1285/Model-Y-Specs-Hero-Desktop-LHD"
          alt=""
        />
        <div data-aos="fade-up" className="model3-specs-container">
          <h1>
            Model Y <b>Specs</b>
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
              <span>3.5 s 0-60 mph with rollout subtracted</span>
              <h3>Range</h3>
              <span>303 miles (EPA est.)</span>
              <h3>Drive</h3>
              <span>Dual Motor All-Wheel Drive</span>
              <h3>Seating</h3>
              <span>Up to 5</span>
              <h3>Wheels</h3>
              <span>21"</span>
            </div>
            <div className="model3-specs-section-2">
              <h3>Weight</h3>
              <span>4,398 lbs</span>
              <h3>Max Cargo Volume</h3>
              <span>23 cu ft</span>
              <h3>Top Speed</h3>
              <span>155 mph</span>
              <h3>Displays</h3>
              <span>15" Center Touchscreen</span>
              <h3>Supercharging Max/Payment Type</h3>
              <span>250 kW Max; Pay Per Use</span>
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
          <h1>Order Model Y</h1>
          <div className="model3-order-car-buttons">
            <button className="model3-order-car-btn">Order Now</button>
            <button className="model3-inv-car-btn">View Inventory</button>
          </div>
        </div>
        <img
          data-aos="fade-up"
          src="https://tesla-cdn.thron.com/delivery/public/image/tesla/71b23730-ad0d-4993-af25-e2bf033b1919/bvlatuR/std/1934x600/Model-Y-Order-Hero-Desktop-Mobile-Global?quality=auto-medium&amp;format=auto"
          alt=""
        />
      </div>
    </>
  )
}

export default Model_Y
