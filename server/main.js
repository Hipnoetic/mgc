import { Meteor } from "meteor/meteor";
import { GrowData } from "../imports/api/growdata.js";

Meteor.startup(function() {
  //server side stuff for db insertion
  /*
  GrowData.insert({
    sensorName: "Temperature",
    sensorValue: "28",
    createdAt: Date().toString()
  });
  console.log(GrowData.find().fetch());
*/

  if(Meteor.isServer) {
    Meteor.publish('GrowData', function() {
      return GrowData.find({});
    });
  }
  
  if(Meteor.isClient) {
    Meteor.subscribe('GrowData');
  }
});
