import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { GridService } from '../services/grid.service';

@Injectable()
export class RegularTablesResolver implements Resolve<any> {
  constructor(private gridService: GridService) {}
    resolve() {
    return new Promise((resolve, reject) => {
      this.gridService.getData()
      .subscribe((tableData: any) => {
        return resolve(tableData);
      });
    });
  }
}
