import React, { useState } from "react";
// import axios from "axios";

import "../CSS/LiveBets.css";
import BetsSection from "./BetsSection";
import SportsList from "./SportsList";
import LiveBetsCard from "./LiveBetsCard";

function LiveBets(props) {
  const [apiEndpoint, setApiEndpoint] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://www.goalserve.com/getfeed/9055300f90874db37f7808d96de6b81a/soccernew/inplay-mapping?json=1"
  //     )
  //     .then((res) => {
  //       setOdd({ odds: res.data.mappings.match });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert(err.message);
  //     });
  // }, []);

  // let pregameid = null;
  // if (odd.odds !== null) {
  //   pregameid =
  //     odd.odds &&
  //     odd.odds.map((odds) => {
  //       return (pregameid = odds["@pregame_match_id"]);
  //     });
  // }

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://www.goalserve.com/getfeed/9055300f90874db37f7808d96de6b81a/getodds/soccer?cat=soccer_10&match=4006025&ts=1631638400&json=1`
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert(err.message);
  //     });
  // }, []);

  return (
    <div>
      <container className="livebets-flex">
        <container className="livebets">
          <div className="livebets-header">LIVE BETS</div>
          <div className="livebets-sports">
            <SportsList setApiEndpoint={setApiEndpoint} />
            {console.log(apiEndpoint)}
          </div>
          <div className="livebets-matches">
            <LiveBetsCard />
            <LiveBetsCard />
            <LiveBetsCard />
            <LiveBetsCard />
            <LiveBetsCard />
            <LiveBetsCard />
          </div>
        </container>
        {props.size >= 940 ? <BetsSection /> : null}
      </container>
    </div>
  );
}

export default LiveBets;
