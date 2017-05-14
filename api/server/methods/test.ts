import { Meteor } from 'meteor/meteor';

Meteor.methods({

  testMethod: function() {
  	let result = "Wassup from server side :)";
    return result

  },
  
});
