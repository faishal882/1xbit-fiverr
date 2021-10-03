import React from "react";
import TotoCard from "./TotoCard";
import TotoBig from "./TotoBig";
import "../CSS/TotoList.css";

import Toto1 from "../static/toto1.jpg";
import Toto2 from "../static/toto2.jpg";
import Toto3 from "../static/toto3.jpg";
import Toto4 from "../static/toto4.jpg";
import Toto5 from "../static/toto5.jpg";
import Toto6 from "../static/toto6.jpg";
import Totobig from "../static/totobig.jpg";

function TotoList(props) {
  return (
    <>
      <div className="toto">
        {props.size >= 940 ? (
          <TotoBig background={Totobig} header="TOTO 15" />
        ) : null}
        <div className="totosmall">
          <div className="totolist">
            <TotoCard background={Toto1} header="CORRECT SCORE" />
            <TotoCard background={Toto2} header="FOOTBALL" />
          </div>
          <div className="totolist">
            <TotoCard background={Toto3} header="JACKPOT" />
            <TotoCard background={Toto4} header="ICE HOCKEY" />
          </div>
          <div className="totolist">
            <TotoCard background={Toto5} header="ESPORT FIFA" />
            <TotoCard background={Toto6} header="BASKETBALL" />
          </div>
        </div>
      </div>
      {props.size <= 940 ? (
        <TotoBig background={Totobig} header="TOTO 15" />
      ) : null}
    </>
  );
}

export default TotoList;
