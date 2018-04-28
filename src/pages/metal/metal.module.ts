import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MetalPage } from './metal';

@NgModule({
  declarations: [
    MetalPage,
  ],
  imports: [
    IonicPageModule.forChild(MetalPage),
  ],
})
export class MetalPageModule {}
