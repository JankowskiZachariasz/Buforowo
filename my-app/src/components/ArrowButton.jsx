import React, { Component } from "react";
import "./ArrowButton.css";
import Arrow from "../graphics/Arrow.jsx";
import arrow from "../graphics/arrow.svg";
import arrowFaded from "../graphics/arrowFaded.svg";

class ArrowButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.enabled ? (
          <div className="butttonArrowcontainer">
            <div className="buttonText">{this.props.text}</div>
            <div className="buttonArrow">
            <Arrow enabled></Arrow>
            </div>
          </div>
        ) : (
          <div className="butttonArrowcontainer">
            <div className="buttonTextFaded">{this.props.text}</div>
            <div className="buttonArrow">
            <Arrow></Arrow>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ArrowButton;
