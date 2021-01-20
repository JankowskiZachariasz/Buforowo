import React, { Component } from "react";
import "./Window.css";

class Window extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      
    }
  
    render() {
      return <div style={{gridArea:this.props.gridArea}} className="inliner">

     
         <div className="LayoutWindow">
         <div className="windowNavBar"><div>{this.props.text}</div></div>
        <div className="InnerWindow">
        {this.props.children}
        </div>
          
        </div>
    


      </div>;
    }
  }
  
  export default Window;
  