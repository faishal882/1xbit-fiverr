import React from "react";
import {Link} from "react-router-dom"
import "../CSS/CardBig.css";

function CardBig(props) {
  return (
    <div
      className="cardbig"
      style={{
        backgroundImage: `url(${props.background})`,
        backgroundSize: "cover",
      }}
    >
      <h4 className="cardbig-header">{props.header}</h4>
      <div className="cardbig-link">
        <Link to={props?.link} className="cardbig-btn">
          Play
        </Link>
      </div>
      <p className="cardbig-text">{props.text}</p>
    </div>
  );
}

export default CardBig;
