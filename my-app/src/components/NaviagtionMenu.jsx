import React, { Component } from "react";
import "./NaviagtionMenu.css";
import MenuItem from "./MenuItem";
import MenuSubItem from "./MenuSubItem";
import Db from "../graphics/Db";
import Box from "../graphics/Box";
import Eye from "../graphics/Eye";
import Gear from "../graphics/Gear";
import Raports from "../graphics/Raports";
import add from "../graphics/add.svg";
import Sub from "../graphics/Sub.jsx";

class NaviagtionMenu extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
      this.updateSection = this.updateSection.bind(this);
      this.updateSubSection = this.updateSubSection.bind(this);
    }

    updateSection = (newSec) => {
      this.props.section.setSection(newSec)

      switch(newSec){
        case 1:{this.props.updateHistory("/dashboard"); break;}
        case 2:{this.props.updateHistory("/kolejka"); break;}
        case 3:{this.props.updateHistory("/itemy"); break;}
        case 4:{this.props.updateHistory("/lol"); break;}
        case 5:{this.props.updateHistory("/lol"); break;}
      }
      
    };

    updateSubSection = (newSubSec) => {
      this.props.section.setSubSection(newSubSec)
      switch(this.props.section.getSection){
        case 2:{
          if(newSubSec==1){this.props.updateHistory("/kolejka")}
          else if(newSubSec==2){this.props.updateHistory("/historia")}
           break;}

        case 4:{
          if(newSubSec==1){}
          else if(newSubSec==2){}
          break;}
      }

    };

  
    render() {
      return (
        
      <div className="sidebar">
      <NewJob></NewJob>
      <div  className="navigation">
      <MenuItem index={1} click={this.updateSection} enabled={this.props.section.getSection==1?(true):(false)} text="Widok Główny"><Eye></Eye></MenuItem>
      <MenuItem index={2} click={this.updateSection} enabled={this.props.section.getSection==2?(true):(false)} text="Zlecenia"><Box></Box></MenuItem>
      
      <div className={this.props.section.getSection==2?("menuExpandable opened"):("menuExpandable")}>
      <MenuSubItem index={1} click={this.updateSubSection} enabled={this.props.section.getSubSection==1?(true):(false)} text="Kolejka"><Sub></Sub></MenuSubItem>
      <MenuSubItem index={2} click={this.updateSubSection} enabled={this.props.section.getSubSection==2?(true):(false)} text="Historia"><Sub></Sub></MenuSubItem>
      </div>

      <MenuItem index={3} click={this.updateSection} enabled={this.props.section.getSection==3?(true):(false)} text="Baza Itemów"><Db></Db></MenuItem>
      <MenuItem index={4} click={this.updateSection} enabled={this.props.section.getSection==4?(true):(false)} text="Zarządzanie"><Gear></Gear></MenuItem>

      <div className={this.props.section.getSection==4?("menuExpandable opened"):("menuExpandable")}>
      <MenuSubItem index={1} click={this.updateSubSection} enabled={this.props.section.getSubSection==1?(true):(false)} text="Użytkownicy"><Sub></Sub></MenuSubItem>
      <MenuSubItem index={2} click={this.updateSubSection} enabled={this.props.section.getSubSection==2?(true):(false)} text="Zdarzenia"><Sub></Sub></MenuSubItem>
      </div>

      <MenuItem index={5} click={this.updateSection} enabled={this.props.section.getSection==5?(true):(false)} text="Raporty"><Raports></Raports></MenuItem>

      </div>
      </div>);
    }
  }
  
  function NewJob() {
  
    return (

        <div className="newJob">
          <div className="newJobGrid">
          <div className="newJobPic"><img src={add} className="App-logo" alt="logo" height="17" /></div>
          <div className="newJobDesc">NOWE ZLECENIE</div>
          </div>
        </div>
     
    );
  }



  export default NaviagtionMenu;