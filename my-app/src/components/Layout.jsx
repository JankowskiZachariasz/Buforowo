import React, { Component } from "react";
import "./Layout.css";

class Layout extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      
    }
  
    render() {
      return (

        <div className="layout">
            {this.props.children}
        </div>

        );
    }
  }
  
  export default Layout;
  