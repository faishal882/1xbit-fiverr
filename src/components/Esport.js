import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/LiveBets.css";
import { BET_API_URL } from "./utils";
import BetsSection from "./BetsSection";
import EsportBetsCard from "./EsportBetsCard";
import TrialBetCard from "./TrialBetCard";

function Esport(props) {
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
        alert(err.message);
      });
  }, []);

  return (
    <div>
      <container className="livebets-flex">
        <container className="livebets">
          <div className="livebets-header">E-SPORTS</div>
          <div className="livebets-sports">
            <button className="sport-options-button">
              <div className="sport-options-text">
                <div>
                  <span class="material-icons sport-icon">sports_esports</span>
                </div>
                <div className="sport-sub-text">Esport</div>
              </div>
            </button>
          </div>
          <div className="livebets-matches">
            {data.events
              ? data.events.map((event) => {
                  return <EsportBetsCard key={event.gid} {...event} />;
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

export default Esport;
