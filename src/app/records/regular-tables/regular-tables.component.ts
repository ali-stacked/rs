import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BigData } from '../../interfaces/tennis.interface';

@Component({
  selector: 'app-regular-tables',
  templateUrl: './regular-tables.component.html',
  styleUrls: [
    './regular-tables.component.scss'
  ]
})

export class RegularTablesComponent {

  displayedColumns: string[] = ['singles_winner_player',
    'tourney_dates',
    'tourney_conditions',
    'tourney_location',
    'tourney_name',
    'tourney_surface',
    'tourney_year',
    'singles_winner_player_id'];
  dataSource: any;

  constructor(private route: ActivatedRoute) {
    // tslint:disable-next-line:no-string-literal
    this.dataSource = route.snapshot.data['bigData'];
  }

}

