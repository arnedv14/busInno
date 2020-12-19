import React, { Component } from "react";
import "./Home.css";
import { HomeItems } from "./HomeItems";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Breakfast from '../Breakfast/Breakfast';
import Lunch from '../Lunch/Lunch';
import Dinner from '../Dinner/Dinner';
import Snacks from '../Snacks/Snacks';
import Drinks from '../Drinks/Drinks';


class Home extends Component {
  render() {
    return (
      <Router>
        <div class="menuFrame">
          {HomeItems.map((item, index) => {
            if (HomeItems.length % 2 != 0 && index == HomeItems.length - 1) {
              return (
                <a
                  style={{ width: "100%" }}
                  href={item.url}
                  className={item.cName}
                >
                  {item.title}
                </a>
              );
            } else {
              return (
                <a href={item.url} className={item.cName}>
                  {item.title}
                </a>
              );
            }
          })}
        </div>
        <Switch>
            <Route path="/drinks">
              <Drinks />
            </Route>
            <Route path="/breakfast">
              <Breakfast />
            </Route>
            <Route path="/lunch">
              <Lunch />
            </Route>
            <Route path="/dinner">
              <Dinner />
            </Route>
            <Route path="/snacks">
              <Snacks />
            </Route>
          </Switch>
      </Router>
    );
  }
}

export default Home;
