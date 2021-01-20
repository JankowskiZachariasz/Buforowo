import React, { Component } from "react";
import logo from "../graphics/logo.png";
import dropdownArrow from "../graphics/dropdownArrow.svg";
import "./TopNavbar.css";

class TopNavbar extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      
    }
  
    render() {
      return <div>
         <div className="navbar">

          <div className="LogoText">
            <div className="logoPicture"><img src={logo} className="App-logo" alt="logo" height="22" /></div>
            <div className="textLogo"></div>
            
          </div>


          <div className="loginStatus">
            <div className="surname">Jan Kowalski</div>
            <div className="arrow"><img src={dropdownArrow} className="App-logo" alt="logo" height="6" /></div>
          </div>
          
         
        </div>




      </div>;
    }
  }
  
  export default TopNavbar;
  