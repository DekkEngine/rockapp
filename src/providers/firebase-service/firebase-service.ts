import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FirebaseServiceProvider {

  metal: Observable<any[]>;
  rock: Observable<any[]>;
  
  constructor(public http: HttpClient,
              private afDB: AngularFireDatabase) {
    console.log('Servicio listo :D');
    this.getMetal();
  }

  getMetal(){
    return this.metal = this.afDB.list("metal").valueChanges();
  }

}
