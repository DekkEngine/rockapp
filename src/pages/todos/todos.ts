import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Paginas
import { MetalPage } from "../index.paginas";

//services
import { FirebaseServiceProvider } from "../../providers/firebase-service/firebase-service";

@IonicPage()
@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html',
})
export class TodosPage {

  metal:any[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _fp:FirebaseServiceProvider) {

    _fp.getMetal().subscribe( metal => {
      this.metal = metal;
      console.log( this.metal );
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodosPage');
  }

  irGrupo(i){
    // TODO:crear pagina metalTodos y asignar los parametros que trae metal
    // this.navCtrl.push( MetalPage, { "metal" : this.metal[i] } );
  }

}
