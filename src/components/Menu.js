import React, {Component} from "react"
import {NavLink} from "react-router-dom"

class Menu extends Component {
  render() {
    return (
      <div className="ui fixed inverter menu">
        <div className="ui container">
          <NavLink
            to="/"
            exact
            className="header item"
            activeClassName="active"
          >
          <img
            className="ui image"
            src="/wouldYouRather_icon.png"
            alt=""
            style={{marginRight: "0.5em", width: "50px"}}
          />
          Home
          </NavLink>
          <NavLink
            to="/new-question"
            exact
            className="item"
            activeClassName="active"
          >New Question
          </NavLink>
          <NavLink
            to="/leader-board"
            exact
            className="item"
            activeClassName="active"
          >Leader Board
          </NavLink>
          <NavLink
            to="/login"
            exact
            className="item"
            activeClassName="ui right floated item"
          >Login
          </NavLink>
        </div>
      </div>
    );
  }
}
export default Menu
