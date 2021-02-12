import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import {PolicyModel} from "../interfaces/plans.interface";
import {GlobalSummary} from "../interfaces/covid-global.interface";

@Injectable()
export class NosqlService {
    private covidSummaryApi: string = 'https://api.covid19api.com/summary';

    constructor(private http: HttpClient,
                public fireStore: AngularFirestore,
                public fireAuth: AngularFireAuth
    ) {}
    getPolicies() {
        return this.fireStore.collection<PolicyModel>('policies').valueChanges();
    }

    getGlobalCovidSum() {
        return this.fireStore.collection<GlobalSummary>('global').valueChanges();
    }

    addContact(data){
        return new Promise<any>((resolve, reject) => {
                this.fireStore
                    .collection("contact")
                    .add(data)
                    .then(
                        res => {},
                        err => reject(err)
                    )
            }
        )}
}
