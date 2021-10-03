import React from "react";
import "../CSS/SubHeader.css";

function SubHeader() {
  return (
    <div className="subheader">
      <div className="subheader-button">
        <button className="subheader-login-btn">
          <div className="subheader-text">
            <div>
              <span class="material-icons subheader-icon">login</span>
            </div>
            <div className="subheader-sub-text">Login</div>
          </div>
        </button>
        <button className="subheader-register-btn">
          <div className="subheader-text">
            <div>
              <span class="material-icons subheader-icon">person</span>
            </div>
            <div className="subheader-sub-text">Register</div>
          </div>
        </button>
        <button className="subheader-bonus">
          <div className="subheader-text">
            <div>
              <span class="material-icons subheader-icon">local_offer</span>
            </div>
            <div className="subheader-sub-text">Welcome bonus upto 7 BTC!</div>
          </div>
        </button>
      </div>
      {/* <div className="subheader-strip">
       <button className="subheader-payment">Payments</button>
     </div> */}
    </div>
  );
}

export default SubHeader;
