import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/LiveBets.css";

import BetsSection from "./BetsSection";
import SportsList from "./SportsList";
import SportsBookBetsCard from "./SportsBookBetsCard";

function SportsBook(props) {
  const [apiEndpoint, setApiEndpoint] = useState("soccer");
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://www.goalserve.com/getfeed/9055300f90874db37f7808d96de6b81a/getodds/soccer?cat=${apiEndpoint}_10&ts=${1631638400}&bm=105&json=1`
      )
      .then((res) => {
        console.log(res.data.scores);
        setData({ events: res.data.scores.categories });
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
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
            {data.events ? (
              data.events.map((event) => {
                return <SportsBookBetsCard key={event.gid} {...event} />;
              })
            ) : (
              <p>Loading.....</p>
            )}
          </div>

          <div className="livebets-matches"></div>
        </container>
        {props.size >= 940 ? <BetsSection /> : null}
      </container>
    </div>
  );
}

export default SportsBook;
