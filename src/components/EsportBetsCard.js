import React, { useState, useEffect } from "react";

import "../CSS/LiveBetsCard.css";

function EsportBetsCard(props) {
  const [data, setData] = useState("");

  useEffect(() => {
    setData({ matches: props.matches });
  }, [props.matches]);

  return (
    <>
      <div className="league">
        <div className="league-name">
          {props.name}: {props.type}
        </div>
        <div className="league-odd-name">
          <div className="league-odd-name-text">1</div>
          <div className="league-odd-name-text">x</div>
          <div className="league-odd-name-text">2</div>
        </div>
        <div className="league-odd-name">
          <div className="league-odd-name-text">1x</div>
          <div className="league-odd-name-text">12</div>
          <div className="league-odd-name-text">2x</div>
        </div>
      </div>

      {data.matches
        ? data.matches.map((match) => {
            return <LeagueDetails key={match.id} {...match} />;
          })
        : null}
    </>
  );
}

const LeagueDetails = (props) => {
  const [more, setMore] = useState("");
  

  const moreShow = () => {
    if (more === "") {
      setMore("show");
    } else {
      setMore("");
    }
  };

  let localteam = null;
  for (const i in props) {
    if (i === "localteam") {
      localteam = props.localteam.name;
    }
    if (i === "player_1") {
      localteam = props.player_1.name;
    }
  }

  let visitorteam = null;
  for (const i in props) {
    if (i === "awayteam") {
      visitorteam = props.awayteam.name;
    }
    if (i === "visitorteam") {
      visitorteam = props.visitorteam.name;
    }
    if (i === "player_2") {
      visitorteam = props.player_2.name;
    }
  }

  let odd = null;
  if (props.odds !== null) {
    odd = props.odds.filter((odd) => {
      return odd.value === "Match Winner" || "Home/Away" || "3Way Result";
    });
  }

  let HomeWin = null;
  if (odd !== null) {
    HomeWin =
      odd.length > 0 &&
      odd["0"].bookmakers["0"].odds.filter((odds) => {
        return odds.name === "Home";
      });
  }

  let AwayWin = null;
  if (odd !== null) {
    AwayWin =
      odd.length > 0 &&
      odd["0"].bookmakers["0"].odds.filter((odds) => {
        return odds.name === "Away";
      });
  }

  let Draw = null;
  if (odd !== null) {
    Draw =
      odd.length > 0 &&
      odd["0"].bookmakers["0"].odds.filter((odds) => {
        return odds.name === "Draw";
      });
  }

  let DoubleChance = null;
  if (props.odds !== null) {
    DoubleChance = props.odds.filter((odd) => {
      return odd.value === "Double Chance";
    });
  }

  let HomeDraw = null;
  if (DoubleChance !== null) {
    HomeDraw =
      DoubleChance.length > 0 &&
      DoubleChance["0"].bookmakers["0"].odds.filter((odds) => {
        return odds.name === "Home/Draw";
      });
  }

  let HomeAway = null;
  if (DoubleChance !== null) {
    HomeAway =
      DoubleChance.length > 0 &&
      DoubleChance["0"].bookmakers["0"].odds.filter((odds) => {
        return odds.name === "Home/Away";
      });
  }

  let AwayDraw = null;
  if (DoubleChance !== null) {
    AwayDraw =
      DoubleChance.length > 0 &&
      DoubleChance["0"].bookmakers["0"].odds.filter((odds) => {
        return odds.name === "Draw/Away";
      });
  }

  return (
    <>
      <div className="league-details">
        <div className="league-match">
          <div className="league-team">
            <div className="league-team-name">{localteam}</div>
            <div className="league-team-score"></div>
          </div>
          <div className="league-team">
            <div className="league-team-name">{visitorteam}</div>

            <div className="league-team-score"></div>
          </div>
          <div className="league-match-status">{props.status}</div>
          <button className={`league-more ${more}`} onClick={moreShow}>
            +More
          </button>
        </div>
        <div className="league-odd">
          <div className="league-odd-number">
            {HomeWin.length > 0 ? HomeWin["0"].value : "-"}
          </div>
          <div className="league-odd-number">
            {Draw.length > 0 ? Draw["0"].value : "-"}
          </div>
          <div className="league-odd-number">
            {AwayWin.length > 0 ? AwayWin["0"].value : "-"}
          </div>
        </div>
        <div className="league-odd">
          <div className="league-odd-number">
            {HomeDraw.length > 0 ? HomeDraw["0"].value : "-"}
          </div>

          <div className="league-odd-number">
            {HomeAway.length > 0 ? HomeAway["0"].value : "-"}
          </div>
          <div className="league-odd-number">
            {AwayDraw.length > 0 ? AwayDraw["0"].value : "-"}
          </div>
        </div>
      </div>
      <div className="livebets-more">
        {more === "show"
          ? props.odds.map((odds) => {
              return <More key={odds.id} {...odds} />;
            })
          : null}
      </div>
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
          <div>{props.value}</div>
          <button className="odds-more-button" onClick={moreShow}>
            +More
          </button>
        </div>

        {moreOdd === "show-odd"
          ? props.bookmakers["0"].odds.map((odds, index) => {
              return (
                <div className="odds-more" key={index}>
                  <div className="odds-more-name">{odds.name}</div>
                  <div className="odds-more-value">{odds.value}</div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default EsportBetsCard;
