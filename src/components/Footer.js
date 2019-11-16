import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div
        className="ui inverted vertical footer segment"
        style={{ marginTop: "3em", padding: "3em 0" }}
      >
        <div className="ui container smaller">
          <strong>Would You Rather App,</strong> Developed by Khalil Al-Rashid @{new Date().getFullYear()}.
        </div>
      </div>
    );
  }
}

export default Footer;
