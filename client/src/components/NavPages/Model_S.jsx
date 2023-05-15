import React, { useEffect } from "react"
import "./NavPages.css"
import Aos from "aos"
import "aos/dist/aos.css"

function Model_S() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <>
      <section
        style={{
          backgroundImage: `url("https://tesla-cdn.thron.com/delivery/public/image/tesla/9ed31f26-4d49-4701-bc5b-2121ff85e5b3/bvlatuR/std/2880x1800/Model-S-Main-Hero-Desktop-LHD?quality=auto-medium&amp;format=auto")`
        }}
        className="banner-top"
      >
        <div className="navpages-content">
          <div data-aos="fade-up" className="navpages-title">
            <h1>Model S</h1>
            <span>Plaid</span>
          </div>
          <div data-aos="fade-up" className="features">
            <div className="features-content">
              <h2>369 mi</h2>
              <span>Range (EPA est.)</span>
            </div>
            <div className="features-content">
              <h2>1.99 s</h2>
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
            src="https://tesla-cdn.thron.com/delivery/public/image/tesla/5ddae53b-7069-493c-ae01-e2843ef20f00/bvlatuR/std/2880x1800/Model-S-Exterior-Hero-Desktop-Global?quality=auto-medium&amp;format=auto"
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
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/51236f4b-ca4b-4429-b919-dfccbff4e98b/bvlatuR/std/2880x1620/Model-S-Exterior-Grid-A-Desktop-Global?quality=auto-medium&amp;format=auto"
                alt=""
              />
            </div>
            <div className="perfomance-content">
              <img
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/5a2f5c89-7177-4974-adca-043f785ba7de/bvlatuR/std/2880x1620/Model-S-Exterior-Grid-B-Desktop-Global?quality=auto-medium&amp;format=auto"
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
                src="https://tesla-cdn.thron.com/delivery/public/image/tesla/e6bc309e-b686-49c9-8f09-d1af689475d5/bvlatuR/std/2880x1620/Model-S-Exterior-Grid-C-Desktop-Global?quality=auto-medium&amp;format=auto"
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
              src="https://tesla-cdn.thron.com/delivery/public/image/tesla/638101a8-7cab-47b1-9ce4-034f070b7400/bvlatuR/std/1800x998/Model-S-Order-Hero-Desktop-Mobile-LHD?quality=auto-medium&amp;format=auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Model_S
