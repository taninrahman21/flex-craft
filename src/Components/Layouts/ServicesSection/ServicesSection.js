import React, { useEffect } from "react";
import "./ServicesSection.css";

const ServicesSection = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".service-item");
    items.forEach((item) => item.classList.add("animate"));
  }, []);

  return (
    <>
      <div className="services-section">
        <div className="services-container">
          <div className="service1 service-item">
            <div className="service-img">
              <img
                src="https://tridaniel.creedcreatives.net/diggie/wp-content/uploads/sites/28/2025/07/attractive-stylish-bearded-man-works-in-hothouse-2025-03-18-19-30-58-utc.jpg"
                alt=""
              />
            </div>

            <div className="service-content">
              <h2>Plant Styling & Decor</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="service2 service-item">
            <div className="service-img">
              <img
                src="https://tridaniel.creedcreatives.net/diggie/wp-content/uploads/sites/28/2025/07/female-customer-buying-flower-in-a-pot-floristry-2024-11-26-16-03-58-utc.jpg"
                alt=""
              />
            </div>
            <div className="service-content">
              <h2>Plant Consultation</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          <div className="service3 service-item">
            <div className="service3-main">
              <div className="service-img">
                <img
                  src="https://tridaniel.creedcreatives.net/diggie/wp-content/uploads/sites/28/2025/07/woman-with-pruners-climbs-the-stairs-in-garden-2024-12-04-07-12-27-utc.jpg"
                  alt=""
                />
              </div>

              <div className="service-content">
                <h2>Plant Styling & Decor</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div className="get-in-touch">
              <h2>Stay in Touch with Nature</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus
              </p>
              <button>
                Get Services Today
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="arrow-icon"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17L17 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
