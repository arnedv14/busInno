import React, { Component } from "react";
import "./Home.css";
import { HomeItems } from "./HomeItems";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Breakfast from "../Breakfast/Breakfast";
import Lunch from "../Lunch/Lunch";
import Dinner from "../Dinner/Dinner";
import Snacks from "../Snacks/Snacks";
import Drinks from "../Drinks/Drinks";
const axios= require('axios');

class Home extends Component {
  render() {
    
    return (
      
      <div class="menuFrame">
        {HomeItems.map((item, index) => {
          if (HomeItems.length % 2 !== 0 && index === HomeItems.length - 1) {
            return (
              <Link
                style={{ width: "100%" }}
                to={item.url}
                className={item.cName}
              >
                {item.title}
              </Link>
            );
          } else {
            return (
              <Link to={item.url} className={item.cName}>
                {item.title}
              </Link>
            );
          }
        })}



        {/* <Switch>
        
          <Route path="/drinks">
            <Drinks />
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
        </Switch> */}
      </div>
      
    );
  }
}

export default Home;
