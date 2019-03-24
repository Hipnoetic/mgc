import { Line } from "react-chartjs-2";
import moment from "moment";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withTracker } from "meteor/react-meteor-data";
import { GrowData } from "../api/growdata.js";

// Variables

let now = moment();
let tmin = [25, 25, 25, 25, 25, 25, 25, 25, 25, 25];
let temp = [23, 26, 25, 29, 28, 24, 27, 26, 29, 23];

let data = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  datasets: [
    {
      label: "Temperature",
      backgroundColor: "rgba(255, 128, 0,  0.3)",
      borderColor: "rgba(255, 128, 0, 0.3)",
      fill: false, //no fill here
      //data: temp
      data: temp
    },
    {
      label: "tMin",
      backgroundColor: "rgba(255, 128, 0,  0.3)",
      borderColor: "rgba(255, 128, 0,  0.4)",
      borderDash: [2],
      fill: "-1", //fill until previous dataset
      data: tmin
    }
  ]
};

// using creat-react-class package:
//var createReactClass = require("create-react-class");
//export default (GrowChart = createReactClass({
// displayName: "GrowChart",

class Chart extends Component {
  //new chartdata branch additions:

  render() {
    return (
      <div>
        <h2>Grow Chart</h2>
        <Line data={data} />
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    growdata: GrowData.find({}).fetch()
  };
})(Chart);
