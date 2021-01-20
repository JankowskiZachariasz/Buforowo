import React, { Component } from "react";
import "./InlineForm.css";

class InlineForm extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      
    }
  
    render() {
      return (

      <div className="row-InlineForm">

    
         <div className="formDescriptor">{this.props.text}</div>
       <div className="limitWidth">{this.props.children}</div>

      
      </div>);
    }
  }
  
  export default InlineForm;
  