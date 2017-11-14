import { RegisterPartyPage } from './../register-party/register-party';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

export class ListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  createParty(){
    this.navCtrl.push(RegisterPartyPage)
  }

}
