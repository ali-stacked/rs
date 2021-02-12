import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableExporterModule } from 'mat-table-exporter';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss']
})
export class RankingsComponent implements OnInit {

  displayedColumns = ['rank', 'name','country_name','country_id', 'bestRankDate', 'points','bestRank'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource: MatTableDataSource<Element>;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }
}

export interface Element {
  rank:number;
  name: string;
  country_name: string;
  country_id:string;
  bestRankDate: string;
  points: number;
  bestRank: number;
}

const ELEMENT_DATA: Element[] = [
  {
    rank: 1,
    name:'Novak Djokovic',
    country_name:'Serbia',
    country_id: 'SRB',
    points: 12030,
    bestRank: 1,
    bestRankDate: '2011-07-04'
  },
  {
    rank: 2,
    name:'Rafael Nadal' ,
    country_name:'Spain' ,
    country_id: 'ESP',
    points: 9850,
    bestRank: 1,
    bestRankDate: '2008-08-18'
  },
  {
    rank: 3,
    name: 'Dominic Thiem',
    country_name: 'Austria',
    country_id: 'AUT',
    points: 9125,
    bestRank: 3,
    bestRankDate: '2020-03-02'
  },
  {
    rank: 4,
    name: 'Daniil Medvedev',
    country_name: 'Russian Federation',
    country_id: 'RUS',
    points: 8470,
    bestRank: 4,
    bestRankDate: '2019-09-09'
  },
  {
    rank: 5,
    name: 'Roger Federer',
    country_name: 'Switzerland',
    country_id: 'SUI',
    points: 6630,
    bestRank: 1,
    bestRankDate: '2004-02-02'
  },
  {
    rank: 6,
    name: 'Stefanos Tsitsipas',
    country_name: 'Greece',
    country_id: 'GRE',
    points: 5940,
    bestRank: 5,
    bestRankDate:'2019-08-05'
  },
  {
    rank: 7,
    name: 'Alexander Zverev',
    country_name: 'Germany',
    country_id: 'GER',
    points: 5615,
    bestRank: 3,
    bestRankDate: '2017-11-06'
  },
  {
    rank: 8,
    name: 'Andrey Rublev',
    country_name: 'Russian Federation',
    country_id: 'RUS',
    points: 4164,
    bestRank: 8,
    bestRankDate: '2020-10-19'
  },
  {
    rank: 9,
    name: 'Diego Sebastian Schwartzman',
    country_name: 'Argentina',
    country_id: 'ARG',
    points: 3455,
    bestRank: 8,
    bestRankDate: '2020-10-12'
  },
  {
    rank: 10,
    name: 'Matteo Berrettini',
    country_name: 'Italy',
    country_id: 'ITA',
    points: 3120,
    bestRank: 8,
    bestRankDate: '2019-11-04'
  }

];
