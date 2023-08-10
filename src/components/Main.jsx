import React, { useState, useEffect } from "react";
import "./main.css"; // Update the CSS file name if necessary

import Payment from "./Payment"; // Update the component import if necessary

import Background from "../image/Background.png";
import Book from "../image/Book.png";
import Scholarship from "../image/Scholarship.png";

import Clock from "../image/Clock.png";

import live from "../image/live.png";
import Ads from "../image/Ads.png";
import Icon1 from "../image/Icon1.png";
import Icon2 from "../image/Icon2.png";
import Vector from "../image/Vector.png";
import Razor from "../image/razor.png";

const customSubscriptionPlans = [
  {
    id: 0,
    content: "12 Months Subscription",
    totalPrice: 99,
    monthlyPrice: 8,
    isExpired: true,
  },
  {
    id: 1,
    content: "12 Months Subscription",
    totalPrice: 179,
    monthlyPrice: 15,
    isRecommended: true,
  },
  {
    id: 2,
    content: "6 Months Subscription",
    totalPrice: 149,
    monthlyPrice: 25,
  },
  {
    id: 3,
    content: "3 Months Subscription",
    totalPrice: 99,
    monthlyPrice: 33,
  },
];

const Main = () => {
  const [selected, setSelected] = useState(1);
  const [plans, setPlans] = useState(customSubscriptionPlans);
  const [currentPlan, setCurrentPlan] = useState({});

  useEffect(() => {
    const curr = plans.filter((plan) => plan.id === selected);
    setCurrentPlan(curr[0]);
  }, [selected]);

  const handleSelect = (id) => {
    setSelected(id);
  };

  const formatPrice = () => {
    const currentPrice = currentPlan.totalPrice;
    const totalPrice = 18500 - currentPrice;
    const formattedPrice = addCommasToNumber(totalPrice);

    return formattedPrice;
  };

  const addCommasToNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <div className="custom-left-container">
        <img src={Background} alt="Background" />

        <div className="custom-heading">
          Access curated courses worth ₹
          <span className="custom-red-line"> 18,500</span> at just{" "}
          <span className="custom-head-span">₹ 99</span> per year!
        </div>
        <div className="custom-list-container">
          <div className="custom-book">
            <div className="custom-icon">
              <img src={Book} alt="Book Icon" />
            </div>
            <div className="custom-para">
              <span>100+</span> Job relevant courses
            </div>
          </div>
          <div className="custom-book">
            <div className="custom-icon">
              <img src={Clock} alt="Clock Icon" />
            </div>
            <div className="custom-para">
              <span>20,000+</span> Hours of content
            </div>
          </div>
          // ...
          <div className="custom-list-container">
            <div className="custom-book">
              <div className="custom-icon">
                <img src={Book} alt="Book Icon" />
              </div>
              <div className="custom-para">
                <span>100+</span> Job relevant courses
              </div>
            </div>
            <div className="custom-book">
              <div className="custom-icon">
                <img src={Clock} alt="Clock Icon" />
              </div>
              <div className="custom-para">
                <span>20,000+</span> Hours of content
              </div>
            </div>
            <div className="custom-book">
              <div className="custom-icon">
                <img src={live} alt="Live Icon" />
              </div>
              <div className="custom-para">
                <span>Exclusive</span> webinar access
              </div>
            </div>
            <div className="custom-book">
              <div className="custom-icon">
                <img src={Scholarship} alt="Scholarship Icon" />
              </div>
              <div className="custom-para">
                Scholarship worth <span>₹94,500</span>
              </div>
            </div>
            <div className="custom-book">
              <div className="custom-icon">
                <img src={Ads} alt="Ads Icon" />
              </div>
              <div className="custom-para">
                <span>Ad Free</span> learning experience
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-right-container">
        <div className="custom-signup-btn">
          <div className="custom-signup">
            <img src={Icon1} alt="Signup Icon 1" />
            <div className="custom-text">Sign Up</div>
          </div>
          <div className="custom-signup">
            <img src={Icon2} alt="Signup Icon 2" />
            <div className="custom-text">Subscribe</div>
          </div>
        </div>
        <div className="custom-plan">Select your subscription plan</div>
        <div className="custom-payment-container">
          {plans.map((plan) => (
            <Payment
              key={plan.id}
              id={plan.id}
              content={plan.content}
              totalPrice={plan.totalPrice}
              monthlyPrice={plan.monthlyPrice}
              isRecommended={plan.isRecommended}
              isExpired={plan.isExpired}
              selected={plan.id === selected}
              handleSelect={handleSelect}
            />
          ))}
        </div>
        <div className="custom-total-container">
          <div className="custom-left">
            <div className="custom-total-left">Subscription Fee</div>
            <div className="custom-price" style={{ marginRight: "1rem" }}>
              ₹18,500
            </div>
          </div>
          <div className="custom-limited">
            <div className="custom-limited-top">
              <div className="custom-second-box">Limited time offer</div>
              <div className="custom-price">- ₹{formatPrice()}</div>
            </div>
            <div className="custom-limited-bottom">
              <img src={Vector} alt="Vector Icon" />
              <span className="custom-offer">
                Offer valid till 25th March 2023{" "}
              </span>
            </div>
          </div>
          <div className="custom-gst">
            <div className="custom-gst-para">
              <span
                style={{
                  fontWeight: 600,
                  marginRight: "0.25rem",
                  color: "#3C4852",
                }}
              >
                Total
              </span>
              (Incl. of 18% GST)
            </div>
            <div className="custom-final-amount" style={{ fontWeight: 600 }}>
              ₹{currentPlan.totalPrice}
            </div>
          </div>
        </div>
        <div className="custom-btns">
          <div className="custom-cancel-btn">
            <button>CANCEL</button>
          </div>
          <div className="custom-pay-btn">
            <button>proceed to pay</button>
          </div>
        </div>
        <div style={{ padding: "1rem 1.5rem" }}>
          <img src={Razor} height={48} alt="Razor Icon" />
        </div>
      </div>
    </>
  );
};

export default Main;
