import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Slam } from '../interfaces/slam.interface';
import {BigData} from '../interfaces/tennis.interface';
import { Player } from '../interfaces/player.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class TennisService {

  constructor(private http: HttpClient,
              public fireStore: AngularFirestore,
              public fireAuth: AngularFireAuth
              ) {}
  getGrandSlams() {
    return this.fireStore.collection<Slam>('slams').valueChanges();
}

  getGoats() {
    return this.fireStore.collection<Player>('goats').valueChanges();
  }

  getBigData() {
    return this.fireStore.collection<BigData>('tennis').valueChanges();
  }

}

