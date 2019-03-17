import { Meteor } from "meteor/meteor";
import { GrowData } from "../imports/api/growdata.js";

Meteor.startup(function() {
  //server side stuff

  GrowData.insert({
    sensorName: "Temperature",
    sensorValue: "28",
    createdAt: Date().toString()
  });
  console.log(GrowData.find().fetch());
});
