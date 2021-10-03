import React from "react";
import { Link } from "react-router-dom";

import "../CSS/MobileMenu.css";

function MobileMenu() {
  const openNav = () => {
    console.log("hello");
    document.getElementById("my-mobile-menu").style.width = "60%";
  };

  const closeNav = () => {
    document.getElementById("my-mobile-menu").style.width = "0";
  };

  return (
    <>
      <div id="my-mobile-menu" className="mobile-menu">
        <button className="side-menu-close" onClick={closeNav}>
          &times;
        </button>
        <div className="mobile-menu-links">
          <nav>
            <ul className="mobile-menu-ul">
              <li>
                <Link to="/sports/" className="mobile-link">
                  SPORTS
                </Link>
              </li>
              <li>
                <Link to="/live/" className="mobile-link">
                  LIVE
                </Link>
              </li>
              <li>
                <Link to="/esports/" className="mobile-link">
                  ESPORTS
                </Link>
              </li>
              <li>
                <Link to="/bonuses/" className="mobile-link">
                  BONUSES
                </Link>
              </li>
              <li>
                <Link to="/slots/" className="mobile-link">
                  SLOTS
                </Link>
              </li>
              <li>
                <Link to="/live-casino/" className="mobile-link">
                  LIVECASINO
                </Link>
              </li>
              <li>
                <Link to="/1xgame/" className="mobile-link">
                  1XGAME
                </Link>
              </li>
              <li>
                <Link to="/toto/" className="mobile-link">
                  TOTO
                </Link>
              </li>
              <li>
                <Link to="/extra/" className="mobile-link">
                  EXTRA
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <button className="side-menu-open" onClick={openNav}>
        <span class="material-icons login-icon">notes</span>
      </button>
    </>
  );
}

export default MobileMenu;
