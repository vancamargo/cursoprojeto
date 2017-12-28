import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validator, FormBuilder } from '@angular/forms'



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public FormBuilder: FormBuilder ) {

  }

}
