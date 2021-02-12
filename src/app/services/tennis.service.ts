import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Slam } from '../interfaces/slam.interface';
import {BigData} from '../interfaces/tennis.interface';
import { Player } from '../interfaces/player.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import {GlobalSummary} from "../interfaces/covid-global.interface";

@Injectable()
export class TennisService {

  constructor(private http: HttpClient,
              public fireStore: AngularFirestore,
              public fireAuth: AngularFireAuth
              ) {}
  getGrandSlams() {
    return this.fireStore.collection<Slam>('slams').valueChanges();
}

  addDocTennis(data){
    return new Promise<any>((resolve, reject) => {
          this.fireStore
              .collection("tennis")
              .add(data)
              .then(
                  res => {},
                  err => reject(err)
              )
        }
    )}

  getGoats() {
    return this.fireStore.collection<Player>('goats').valueChanges();
  }

  getBigData() {
    return this.fireStore.collection<BigData>('tennis').valueChanges();
  }

  getPlayer(id:string) {
    return this.fireStore.collection('tennis').valueChanges({ singles_winner_player_slug: 'singles_winner_player_slug' });

  }

    getGlobalCovidSum() {
        return this.fireStore.collection<GlobalSummary>('global').valueChanges();
    }

}

