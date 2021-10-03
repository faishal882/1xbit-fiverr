import React, { useEffect, useState } from "react";
import "../CSS/Slider.css";
import Registration from "./Registration";

function Slider(props) {
  const [size, setSize] = useState(window.innerWidth);
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
    <div className="slider">
      <container className="slider-container">
        {size >= 940 ? <Registration /> : null}
      </container>
    </div>
  );
}

export default Slider;
