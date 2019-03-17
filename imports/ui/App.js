import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withTracker } from "meteor/react-meteor-data";
import GrowChart from "../ui/Chart.js";
import { GrowData } from "../api/growdata.js";
import Sensdata from "./Sensdata.js";

//class App extends React.Component {
class App extends Component {
  renderData() {
    return this.props.growdata.map(sensor => (
      <Sensdata key={sensor._id} sensor={sensor} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <GrowChart />
          <h1>Sensor List</h1>
        </header>
        <ul>{this.renderData()}</ul>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    growdata: GrowData.find({}).fetch()
  };
})(App);
