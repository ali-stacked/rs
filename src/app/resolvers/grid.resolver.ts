import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import {NosqlService} from "../services/nosql.service";

@Injectable()
export class HealthDataResolver implements Resolve<any> {
  constructor(private service: NosqlService) {}
    resolve() {
    return new Promise((resolve, reject) => {
      this.service.getPolicies()
      .subscribe((data: any) => {
        return resolve(data);
      });
    });
  }
}

