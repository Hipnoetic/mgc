import React, { Component } from "react";

// Task component - represents a single todo item
export default class TempData extends Component {
  render() {
    return (
      <p>
        {this.props.sensor.sensorName} - {this.props.sensor.sensorValue}
      </p>
    );
  }
}
