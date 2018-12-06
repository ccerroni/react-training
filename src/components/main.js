import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./home";
import Stuff from "./stuff";
import Contact from "./contact";
import DefaultStyles from "../styles/defaultStyles"

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="grid-container">
          <div style={DefaultStyles.headerContent}>
            <ul className="header">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/stuff">Stuff</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>
          <div className="menu-content">
          <ul className="left-menu">
              <li><NavLink exact to="/">Home</NavLink></li>
              <li><NavLink to="/stuff">Stuff</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
          </div>
          <div className="footer-content">
            <p>Footer</p>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;