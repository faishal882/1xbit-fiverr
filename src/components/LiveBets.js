import React, { useState } from "react";
import TrialBetCard from "./TrialBetCard";
// import axios from "axios";

import "../CSS/LiveBets.css";
import BetsSection from "./BetsSection";
import SportsList from "./SportsList";

function LiveBets(props) {
  const [apiEndpoint, setApiEndpoint] = useState("");

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
            {[1, 2, 3, 4, 5].map((evnt) => {
              return <TrialBetCard />;
            })}
          </div>
        </container>
        {props.size >= 940 ? <BetsSection /> : null}
      </container>
    </div>
  );
}

export default LiveBets;
