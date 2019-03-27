import { Mongo } from 'meteor/mongo';
 
export const GrowData = new Mongo.Collection('growdata');

if(Meteor.isServer) {
    Meteor.publish('GrowData', function() {
      return GrowData.find({});
    });
  }
  
  if(Meteor.isClient) {
    Meteor.subscribe('GrowData');
  }