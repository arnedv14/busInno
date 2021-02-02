import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";

// import { Component } from "react";
// import { MenuItems } from "./components/Navbar/MenuItems.js";
import "./components/Navbar/Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About";
import Drinks from "./components/Drinks/Drinks";
import Breakfast from "./components/Breakfast/Breakfast";
import Lunch from "./components/Lunch/Lunch";
import Dinner from "./components/Dinner/Dinner";
import Snacks from "./components/Snacks/Snacks";
import { Nav } from "react-bootstrap";
import ContactForm from "./components/ContactForm";
import Container from "react-bootstrap/Container";
const axios=require('axios');



class App extends React.Component {
  render() {
    
    if(sessionStorage.getItem('hasRegistered')=='true'){
      console.log(sessionStorage.getItem('hasRegistered'));
      
      return(
        
        <Router>
          <div className="App">

            <Navbar />
            <Route 
              path={['/', '/home']} component={Home} exact />
            <Route path='/about' component={About} />
            <Route 
              exact path='/dinner' 
              render={(menuItems1)=> (<Dinner {...menuItems1}/>)}
              />
            {/* <Route path="/contactTracing" component={ContactForm} /> */}
          </div>
        </Router>
      
      )
    }else{
      console.log(sessionStorage.getItem('hasRegistered'));
      return (
        
        <Router>
          <div className="App">
            <Navbar />
            <ContactForm/>
          </div>
        </Router>
      
    );
    }
    
  }
}

export default App;
