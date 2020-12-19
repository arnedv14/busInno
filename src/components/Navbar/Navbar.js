import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { Button } from "../Button";
import "./Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from '../About'
import Home from '../Home/Home'


class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <Router>
          <nav className="NavbarItems">
            <h1 className="navbar-logo">
              React<i className="fab fa-react"></i>
            </h1>
            <div className="menu-icon" onClick={this.handleClick}>
              <i
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
              {MenuItems.map((item, index) => {
                return (
                  <li>
                    <Link to={item.url} className={item.cName}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Button>Sign Up</Button>
          </nav>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    );
  }
}

export default Navbar;
