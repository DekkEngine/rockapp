import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MetalAlbumPage } from './metal-album';

@NgModule({
  declarations: [
    MetalAlbumPage,
  ],
  imports: [
    IonicPageModule.forChild(MetalAlbumPage),
  ],
})
export class MetalAlbumPageModule {}
