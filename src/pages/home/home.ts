import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Meteor } from 'meteor/meteor';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	serverText: string = "Test";

  constructor(public navCtrl: NavController) {
  
  	Meteor.call("testMethod", (err, result)  => {
  		if (err) {
  			console.log(err.reason);
  		} else {
  			this.serverText = result;
  		}
  	}) ;

  }

}
