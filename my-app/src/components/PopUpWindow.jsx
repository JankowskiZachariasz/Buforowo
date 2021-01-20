import React, { Component } from "react";
import "./PopUpWindow.css";

class PopUpWindow extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      
    }
  
    render() {
      return <div>

    
         <div className="window">

          {this.props.children}
        </div>
    


      </div>;
    }
  }
  
  export default PopUpWindow;
  