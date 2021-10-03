import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/LiveBets.css";

import BetsSection from "./BetsSection";
import EsportBetsCard from "./EsportBetsCard";
import TrialBetCard from "./TrialBetCard";

function Esport(props) {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://www.goalserve.com/getfeed/9055300f90874db37f7808d96de6b81a/getodds/soccer?cat=esports_10&ts=${1631638400}&bm=105&json=1`
      )
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
            {data.events ? (
              data.events.map((event) => {
                return <EsportBetsCard key={event.gid} {...event} />;
              })
            ) : (
              <TrialBetCard />
            )}
          </div>

          <div className="livebets-matches"></div>
        </container>
        {props.size >= 940 ? <BetsSection /> : null}
      </container>
    </div>
  );
}

export default Esport;
