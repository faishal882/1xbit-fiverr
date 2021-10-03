import React, { useRef } from "react";
import "../CSS/SportsList.css";

function SportsList(props) {
  const refContainer = useRef(null);

  const Slide = (direction) => {
    if (direction === "left") {
      refContainer.current.scrollLeft -= 70;
    } else {
      refContainer.current.scrollLeft += 70;
    }
  };

  return (
    <>
      <container className="container-sports">
        <div className="btn-div">
          <button
            className="btn-previous btn-scroll"
            onClick={() => {
              Slide("left");
            }}
          >
            <i className="arrow left"></i>
          </button>
        </div>
        <div className="sport-options" ref={refContainer}>
          <button
            className="sport-options-button"
            onClick={(e) => props.setApiEndpoint("soccer")}
          >
            <div className="sport-options-text">
              <div>
                <span class="material-icons sport-icon">sports_soccer</span>
              </div>
              <div className="sport-sub-text">soccer</div>
            </div>
          </button>
          <button
            className="sport-options-button"
            onClick={(e) => props.setApiEndpoint("cricket")}
          >
            <div className="sport-options-text">
              <div>
                <span class="material-icons sport-icon">sports_cricket</span>
              </div>
              <div className="sport-sub-text">cricket</div>
            </div>
          </button>
          <button
            className="sport-options-button"
            onClick={(e) => props.setApiEndpoint("basket")}
          >
            <div className="sport-options-text">
              <div>
                <span class="material-icons sport-icon">sports_basketball</span>
              </div>
              <div className="sport-sub-text">basketball</div>
            </div>
          </button>
          <button
            className="sport-options-button"
            onClick={(e) => props.setApiEndpoint("tennis")}
          >
            <div className="sport-options-text">
              <div>
                <span class="material-icons sport-icon">sports_tennis</span>
              </div>
              <div className="sport-sub-text">tennis</div>
            </div>
          </button>
          <button
            className="sport-options-button"
            onClick={(e) => props.setApiEndpoint("hockey")}
          >
            <div className="sport-options-text">
              <div>
                <span class="material-icons sport-icon">sports_hockey</span>
              </div>
              <div className="sport-sub-text">hockey</div>
            </div>
          </button>
          <button
            className="sport-options-button"
            onClick={(e) => props.setApiEndpoint("handball")}
          >
            <div className="sport-options-text">
              <div>
                <span class="material-icons sport-icon">sports_handball</span>
              </div>
              <div className="sport-sub-text">handball</div>
            </div>
          </button>
          <button
            className="sport-options-button"
            onClick={(e) => props.setApiEndpoint("volleyball")}
          >
            <div className="sport-options-text">
              <div>
                <span class="material-icons sport-icon">sports_volleyball</span>
              </div>
              <div className="sport-sub-text">volleyball</div>
            </div>
          </button>
          <button
            className="sport-options-button"
            onClick={(e) => props.setApiEndpoint("football")}
          >
            <div className="sport-options-text">
              <div>
                <span class="material-icons sport-icon">sports_football</span>
              </div>
              <div className="sport-sub-text">football</div>
            </div>
          </button>
          <button
            className="sport-options-button"
            onClick={(e) => props.setApiEndpoint("baseball")}
          >
            <div className="sport-options-text">
              <div>
                <span class="material-icons sport-icon">sports_baseball</span>
              </div>
              <div className="sport-sub-text">baseball</div>
            </div>
          </button>
          <button
            className="sport-options-button"
            onClick={(e) => props.setApiEndpoint("rugby")}
          >
            <div className="sport-options-text">
              <div>
                <span class="material-icons sport-icon">sports_rugby</span>
              </div>
              <div className="sport-sub-text">rugby</div>
            </div>
          </button>
          <button
            className="sport-options-button"
            onClick={(e) => props.setApiEndpoint("rugbyleague")}
          >
            <div className="sport-options-text">
              <div>
                <span class="material-icons sport-icon">sports_rugby</span>
              </div>
              <div className="sport-sub-text">rugbyleague</div>
            </div>
          </button>
          <button
            className="sport-options-button"
            onClick={(e) => props.setApiEndpoint("boxing")}
          >
            <div className="sport-options-text">
              <div>
                <span class="material-icons sport-icon">sports_kabaddi</span>
              </div>
              <div className="sport-sub-text">boxing</div>
            </div>
          </button>
          <button
            className="sport-options-button"
            onClick={(e) => props.setApiEndpoint("esports")}
          >
            <div className="sport-options-text">
              <div>
                <span class="material-icons sport-icon">sports_esports</span>
              </div>
              <div className="sport-sub-text">esport</div>
            </div>
          </button>
          <button
            className="sport-options-button"
            onClick={(e) => props.setApiEndpoint("futsal")}
          >
            <div className="sport-options-text">
              <div>
                <span class="material-icons sport-icon">support</span>
              </div>
              <div className="sport-sub-text">futsal</div>
            </div>
          </button>
          <button
            className="sport-options-button"
            onClick={(e) => props.setApiEndpoint("mma")}
          >
            <div className="sport-options-text">
              <div>
                <span class="material-icons sport-icon">sports_mma</span>
              </div>
              <div className="sport-sub-text">mma</div>
            </div>
          </button>
          <button
            className="sport-options-button"
            onClick={(e) => props.setApiEndpoint("table_tennis")}
          >
            <div className="sport-options-text">
              <div>
                <span class="material-icons sport-icon">settings_overscan</span>
              </div>
              <div className="sport-sub-text">tabletennis</div>
            </div>
          </button>
          <button
            className="sport-options-button"
            onClick={(e) => props.setApiEndpoint("golf")}
          >
            <div className="sport-options-text">
              <div>
                <span class="material-icons sport-icon">sports_golf</span>
              </div>
              <div className="sport-sub-text">golf</div>
            </div>
          </button>
          <button
            className="sport-options-button"
            onClick={(e) => props.setApiEndpoint("darts")}
          >
            <div className="sport-options-text">
              <div>
                <span class="material-icons sport-icon">radar</span>
              </div>
              <div className="sport-sub-text">darts</div>
            </div>
          </button>
        </div>
        <div>
          <button
            className="btn-next btn-scroll"
            onClick={() => {
              Slide("right");
            }}
          >
            <i className="arrow right"></i>
          </button>
        </div>
      </container>
    </>
  );
}

export default SportsList;
