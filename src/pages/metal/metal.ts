import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

//pages
import { MetalAlbumPage } from "../index.paginas";

@IonicPage()
@Component({
  selector: 'page-metal',
  templateUrl: 'metal.html',
})
export class MetalPage {

  metal:any[] = [];
  album:any[] = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private modalCtrl:ModalController) {

    this.metal = this.navParams.get( "metal" );
    this.album = this.metal['album']
    console.log( this.metal );
    console.log( this.album );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MetalPage');
  }

  irAlbum(){
    this.modalCtrl.create( MetalAlbumPage, { "album" : this.album['a1'] } ).present();
  }
  irAlbum2(){
    this.modalCtrl.create( MetalAlbumPage, { "album" : this.album['a2'] } ).present();
  }
  irAlbum3(){
    this.modalCtrl.create( MetalAlbumPage, { "album" : this.album['a3'] } ).present();
  }

}
