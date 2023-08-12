import React, { useState } from "react";
import "./Payment.css";
import courses from "../Images/pointer1icon.png";
import timer from "../Images/pointer2icon.png";
import live from "../Images/pointer3icon.png";
import scholarship from "../Images/pointer4icon.png";
import ads from "../Images/pointer5icon.png";
import one from "../Images/Icon1.png";
import two from "../Images/Icon2.png";
import IconClock from "../Images/IconClock2.png";
import { GrRadialSelected } from "react-icons/gr";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

function Payment() {
  const [select, setSelect] = useState({
    12: true,
    6: false,
    3: false,
  });
  const [value, setValue] = useState(179);
  const [discount, setDiscount] = useState(18401);
  const [total, setTotal] = useState(value + (18500 - discount));
  return (
    <>
      <div className="mainContainer">
        <div className="mainDiv">
          <div>
            <h1 className="title">
              Access curated courses worth <br />
              <span className="cross">₹ 18,500</span> at just
              <span className="blue"> ₹ 99</span> per year!
            </h1>
          </div>

          <div>
            <div className="lineDiv">
              <img className="logoImg" src={courses} alt="" />
              <p className="leftTag">
                <span className="blue">100+</span> Job relevant courses
              </p>
            </div>

            <div className="lineDiv">
              <img className="logoImg" src={timer} alt="" />
              <p className="leftTag">
                <span className="blue">20,000+</span> Hours of content
              </p>
            </div>

            <div className="lineDiv">
              <img className="logoImg" src={live} alt="" />
              <p className="leftTag">
                <span className="blue">Exclusive</span> webinar access
              </p>
            </div>

            <div className="lineDiv">
              <img className="logoImg" src={scholarship} alt="" />
              <p className="leftTag">
                Scholarship worth <span className="blue">₹94,500</span>
              </p>
            </div>

            <div className="lineDiv">
              <img className="logoImg" src={ads} alt="" />
              <p className="leftTag">
                <span className="blue">Ad Free</span> learning experience
              </p>
            </div>
          </div>
        </div>

        <div className="planDiv">
          <div className="cardDiv">
            <div className="signDiv">
              <div className="lastDiv">
                <img className="lastImg" src={one} alt="" />
                <p className="lastTag">Sign Up</p>
              </div>

              <div className="lastDiv">
                <img className="lastImg" src={two} alt="" />
                <p className="lastTag">Subscribe</p>
              </div>
            </div>

            <h2 className="payTag">Select your subscription plan</h2>

            <div className="divCard expDiv">
              <div className="cardPoint">
                <p className="offerDiv">
                  <span className="offerExp">Offer expired</span>
                </p>
                <p className="tagTitle">
                  <GrRadialSelected size={15} className="select-icons" /> 12
                  Months Subscription
                </p>
              </div>

              <div>
                <p className="totalTag">Total ₹99</p>
                <p className="monthPrice">₹8 /mo</p>
              </div>
            </div>

            <div
              className={`divCard subDiv ${
                select[12] ? "subscription2" : "subscription"
              }`}
              onClick={() => {
                setSelect({
                  12: true,
                  6: false,
                  3: false,
                });
                setTotal(0);

                setValue(179);
                setDiscount(18401);
                setTotal(value + (18500 - discount));
              }}
            >
              <div className="cardPoint">
                <p className="recomm">
                  <span className="offerExp">Recommended</span>
                </p>
                <p className="tagTitle">
                  <div
                    className={` ${select[12] ? "checkFill" : "checkEmpty"}`}
                  >
                    {select[12] ? (
                      <BsCheckCircleFill color="green" />
                    ) : (
                      <MdRadioButtonUnchecked />
                    )}
                  </div>

                  <span className="recommend_text">12 Months Subscription</span>
                </p>
              </div>

              <div className="priceDiv">
                <p className="totalTag">
                  Total <span className="black">₹179</span>
                </p>
                <p className="monthPrice">₹15 /mo</p>
              </div>
            </div>

            <div
              className={`divCard ${
                select[6] ? "subscription2" : "subscription"
              }`}
              onClick={() => {
                setSelect({
                  12: false,
                  6: true,
                  3: false,
                });
                setTotal(0);

                setValue(149);
                setDiscount(18301);
                setTotal(value + (18500 - discount));
              }}
            >
              <div className="cardPoint monthPriceDiv">
                <div className={`${select[6] ? "checkFill" : "checkEmpty"}`}>
                  {select[6] ? (
                    <BsCheckCircleFill color="green" />
                  ) : (
                    <MdRadioButtonUnchecked />
                  )}
                </div>
                <p className="tagTitle">6 Months Subscription</p>
              </div>

              <div className="priceDiv">
                <p className="totalTag">
                  Total <span className="black">₹149</span>
                </p>
                <p className="monthPrice">₹25 /mo</p>
              </div>
            </div>

            <div
              className={`divCard ${
                select[3] ? "subscription2" : "subscription"
              }`}
              onClick={() => {
                setSelect({
                  12: false,
                  6: false,
                  3: true,
                });
                setTotal(0);

                setValue(99);
                setDiscount(18201);
                setTotal(value + (18500 - discount));
              }}
            >
              <div className="cardPoint monthPriceDiv">
                <div className={`${select[3] ? "checkFill" : "checkEmpty"}`}>
                  {select[3] ? (
                    <BsCheckCircleFill color="green" />
                  ) : (
                    <MdRadioButtonUnchecked />
                  )}
                </div>
                <p className="tagTitle">3 Months Subscription</p>
              </div>

              <div className="priceDiv">
                <p className="totalTag">
                  Total <span className="black">₹99</span>
                </p>
                <p className="monthPrice">₹33 /mo</p>
              </div>
            </div>

            <hr />

            <div className="feeDiv">
              <p>Subscription Fee</p>
              <p>
                <span className="black">₹18,500</span>
              </p>
            </div>

            <div className="limDiv">
              <div className="limtagDiv">
                <p className="limTime">Limited time offer</p>

                <div className="limDiv2">
                  <img className="imgTimer" src={IconClock} alt="timer" />
                  <p className="limDate">Offer valid till 25th March 2023</p>
                </div>
              </div>

              <div>
                <p className="limPrice">
                  <span className="black">- ₹{discount}</span>
                </p>
              </div>
            </div>

            <div className="feeTotalDiv">
              <p>
                <span className="black">Total</span> (Incl. of 18% GST)
              </p>
              <p className="totalTag">
                <span className="black">₹{total}</span>
              </p>
            </div>
            <div className="feeButton">
              <button className="canBtn">CANCEL</button>
              <button className="payBtn">PROCEED TO PAY</button>
            </div>
            <img
              src="https://cdn.razorpay.com/static/assets/merchant-badge/badge-dark.png"
              className="razLogo"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
