import React, { useEffect } from "react";
import "./CardGrid.css";

const CardGrid = () => {
  useEffect(() => {
    const items = document.querySelectorAll(
      ".card-grid-item.featured, .mini-child .first-mini, .mini-child .last-mini"
    );
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("animate");
      }, index * 300);
    });
  }, []);

  return (
    <div className="card-grid-container">
      <div className="card-grid-item featured">
        <img
          src="https://templates.sparklethings.com/kaffix/wp-content/uploads/sites/89/2025/08/image-TUQC7J8.jpg"
          alt=""
        />
        <div className="card-grid-item-overlay">
          <p>B1G1</p>
          <h3>Buy 1 Get 1 Free – Weekdays, 3PM to 6 PM.</h3>
          <a href="#" className="btn">
            Grab The Deal
          </a>
        </div>
      </div>

      <div className="mini-child">
        <div className="card-grid-item first-mini">
          <img
            src="https://templates.sparklethings.com/kaffix/wp-content/uploads/sites/89/2025/08/image-ACT4KSN.jpg"
            alt=""
          />
          <div className="card-grid-item-overlay">
            <p>MEMBERS</p>
            <h3>
              Join our loyalty program &<br />
              earn rewards with every sip.
            </h3>
            <a href="#" className="btn">
              Join Member
            </a>
          </div>
        </div>

        <div className="card-grid-item">
          <img
            src="https://templates.sparklethings.com/kaffix/wp-content/uploads/sites/89/2025/08/image-BTKMEJN.jpg"
            alt=""
          />
        </div>

        <div className="card-grid-item">
          <img
            src="https://templates.sparklethings.com/kaffix/wp-content/uploads/sites/89/2025/08/image-5DHN5KB.jpg"
            alt=""
          />
        </div>

        <div className="card-grid-item last-mini">
          <img
            src="https://templates.sparklethings.com/kaffix/wp-content/uploads/sites/89/2025/08/image-ZA4L2B7.jpg"
            alt=""
          />
          <div className="card-grid-item-overlay">
            <p>FREE</p>
            <h3>Free pastry before 10 AM.</h3>
            <a href="#" className="btn">
              Grab The Deal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
