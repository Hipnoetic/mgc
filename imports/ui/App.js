import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withTracker } from "meteor/react-meteor-data";
//import GrowChart from "../ui/Chart.js";
import { GrowData } from "../api/growdata.js";
import Sensdata from "./Sensdata.js";
import TempData from "./TempData.js";

//class App extends React.Component {
class App extends Component {
  renderallData() {
    return this.props.growdata.map(sensor => (
      <Sensdata key={sensor._id} sensor={sensor} />
    ));
  }

  renderTempData() {
    return this.props.growdata.map(sensor => (
      <TempData key={sensor._id} sensor={sensor} />
    ));
  }

  render() {
    return (
      <div className="container" width="90%">
        <div>{this.renderTempData()}</div>
        <header>
          <h1>Sensor List</h1>
        </header>
        <ul>{this.renderallData()}</ul>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    growdata: GrowData.find({}).fetch()
  };
})(App);
