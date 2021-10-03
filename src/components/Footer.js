import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-flex">
        <div className="footer-1xbit">
          <p className="footer-header">1xbit</p>
          <div className="footer-sublinks">
            <ul className="footer-list">
              <li className="footer-list-link">
                <Link link to="/" className="footer-sublinks-link">
                  About as
                </Link>
              </li>
              <li>
                <Link link to="/" className="footer-sublinks-link">
                  Contact us
                </Link>
              </li>
              <li className="footer-list-link">
                <Link link to="/" className="footer-sublinks-link">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link link to="/" className="footer-sublinks-link">
                  Blog
                </Link>
              </li>
              <li className="footer-list-link">
                <Link link to="/" className="footer-sublinks-link">
                  terms and conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-betting">
          <p className="footer-header">betting</p>
          <div className="footer-sublinks">
            <ul className="footer-list">
              <li className="footer-list-link">
                <Link link to="/" className="footer-sublinks-link">
                  Sports
                </Link>
              </li>
              <li>
                <Link link to="/" className="footer-sublinks-link">
                  Multi-live
                </Link>
              </li>
              <li className="footer-list-link">
                <Link link to="/" className="footer-sublinks-link">
                  Live
                </Link>
              </li>
              <li>
                <Link link to="/" className="footer-sublinks-link">
                  Live casino
                </Link>
              </li>
              <li className="footer-list-link">
                <Link link to="/" className="footer-sublinks-link">
                  toto
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-games">
          <p className="footer-header">games</p>
          <div className="footer-sublinks">
            <ul className="footer-list">
              <li className="footer-list-link">
                <Link link to="/" className="footer-sublinks-link">
                  Slots
                </Link>
              </li>
              <li>
                <Link link to="/" className="footer-sublinks-link">
                  1xGAMES
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-links">
          <p className="footer-header">links</p>
          <div className="footer-sublinks">
            <ul className="footer-list">
              <li className="footer-list-link">
                <Link link to="/" className="footer-sublinks-link">
                  Payment methods
                </Link>
              </li>
              <li className="footer-list-link">
                <Link link to="/" className="footer-sublinks-link">
                  Bet slip check
                </Link>
              </li>
              <li className="footer-list-link">
                <Link link to="/" className="footer-sublinks-link">
                  Bet slip check
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {props.size >= 940 ? (
          <div className="footer-apps">
            <p className="footer-header">apps</p>
            <div className="footer-sublinks">
              <ul className="footer-list">
                <li className="footer-list-link">
                  <Link link to="/" className="footer-sublinks-link">
                    iOS
                  </Link>
                </li>
                <li>
                  <Link link to="/" className="footer-sublinks-link">
                    Android
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Footer;
