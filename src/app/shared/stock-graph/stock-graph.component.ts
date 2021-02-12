import { Component } from '@angular/core';
import {StockDataService} from "../../services/stock-data.service";
import {HistoricalData} from "../../interfaces/stock.interface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-stock-graph',
  templateUrl: './stock-graph.component.html',
  styleUrls: ['./stock-graph.component.scss']
})
export class StockGraphComponent  {
  dataHistory: Observable<HistoricalData[]>;
  single: any[];
  multi: any[];

  view: any[] = [800, 360];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private stockDataService: StockDataService) {
    this.single = this.stockDataService.getStaticData();
    this.dataHistory = this.stockDataService.historicalData;
  }

  public onSelect(event): void {

  }

  public onRefresh(): void {

  }

}
