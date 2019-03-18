import React from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";
//import RC2 from '../../lib/index';

let now = moment();

const data = {
  labels: ["12:08", "12:09", "12:10", "12:11", "12:12", "12:13", "12:14"],
  datasets: [
    {
      label: "Temperature",
      backgroundColor: "rgba(255, 128, 0,  0.3)",
      borderColor: "rgba(255, 128, 0, 0.3)",
      fill: false, //no fill here
      data: [25, 25, 23, 28, 29, 27, 31]
    },
    {
      label: "tMin",
      backgroundColor: "rgba(255, 128, 0,  0.3)",
      borderColor: "rgba(255, 128, 0,  0.4)",
      borderDash: [2],
      fill: "-1", //fill until previous dataset
      data: [25, 25, 25, 25, 25, 25, 25]
    }
  ]
};

var createReactClass = require("create-react-class");

export default (GrowChart = createReactClass({
  //export default React.createClass({
  displayName: "GrowChart",

  render() {
    return (
      <div class="chart-container" style="position: relative;">
        <h2>Grow Chart</h2>
        <Line data={data} />
      </div>
    );
  }
}));
