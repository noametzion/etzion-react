import React from 'react';
import NavigationBar from "../navigation-bar/NavigationBar";
import './App.css';
import Projects from "../projects/Projects";
import AboutEtzion from "../about-etzion/AboutEtzion";
import Services from "../services/Services";

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
          <NavigationBar/>
          <Projects/>
          <AboutEtzion/>
          <Services/>
        </div>
    );
  }
}

export default EtzionApp;