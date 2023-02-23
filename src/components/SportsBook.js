import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/LiveBets.css";
import { BET_API_URL } from "./utils";
import BetsSection from "./BetsSection";
import SportsList from "./SportsList";
import SportsBookBetsCard from "./SportsBookBetsCard";
import TrialBetCard from "./TrialBetCard";

function SportsBook(props) {
  const [apiEndpoint, setApiEndpoint] = useState("soccer");
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(BET_API_URL)
      .then((res) => {
        console.log(res.data.scores);
        setData({ events: res.data.scores.categories });
      })
      .catch((err) => {
        console.log(err);
        alert("DUMMY DATA");
      });
  }, [data, apiEndpoint]);

  return (
    <div>
      <container className="livebets-flex">
        <container className="livebets">
          <div className="livebets-header">SPORTS BOOK</div>
          <div className="livebets-sports">
            <SportsList setApiEndpoint={setApiEndpoint} />
            {console.log(apiEndpoint)}
          </div>
          <div className="livebets-matches">
            {data.events
              ? data.events.map((event) => {
                  return <SportsBookBetsCard key={event.gid} {...event} />;
                })
              : [1, 2, 3, 4, 5].map((evnt) => {
                  return <TrialBetCard />;
                })}
          </div>

          <div className="livebets-matches"></div>
        </container>
        {props.size >= 940 ? <BetsSection /> : null}
      </container>
    </div>
  );
}

export default SportsBook;
