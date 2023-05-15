import React, { useEffect } from "react"
import "./NavPages.css"
import Aos from "aos"
import "aos/dist/aos.css"

function Model_X() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <section
        style={{
          backgroundImage: `url("https://tesla-cdn.thron.com/delivery/public/image/tesla/37612e96-a8a7-46ea-9847-4fff683483b0/bvlatuR/std/2880x1800/Model-X-Main-Hero-Desktop-LHD?quality=auto-medium&amp;format=auto")`
        }}
        className="banner-top"
      >
        <div className="navpages-content">
          <div data-aos="fade-up" className="navpages-title">
            <h1>Model X</h1>
            <span>Plaid</span>
          </div>
          <div data-aos="fade-up" className="features">
            <div className="features-content">
              <h2>333 mi</h2>
              <span>Range (EPA est.)</span>
            </div>
            <div className="features-content">
              <h2>2.5 s</h2>
              <span>0-60 mph*</span>
            </div>
            <div className="features-content">
              <h2>200 mph</h2>
              <span>Top Speed †</span>
            </div>
            <div className="features-content">
              <h2>1,020 hp</h2>
              <span>Peak Power</span>
            </div>
          </div>
          <div data-aos="fade-up" className="navpages-buttons">
            <button className="navpages-inv">View Inventory</button>
            <button className="navpages-order">Order Now</button>
          </div>
        </div>
      </section>
      <div className="exterior">
        <div className="exterior-img">
          <img
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/c440ec7a-6fe7-4170-a958-117292218555/bvlatuR/std/2880x1800/Model-X-Exterior-Hero-Desktop-Global?quality=auto-medium&amp;format=auto"
            alt=""
          />
        </div>
        <div className="exterior-page">
          <div className="exterior-content">
            <div data-aos="fade-up" className="exterior-title">
              <h4>Exterior</h4>
              <h2>Designed for Efficiency</h2>
              <button className="exterior-order-btn">Order Now</button>
              <button className="exterior-inv-btn">View Inventory</button>
            </div>
            <div data-aos="fade-up" className="exterior-p">
              <p>
                With a drag coefficient of just .208 Cd, the lowest on the
                planet, Model S is built for
                <br /> speed, endurance and range. Improved aerodynamics and a
                wider chassis offer
                <br /> more responsive performance so you can take corners
                quicker and with more
                <br />
                confidence.
              </p>
            </div>
          </div>
          <div className="perfomance">
            <div className="perfomance-content">
              <div data-aos="fade-up" className="perfomance-title">
                <h4>Relentless Performance</h4>
                <p>
                  Staggered, performance wheels and tires keep the car
                  <br /> planted and help transfer maximum power down to the
                  <br /> road.
                </p>
              </div>
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/80ca0ff7-30a7-4758-8ecb-235f4f63a0b9/bvlatuR/std/2880x1620/Model-X-Exterior-Grid-A-Desktop-Global?quality=auto-medium&amp;format=auto"
                alt=""
              />
            </div>
            <div className="perfomance-content">
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/d4fb7781-ec21-4823-b489-bde0a25e102b/bvlatuR/std/3949x2218/Model-X-Exterior-Grid-B-Desktop-Global"
                alt=""
              />
              <div data-aos="fade-up" className="perfomance-title">
                <h4>Optimized Aerodynamics</h4>
                <p>
                  Attention to detail on all exterior surfaces makes Model
                  <br /> S the most aerodynamic production car on Earth.
                </p>
              </div>
            </div>
            <div className="perfomance-content">
              <div data-aos="fade-up" className="perfomance-title">
                <h4>Refined Styling</h4>
                <p>
                  Staggered, performance wheels and tires keep the car
                  <br />
                  planted and help transfer maximum power down to the
                  <br />
                  road.
                </p>
              </div>
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/99237086-33fb-438b-9381-f8f5e0f32444/bvlatuR/std/2880x1620/Model-X-Exterior-Grid-C-Desktop-Global?quality=auto-medium&amp;format=auto"
                alt=""
              />
            </div>
          </div>
          <div className="order-car">
            <div data-aos="fade-up" className="order-car-title">
              <h1>Model S</h1>
              <div className="order-car-buttons">
                <button className="order-btn">Order Now</button>
                <button className="inv-btn">View Inventory</button>
              </div>
            </div>
            <img
              data-aos="fade-up" 
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/835626bf-af31-4211-a1a3-37e430a0a6ac/bvlatuR/std/1800x998/Model-X-Order-Hero-Desktop-Mobile-LHD?quality=auto-medium&amp;format=auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Model_X
