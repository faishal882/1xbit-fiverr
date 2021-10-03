import React, { useEffect, useState } from "react";
import "../CSS/Header.css";
import { Link } from "react-router-dom";
import Logo from "../static/Logo.svg";
import MobileMenu from "./MobileMenu";
import { useStateValue } from "./StateProvider";

function Header(props) {
  const [size, setSize] = useState(window.innerWidth);
  const [{ betcards }, dispatch] = useStateValue();

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <div className="header">
      {console.log(dispatch)}
      <div className="header-logo">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
      </div>
      {size >= 940 ? (
        <div className="nav-links">
          <nav>
            <ul>
              <li>
                <Link to="/sports/" className="link">
                  SPORTS
                </Link>
              </li>
              <li>
                <Link to="/live/" className="link">
                  LIVE
                </Link>
              </li>
              <li>
                <Link to="/esports/" className="link">
                  ESPORTS
                </Link>
              </li>
              <li>
                <Link to="/bonuses/" className="link">
                  BONUSES
                </Link>
              </li>
              <li>
                <Link to="/slots/" className="link">
                  SLOTS
                </Link>
              </li>
              <li>
                <Link to="/live-casino/" className="link">
                  LIVECASINO
                </Link>
              </li>
              <li>
                <Link to="/1xgame/" className="link">
                  1XGAME
                </Link>
              </li>
              <li>
                <Link to="/toto/" className="link">
                  TOTO
                </Link>
              </li>
              <li>
                <Link to="/extra/" className="link">
                  EXTRA
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div className="header-mobile-menu">
          <Link to="/bets/" className="header-mobile-menu-button">
            <span class="material-icons login-icon">local_grocery_store</span>
            {betcards.length > 0 ? <span className="betcounter">{betcards.length}</span> : null}
          </Link>
          <button className="header-mobile-menu-button">
            <span class="material-icons login-icon">login</span>
          </button>
          <MobileMenu />
        </div>
      )}
    </div>
  );
}

export default Header;
