import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-metal-album',
  templateUrl: 'metal-album.html',
})
export class MetalAlbumPage {

  album:any[] = [];
  canciones:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private viewCtrl:ViewController) {
    this.album = this.navParams.get('album');
    this.canciones = this.album['canciones'];
    console.log( this.canciones)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MetalAlbumPage');
  }

  cerrarModal(){
    this.viewCtrl.dismiss();
  }

}
