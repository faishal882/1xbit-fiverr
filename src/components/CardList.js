import React from "react";
import "../CSS/CardList.css";
import Card from "./Card";
import CardLeague from "./CardLeague";
import CardBig from "./CardBig";

import SportsImg from "../static/Live.jpg";
import LiveImg from "../static/Sports.jpg";
import TotoImg from "../static/Toto.jpg";
import CasinoImg from "../static/Casino.jpg";
import LeagueImg from "../static/Leagues.jpg";
import GamesImg from "../static/Games.jpg";
import SlotsImg from "../static/Slots.jpg";
import VirtualSportImg from "../static/VirtualSport.jpg";

function CardList(props) {
  return (
    <>
      <div className="cardlist">
        <Card
          background={SportsImg}
          header="Sports"
          text="A wide selection of events"
          link="/sports/"
        />
        <Card
          background={LiveImg}
          header="Live"
          text="Live events with high odds"
          link="/live/"
        />
        {props.size >= 940 ? <CardLeague background={LeagueImg} /> : null}
      </div>
      {props.size < 940 ? (
        <div className="cardlist">
          <CardBig
            background={GamesImg}
            header="Games"
            text="Earn free spins and bonuses"
            link="/1xgame/"
          />
        </div>
      ) : null}
      <div className="cardlist">
        <Card
          background={TotoImg}
          header="Toto"
          text="Dont miss your TOTO jackpot"
          link="/toto/"
        />
        <Card
          background={CasinoImg}
          header="Live Casino"
          text="Live casino with best dealers"
          link="/live-casino/"
        />
        {props.size >= 940 ? (
          <CardBig
            background={GamesImg}
            header="Games"
            text="Earn free spins and bonuses"
            link="/1xgame/"
          />
        ) : null}
      </div>
      <div className="cardlist">
        <CardBig
          background={SlotsImg}
          header="Slots"
          text="Try your luck in slots"
          link="/slots/"
        />
        {props.size >= 940 ? (
          <CardBig
            background={VirtualSportImg}
            header="Virtual Sports"
            text="Enjoy virtual sports betting"
            link="/esports/"
          />
        ) : null}
      </div>
      {props.size < 940 ? (
        <div className="cardlist">
          <CardBig
            background={VirtualSportImg}
            header="Virtual Sports"
            text="Enjoy virtual sports betting"
            link="/esports/"
          />
        </div>
      ) : null}
    </>
  );
}

export default CardList;
