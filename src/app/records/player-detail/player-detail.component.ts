import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AngularFirestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {TennisService} from "../../services/tennis.service";
import {BigData} from "../../interfaces/tennis.interface";

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {
public player: Observable<any>;
data;
id;
playerData;
  constructor(private route: ActivatedRoute,
              private service: TennisService,
              private firestore: AngularFirestore) {
    this.id = route.paramMap.subscribe(
        (params) => {
          this.id( params.get('id'));
        }
    );


  }

  ngOnInit() {
    this.service.getPlayer(this.id)
        .subscribe(data => this.data = data);
    this.playerData = this.firestore.collection('tennis').valueChanges({ singles_winner_player_slug: 'singles_winner_player_slug' });
  }

}


