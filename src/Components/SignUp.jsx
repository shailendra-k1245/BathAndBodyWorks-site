import React from "react";
import "./SignUp.css";
export const SignUp = () => {
  return (
    <>
      <div className="signup-container">
        <p className="signup-container-link">
          <span>HOME </span><span>/ CREATE AN ACCOUNT</span> 
        </p>

        <div className="signup-container-input">
          <div className="topPoster">
            <img
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw6f07f823/images/banners/create-account_d.png?yocs=s_"
              className="signup-container-img"
              alt=""
            />
          </div>
          <div className="topHeading">
            <h2 className="signup-heading">Create an Account</h2>
          </div>
          <div className="signupInputBox">
            <div className="signupInputBox_1">
              <label>First Name</label>
              <br />
              <input type="text" id="signUpFName" className="signup-input-box" />
            </div>

            <div className="signupInputBox_1">
              <label>Last Name</label>
              <br />
              <input type="text" id="signUpLName" className="signup-input-box" />
            </div>

            <div className="signupInputBox_1">
              <label>Email</label>
              <br />
              <input type="text" id="signUpEmail" className="signup-input-box"/>
            </div>

            <div className="signupInputBox_1">
              <label>Street Address</label>
              <br />
              <input type="text" id="signUpStreet"  className="signup-input-box"/>
            </div>

            <div className="signupInputBox_1">
              <label>City</label>
              <br />
              <input type="text" id="signUpCity" className="signup-input-box" />
            </div>

            <div className="signupInputBox_1">
              <label>State</label>
              <br />
              <input type="text" id="signUpState" className="signup-input-box" />
            </div>

            <div className="signupInputBox_1">
              <label>ZIP/Postal Code</label>
              <br />
              <input type="number" id="signUpZipcode" className="signup-input-box" />
            </div>

            <div className="signupInputBox_1">
              <label>Phone</label>
              <br />
              <input type="number" id="signUpPhone" className="signup-input-box" />
            </div>

            <div className="signupInputBox_1">
              <label>Password</label>
              <br />
              <input type="number" id="signUpPassword" className="signup-input-box" />
            </div>

            <div className="signupInputBox_1">
              <button id="createAccount">Create Account</button>
            </div>

            <div className="signup-fot-box">
              <p className="signup-fot-box-ptag">Questions?</p>
              <p className="signup-fot-box-ptag">We’re here for you! Call us at 1-800-756-5005.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
