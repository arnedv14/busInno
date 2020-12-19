
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Nav } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
