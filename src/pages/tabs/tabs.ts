import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, 
         Platform, AlertController, ToastController } from 'ionic-angular';

import { HomePage, TodosPage, AboutPage, SlidesPage } from '../index.paginas';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1:any = HomePage;
  tab2:any = TodosPage;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private menuCtrl:MenuController,
              private platform:Platform,
              private alertCtrl:AlertController,
              private toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  openAbout(){
    this.navCtrl.push( AboutPage );
    this.menuCtrl.close();
  }

  openAboutApp(){
    this.navCtrl.push( SlidesPage );
    this.menuCtrl.close();
  }

  cerrar(){

    this.menuCtrl.close();
    let confir = this.alertCtrl.create({
      title : "¿Deseas salir?",
      message : "Esperamos tu pronto regreso c:",
      buttons : [
        {
          text : 'Aceptar',
          handler : () => {
            this.platform.exitApp();
          }
        },
        {
          text : "Cancelar",
          handler : () => {
            let toast = this.toastCtrl.create({
              message : "¿Te quedas? muy bien sigamos :D",
              duration : 4000,
              position : 'middle'
            }).present();
          }
        }
      ]
    }).present();
  }

}
