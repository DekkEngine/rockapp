import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//page
import { MetalPage } from "../index.paginas";

//service
import { FirebaseServiceProvider } from "../../providers/firebase-service/firebase-service";


@IonicPage()
@Component({
  selector: 'page-metal-categoria',
  templateUrl: 'metal-categoria.html',
})
export class MetalCategoriaPage {

  metal:any[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _fp:FirebaseServiceProvider) {
  
    _fp.getMetal().subscribe( metal => {
      this.metal = metal;
      // console.log( this.metal );
    });
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MetalCategoriaPage');
  }

  irMetalGrupo( idx ){
    this.navCtrl.push( MetalPage, { "metal" : this.metal[idx] } );
  }



}
