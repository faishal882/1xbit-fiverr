import React, { useState } from "react";
import axios from "axios";
import "../CSS/BetsSection.css";

import { useStateValue } from "./StateProvider";
import { getOddsTotal } from "./reducer";

function BetsSection(props) {
  const [stake, setStake] = useState("");
  const [{ betcards }, dispatch] = useStateValue();

  var OverallOdds = getOddsTotal(betcards);
  let BetDescription = null;
  if (betcards !== null) {
    BetDescription = betcards.map((bet_des) => {
      return bet_des.betDes;
    });
  }

  const removeBetSlip = (id) => {
    //dispatch item into the data layer
    dispatch({
      type: "REMOVE_BETSLIP",
      id: id,
    });
  };

  const handlePlaceBet = (e) => {
    e.preventDefault();
    if (betcards.length === 1) {
      if (betcards.length !== 0 && stake > 0.01) {
        if (OverallOdds < 150) {
          axios
            .post("https://betting-1xbit.herokuapp.com/place-bet/single-bet/", {
              fixture:
                betcards["0"].Matchtitle +
                ": " +
                betcards["0"].Hometeam +
                "-" +
                betcards["0"].Awayteam,
              bet_amount: stake,
              odds: OverallOdds,
              bet_description: betcards["0"].betDes,
              bet_result: 2,
            })
            .then((res) => {
              alert(res.data.response || res.data.bet_amount["0"]);
              setStake("");
              dispatch({
                type: "EMPTY_BETSLIP",
              });
            })
            .catch((err) => {
              alert(err.message);
            });
        } else {
          alert("Please Keep Overall Bet Less than 150");
        }
      } else {
        alert("Please Select a bet and Fill the Stake");
      }
    } else {
      if (betcards.length !== 1 && stake > 0.01) {
        if (OverallOdds < 150) {
          axios
            .post("https://betting-1xbit.herokuapp.com/place-bet/multi-bet/", {
              fixture: JSON.stringify(betcards),
              bet_amount: stake,
              odds: OverallOdds,
              bet_description: JSON.stringify(BetDescription),
              bet_result: 2,
            })
            .then((res) => {
              alert(res.data.response || res.data.bet_amount["0"]);
              setStake("");
              dispatch({
                type: "EMPTY_BETSLIP",
              });
            })
            .catch((err) => {
              alert(err.message);
            });
        } else {
          alert("Please Keep Overall Bet Less than 150");
        }
      } else {
        alert("Please Select a bet and Fill the Stake");
      }
    }
  };

  return (
    <container className="bets-section">
      <div className="betslip">
        <div className="betslip-options">
          <button className="betslip-option-btn1">Bet slip</button>
          <button className="betslip-option-btn2">My Bets</button>
        </div>

        {betcards.length > 0 ? (
          betcards.map((betslips) => {
            return (
              <>
                <div className="betslip-card" key={betslips.id}>
                  <div className="betslip-card-flex">
                    <div className="betslip-matchname">
                      {betslips.Matchtitle}
                    </div>
                    <button
                      className="betslip-remove"
                      onClick={() => removeBetSlip(betslips.id)}
                    >
                      remove
                    </button>
                  </div>
                  <div className="betslip-team">{betslips.Hometeam}</div>

                  <div className="betslip-team">{betslips.Awayteam}</div>
                  <div className="betslip-card-flex">
                    <div className="betslip-bet-description">
                      {betslips.betDes}
                    </div>
                    <div className="betslip-card-odds">{betslips.odds}</div>
                  </div>
                </div>
              </>
            );
          })
        ) : (
          <div className="betslip-remove-description">
            Add events to the bet slip or enter a code to load events
          </div>
        )}
        {betcards.length > 0 && (
          <div className="betslip-content">
            <div className="betslip-content-flex">
              <div className="betslip-overall-odds">Overall odds</div>
              <div className="betslip-odds">{OverallOdds}</div>
            </div>
            <div className="betslip-content-flex">
              <div className="betslip-stake">Stake</div>
              <input
                type="number"
                className="betslip-input"
                value={stake}
                onChange={(e) => setStake(e.target.value)}
              />
            </div>
            <div className="betslip-content-flex">
              <div className="betslip-wining">Potential winnings</div>
              <div className="betslip-wining-amount">{stake * OverallOdds}</div>
            </div>
          </div>
        )}
        <button className="placebet-btn" onClick={handlePlaceBet}>
          Place bet
        </button>
      </div>
    </container>
  );
}

export default BetsSection;
