import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';

//service
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';

//pages
import { HomePage, SlidesPage, TabsPage, TodosPage, AboutPage, MetalCategoriaPage,
         RockCategoriaPage, MetalPage, MetalAlbumPage } from '../pages/index.paginas';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { firebaseConfig } from "../config/firebase";


@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    SlidesPage, 
    TabsPage, 
    TodosPage,
    AboutPage,
    MetalCategoriaPage,
    RockCategoriaPage,
    MetalPage,
    MetalAlbumPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText : "back",
      iconMode : "ios",
      backButtonIcon : "ios-arrow-back",
      pageTransition : "ios-transition",
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    SlidesPage, 
    TabsPage, 
    TodosPage,
    AboutPage,
    MetalCategoriaPage,
    RockCategoriaPage,
    MetalPage,
    MetalAlbumPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider
  ]
})
export class AppModule {}
