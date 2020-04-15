import React from 'react';
import NavigationBar from "../navigation-bar/NavigationBar";
import './App.css';
import Projects from "../projects/Projects";
import AboutEtzion from "../about-etzion/AboutEtzion";
import Services from "../services/Services";
import {Col, Nav, Navbar, Row, Tab, Tabs} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

interface IEtzionAppProps {
}

interface IEtzionAppState {
}


class EtzionApp extends React.Component <IEtzionAppProps, IEtzionAppState>{
    constructor(props : IEtzionAppProps) {
        super(props);
        this.state = {};
  }

  render() {
      return (
          <div className="App">
              <Router>
                  <NavigationBar/>
                  <Switch>
                      <Route path="/about">
                          <AboutEtzion/>
                      </Route>
                      <Route path="/projects">
                          <Projects/>
                      </Route>
                      <Route path="/services">
                          <Services/>
                      </Route>
                      <Route path="/">
                      </Route>
                  </Switch>
              </Router>
        </div>
      );
  }
}

export default EtzionApp;