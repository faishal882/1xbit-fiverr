import React, { useState, useEffect } from "react";
import "../CSS/LiveBetsCard.css";

import { useStateValue } from "./StateProvider";

function TrialBetCard() {
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
    <>
      <div className="league">
        <div className="league-name">IPL</div>
        <div className="league-odd-name">
          <div className="league-odd-name-text">1</div>
          <div className="league-odd-name-text">x</div>
          <div className="league-odd-name-text">2</div>
        </div>
        {size >= 940 ? (
          <div className="league-odd-name">
            <div className="league-odd-name-text">1x</div>
            <div className="league-odd-name-text">12</div>
            <div className="league-odd-name-text">2x</div>
          </div>
        ) : null}
      </div>

      <LeagueDetails size={size} />
    </>
  );
}

const LeagueDetails = (props) => {
  const [more, setMore] = useState("");

  const [{ betcard }, dispatch] = useStateValue();

  const addBetSlip = (id, odds, betDes) => {
    //dispatch item into the data layer
    console.log(betcard);
    dispatch({
      type: "ADD_BETSLIP",
      item: {
        id: id,
        Matchtitle: "IPL",
        Hometeam: "KKR",
        Awayteam: "CSK",
        odds: odds,
        betDes: betDes,
      },
    });
  };

  const moreShow = () => {
    if (more === "") {
      setMore("show");
    } else {
      setMore("");
    }
  };

  return (
    <>
      <div className="league-details">
        <div className="league-match">
          <div className="league-team">
            <div className="league-team-name">KKR</div>
            <div className="league-team-score"></div>
          </div>
          <div className="league-team">
            <div className="league-team-name">CSK</div>

            <div className="league-team-score"></div>
          </div>
          <div className="league-match-status"></div>
          <button className={`league-more ${more}`} onClick={moreShow}>
            +More
          </button>
        </div>
        <div className="league-odd">
          <div
            className="league-odd-number"
            onClick={() => addBetSlip(1, 5, "KKR Wins")}
          >
            5
          </div>
          <div
            className="league-odd-number"
            onClick={() => addBetSlip(2, 3, "Match Draw")}
          >
            3
          </div>
          <div
            className="league-odd-number"
            onClick={() => addBetSlip(3, 2, "CSK Wins")}
          >
            2
          </div>
        </div>
        {props.size >= 940 ? (
          <div className="league-odd">
            <div
              className="league-odd-number"
              onClick={() => addBetSlip(4, 3, "KKR Wins / Draw")}
            >
              3
            </div>

            <div
              className="league-odd-number"
              onClick={() => addBetSlip(5, 4, "KKR Wins / CSK Wins")}
            >
              4
            </div>
            <div
              className="league-odd-number"
              onClick={() => addBetSlip(6, 2.8, "CSK Wins / Draw")}
            >
              2.8
            </div>
          </div>
        ) : null}
      </div>
      <div className="livebets-more">{more === "show" ? <More /> : null}</div>
    </>
  );
};

const More = (props) => {
  const [moreOdd, setMoreOdd] = useState("");

  const moreShow = () => {
    if (moreOdd === "") {
      setMoreOdd("show-odd");
    } else {
      setMoreOdd("");
    }
  };
  return (
    <>
      <div className="livebets-nam">
        <div className="livebets-name">
          <div>Asian Handicap</div>
          <button className="odds-more-button" onClick={moreShow}>
            +More
          </button>
        </div>
      </div>
    </>
  );
};

export default TrialBetCard;
