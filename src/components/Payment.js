import React, {useState} from 'react'
import Courses from "../contents/Courses.png";
import Timer from "../contents/Timer.png";
import Live from "../contents/Live.png";
import Scholarship from "../contents/Scholarship.png";
import Ads from "../contents/Ads.png";
import One from "../contents/One.png";
import Two from "../contents/Two.png";
import Limitedtime from "../contents/Limitedtime.png"
import Razorpay from "../contents/Razorpay.png";

import { GrRadialSelected } from 'react-icons/gr';
import { BsCheckCircleFill } from 'react-icons/bs';
import { MdRadioButtonUnchecked } from 'react-icons/md';
import "./Payment.css";

const plans = [
  { months: 12, price: 179, recommended: true, discount: 18321 },
  { months: 6, price: 149, recommended: false, discount: 18351 },
  { months: 3, price: 99, recommended: false, discount: 18401 }
];

const Payment = () => {

const [selectedPlan, setSelectedPlan] = useState(plans[0]);

const handlePlanSelect = (plan) => {
  setSelectedPlan(plan);
};

const clearSelection = () => {
  setSelectedPlan(null);
};


const totalDiscount = 18500 - (selectedPlan ? selectedPlan.discount : 0);
const totalAmount = selectedPlan ? selectedPlan.discount : 0;

  return (
    <>
      <div className="pricing_section">
        <div className="content_container">
          <div className="main_heading">
            <h1 className="heading">
              Access curated courses worth <br /> ₹ <span className='cross-line'>18,500</span> at just <span className='blue'>₹99</span> per year!
            </h1>
          </div>

          <div className="content_wrap">
            <div className="content_line">
              <img className="left_icons" src={Courses} alt="" />
                <p className="left_lines"><span className='blue'>100+</span> Job relevant courses </p>
            </div>

            <div className="content_line">
              <img className="left_icons" src={Timer} alt="" />
              <p className="left_lines"><span className='blue'>20,000+</span> Hours of content </p>
            </div>

            <div className="content_line">
              <img className="left_icons" src={Live} alt="" />
              <p className="left_lines"><span className='blue'>Exclusive</span> webinar access</p>
            </div>

            <div className="content_line">
              <img className="left_icons" src={Scholarship} alt="" />
              <p className="left_lines">Scholarship worth <span className='blue'>₹94,500</span></p>
            </div>

            <div className="content_line">
              <img className="left_icons" src={Ads} alt="" />
              <p className="left_lines"><span className='blue'>Ad Free</span> learning experience</p>
            </div>
          </div>
        </div>

        <div className="payment_plan_container">
          <div className="payment_plan_card">
            <div className="signup_subscribe">
              <div className="onetwo_div">
                <img className="onetwo_img" src={One} alt="" />
                <p className="oneTwoP">Sign Up</p>
              </div>

              <div className="onetwo_div">
                <img className="onetwo_img" src={Two} alt="" />
                <p className="oneTwoP">Subscribe</p>
              </div>
            </div>

            <h2 className="payment_title">Select your subcription plan</h2>

            <div className="month_card month_expired">
              <div className="month_radio_div">
                <p className='offer-expired'><span className="ex-text">Offer expired</span></p>
                <p className="months_p">
                    <GrRadialSelected size={15} className='select-icons' />12 Months Subscription
                </p>
              </div>

              <div className="pricing_div">
                <p className="total_price">Total ₹99</p>
                <p className="total_month">₹8 /mo</p>
              </div>
            </div>

            {plans.map((plan, index) => (
              <div
                key={index}
                className={`month_card ${selectedPlan === plan ? 'subscription2' : 'subscription'}`}
                onClick={() => handlePlanSelect(plan)}
              >
              <div className="month_radio_div months-input-part">
                <div className={selectedPlan === plan ? 'checkFill' : 'checkEmpty'}
                 style={selectedPlan === plan ? { color: '#47BA68' } : {}}
                >
                  {selectedPlan === plan ? <BsCheckCircleFill /> : <MdRadioButtonUnchecked />}
                </div>
                {plan.recommended && (
                  <p className="offer-recommended">
                    <span className="recommend-text">Recommended</span>
                  </p>
                )}
                <p className="months_p">{plan.months} Months Subscription</p>
              </div>

            <div className="pricing_div">
              <p className="total_price">
                Total <span className="black">₹{18500-plan.discount}</span>
              </p>
              <p className="total_month">₹{Math.round(plan.price / plan.months)} /mo</p>
            </div>
          </div>
        ))}

            <hr />

            <div className="subscription_fee_div">
              <p className="subscription_fee">Subscription Fee</p>
              <p className="subscription_price"><span className="black">₹18,500</span></p>
            </div>

            <div className="limited_time_div">
              <div className="limited_time_text_side">
                <p className="limited_time_offer">Limited time offer</p>
                <div className="limited_time_text_div2">
                  <img className="timer_img" src={Limitedtime} alt="timer" />
                  <p className="limited_time_date">
                    Offer valid till 31th August 2023
                  </p>
                </div>
              </div>

              <div className="limited_time_price_side">
                <p className="limited_time_price"><span className="black">- ₹{totalAmount}</span></p>
              </div>

            </div>

            <div className="total_fee_div">
              <p className="total_fee"><span className="black">Total</span> (Incl. of 18% GST)</p>
              <p className="total_price"><span className="black">₹{totalDiscount}</span></p>
            </div>
            <div className="btn-container">
              <button className="cancel-btn" onClick={clearSelection}>CANCEL</button>
              <button className="pay-btn">PROCEED TO PAY</button>
            </div>
            <img src={Razorpay} className='razorpay-logo' alt="logo" />  

          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
