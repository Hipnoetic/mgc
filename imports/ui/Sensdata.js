import React, { Component } from "react";
import moment from "moment";

// Task component - represents a single todo item
export default class Sensdata extends Component {
  render() {
    return (
      <li>
        {this.props.sensor.sensorName} - {this.props.sensor.sensorValue} -
        {moment(this.props.sensor.createdAt).format("L LTS")}
      </li>
    );
  }
}
