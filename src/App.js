import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SubHeader from "./components/SubHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubFooter from "./components/SubFooter";
import Slider from "./components/Slider";
import CardList from "./components/CardList";
import LiveBets from "./components/LiveBets";
import SportsBook from "./components/SportsBook";
import Esport from "./components/Esport";
import TotoList from "./components/TotoList";
import BetsSection from "./components/BetsSection";
import ComingSoon from "./components/ComingSoon";

function App(props) {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {size >= 940 ? <SubHeader /> : null}
            <Header />
            <Slider />
            <CardList size={size} />
            <Footer size={size} />
            <SubFooter />
          </Route>
          <Route exact path="/sports/">
            {size >= 940 ? <SubHeader /> : null}
            <Header />
            <SportsBook size={size} />
            <Footer size={size} />
            <SubFooter />
          </Route>
          <Route exact path="/esports/">
            {size >= 940 ? <SubHeader /> : null}
            <Header />
            <Esport size={size} />
            <Footer size={size} />
            <SubFooter />
          </Route>
          <Route exact path="/live/">
            {size >= 940 ? <SubHeader /> : null}
            <Header />
            <LiveBets size={size} />
            <Footer size={size} />
            <SubFooter />
          </Route>
          <Route exact path="/toto/">
            {size >= 940 ? <SubHeader /> : null}
            <Header />
            <TotoList size={size} />
            <Footer size={size} />
            <SubFooter />
          </Route>
          <Route exact path="/bets/">
            {size <= 940 ? (
              <>
                <Header />
                <BetsSection />
                <Footer size={size} />
                <SubFooter />
              </>
            ) : (
              <>
                <SubHeader />
                <Header />
                <SportsBook size={size} />
                <Footer size={size} />
                <SubFooter />
              </>
            )}
          </Route>
          {/* Link not Completed */}
          <Route exact path="/live-casino/">
            {size >= 940 ? <SubHeader /> : null}
            <Header />
            <ComingSoon />
            <Footer size={size} />
            <SubFooter />
          </Route>
          <Route exact path="/live-casino/">
            {size >= 940 ? <SubHeader /> : null}
            <Header />
            <ComingSoon />
            <Footer size={size} />
            <SubFooter />
          </Route>
          <Route exact path="/bonuses/">
            {size >= 940 ? <SubHeader /> : null}
            <Header />
            <ComingSoon />
            <Footer size={size} />
            <SubFooter />
          </Route>
          <Route exact path="/slots/">
            {size >= 940 ? <SubHeader /> : null}
            <Header />
            <ComingSoon />
            <Footer size={size} />
            <SubFooter />
          </Route>
          <Route exact path="/1xgame/">
            {size >= 940 ? <SubHeader /> : null}
            <Header />
            <ComingSoon />
            <Footer size={size} />
            <SubFooter />
          </Route>
          <Route exact path="/extra/">
            {size >= 940 ? <SubHeader /> : null}
            <Header />
            <ComingSoon />
            <Footer size={size} />
            <SubFooter />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
