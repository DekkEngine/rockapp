import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//pages
import { MetalCategoriaPage, RockCategoriaPage } from "../index.paginas";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  irMetal(){
    // this.navCtrl.push( MetalCategoriaPage, { "metal" : this.metal } );
    this.navCtrl.push( MetalCategoriaPage );
  }

  irRock(){
    this.navCtrl.push( RockCategoriaPage );
  }
  
}
