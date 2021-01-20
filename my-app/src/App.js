import React, { Component } from "react";
import { Route, Switch, BrowserRouter, NavLink } from "react-router-dom";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import KolejkaZlecen from "./components/pages/KolejkaZlecen";
import HistoriaZlecen from "./components/pages/HistoriaZlecen";
import BazaItemow from "./components/pages/BazaItemow";
import TopNavbar from "./components/TopNavbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenMenuElement: 1,
      chosenMenuSubElement: 1,
    };
    this.updateSection = this.updateSection.bind(this);
    this.updateSubSection = this.updateSubSection.bind(this);
    this.updateBoth = this.updateBoth.bind(this);
  }

  updateSection = (newSec) => {
    this.setState({ chosenMenuElement: newSec, chosenMenuSubElement: 1 });
  };

  updateSubSection = (newSubSec) => {
    this.setState({ chosenMenuElement: this.state.chosenMenuElement, chosenMenuSubElement: newSubSec });
  };

  updateBoth = (newSec, newSubSec) => {
    this.setState({ chosenMenuElement: newSec, chosenMenuSubElement: newSubSec });
  };

  render() {

    let section = {
      updateBoth:this.updateBoth,
      setSection:this.updateSection,
      setSubSection:this.updateSubSection,
      getSection:this.state.chosenMenuElement,
      getSubSection:this.state.chosenMenuSubElement
    };
    return (
      <div>
        <TopNavbar></TopNavbar>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={(props) => <h1>normalny</h1>} />

            <Route exact path="/z" render={(props) => <h1>z</h1>} />

            <Route exact path="/login" render={(props) => <Login></Login>} />

            <Route
              exact
              path="/dashboard"
              render={(props) => <Dashboard section={section} ></Dashboard>}
            />

            <Route
              exact
              path="/kolejka"
              render={(props) => <KolejkaZlecen section={section} ></KolejkaZlecen>}
            />

            <Route
              exact
              path="/historia"
              render={(props) => <HistoriaZlecen section={section}></HistoriaZlecen>}
            />

            <Route
              exact
              path="/itemy"
              render={(props) => <BazaItemow section={section}></BazaItemow>}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
