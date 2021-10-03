import React from "react";
import {Link} from "react-router-dom"
import "../CSS/Card.css";

function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${props.background})`,
        backgroundSize: "cover",
      }}
    >
      <h4 className="card-header">{props.header}</h4>
      <div className="card-link">
        <Link to={props?.link} className="card-btn">
          Play
        </Link>
      </div>
      <p className="card-text">{props.text}</p>
    </div>
  );
}

export default Card;
