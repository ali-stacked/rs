(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboards-dashboards-module~home-home-module~records-records-module"],{

/***/ "./src/app/resolvers/dashboards.resolver.ts":
/*!**************************************************!*\
  !*** ./src/app/resolvers/dashboards.resolver.ts ***!
  \**************************************************/
/*! exports provided: EcommerceDashboardResolver, DataVizResolver, crmDashboardResolver, CrmDashboardResolver, PlayerDetailResolver, TeamDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceDashboardResolver", function() { return EcommerceDashboardResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataVizResolver", function() { return DataVizResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crmDashboardResolver", function() { return crmDashboardResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrmDashboardResolver", function() { return CrmDashboardResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerDetailResolver", function() { return PlayerDetailResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDetailResolver", function() { return TeamDetailResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_dashboards_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dashboards.service */ "./src/app/services/dashboards.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let EcommerceDashboardResolver = class EcommerceDashboardResolver {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    resolve() {
        return new Promise((resolve, reject) => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
                this.dashboardService.getRecentOrdersTableData(),
                this.dashboardService.getLatestTicketsTableData()
            ])
                .subscribe((data) => {
                return resolve({
                    recentOrdersData: data[0],
                    latestTicketsData: data[1]
                });
            });
        });
    }
};
EcommerceDashboardResolver.ctorParameters = () => [
    { type: _services_dashboards_service__WEBPACK_IMPORTED_MODULE_2__["DashboardsService"] }
];
EcommerceDashboardResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], EcommerceDashboardResolver);

let DataVizResolver = class DataVizResolver {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    resolve() {
        return new Promise((resolve, reject) => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
                this.dashboardService.getAllStatesCovid(),
                this.dashboardService.getTeam(),
                this.dashboardService.getNYCovid(),
                this.dashboardService.getNJCovid(),
                this.dashboardService.getPACovid(),
                this.dashboardService.getMICovid(),
                this.dashboardService.getMACovid()
            ])
                .subscribe((data) => {
                return resolve({
                    current: data[0],
                    team: data[1],
                    NY: data[2],
                    NJ: data[3],
                    PA: data[4],
                    MI: data[5],
                    MA: data[6],
                    dec28: data[7],
                    jan5: data[8]
                });
            });
        });
    }
};
DataVizResolver.ctorParameters = () => [
    { type: _services_dashboards_service__WEBPACK_IMPORTED_MODULE_2__["DashboardsService"] }
];
DataVizResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DataVizResolver);

let crmDashboardResolver = class crmDashboardResolver {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    resolve() {
        return new Promise((resolve, reject) => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
                this.dashboardService.getArticles(),
                this.dashboardService.getTasks(),
                this.dashboardService.getAllStatesCovid(),
                this.dashboardService.getAdvisors()
            ])
                .subscribe((data) => {
                return resolve({
                    articles: data[1],
                    tasks: data[2],
                    covid: data[3],
                    advisors: data[4]
                });
            });
        });
    }
};
crmDashboardResolver.ctorParameters = () => [
    { type: _services_dashboards_service__WEBPACK_IMPORTED_MODULE_2__["DashboardsService"] }
];
crmDashboardResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], crmDashboardResolver);

let CrmDashboardResolver = class CrmDashboardResolver {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    resolve() {
        return new Promise((resolve, reject) => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
                this.dashboardService.getLeadsTableData(),
                this.dashboardService.getTopSellersData(),
                this.dashboardService.getLaggingSellersData(),
                this.dashboardService.getArticles(),
                this.dashboardService.getTasks(),
                this.dashboardService.getAllStatesCovid(),
                this.dashboardService.getAdvisors()
            ])
                .subscribe((data) => {
                return resolve({
                    leadsData: data[0],
                    topSellers: data[1],
                    laggingSellers: data[2],
                    articles: data[3],
                    tasks: data[4],
                    covid: data[5],
                    advisors: data[6]
                });
            });
        });
    }
};
CrmDashboardResolver.ctorParameters = () => [
    { type: _services_dashboards_service__WEBPACK_IMPORTED_MODULE_2__["DashboardsService"] }
];
CrmDashboardResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CrmDashboardResolver);

let PlayerDetailResolver = class PlayerDetailResolver {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    resolve(route, state) {
        return this.dashboardService.getPlayerById(route.paramMap.get('id'));
    }
};
PlayerDetailResolver.ctorParameters = () => [
    { type: _services_dashboards_service__WEBPACK_IMPORTED_MODULE_2__["DashboardsService"] }
];
PlayerDetailResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PlayerDetailResolver);

let TeamDetailResolver = class TeamDetailResolver {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    resolve(route, state) {
        return this.dashboardService.getTeamById(+route.paramMap.get('id'));
    }
};
TeamDetailResolver.ctorParameters = () => [
    { type: _services_dashboards_service__WEBPACK_IMPORTED_MODULE_2__["DashboardsService"] }
];
TeamDetailResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TeamDetailResolver);

// @Injectable()
// export class StraightNastyCovidResolver implements Resolve<any> {
//   constructor(private dashboardService: DashboardsService) {}
//   resolve() {
//     return new Promise((resolve, reject) => {
//       forkJoin([
//         this.dashboardService.getLeadsTableData(),
//         this.dashboardService.getTopSellersData(),
//         this.dashboardService.getLaggingSellersData(),
//         this.dashboardService.getArticles(),
//         this.dashboardService.getTasks(),
//         this.dashboardService.getTeam()
//       ])
//           .subscribe((data: any) => {
//             return resolve({
//               leadsData: data[0],
//               topSellers: data[1],
//               laggingSellers: data[2],
//               articles: data[3],
//               tasks: data[4],
//               team: data[5]
//             });
//           });
//     });
//   }
// }


/***/ }),

/***/ "./src/app/services/dashboards.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/dashboards.service.ts ***!
  \************************************************/
/*! exports provided: DashboardsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardsService", function() { return DashboardsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let DashboardsService = class DashboardsService {
    constructor(http) {
        this.http = http;
        this.globalJson = "/assets/data/covidglobal.json";
        this.rankings = "/assets/data/rank.json";
        // https://api.covidtracking.com/v1/us/20201201.json
        this.currentApi = 'https://api.covidtracking.com/v1/us/current.json';
        this.jan5 = 'https://api.covidtracking.com/v1/us/20210105.json';
        this.dec28 = 'https://api.covidtracking.com/v1/us/20201228.json';
        this.janOneApi = 'https://api.covidtracking.com/v1/us/20210101.json';
        this.novOneApi = 'https://api.covidtracking.com/v1/us/20201101.json';
        this.decOneApi = "https://api.covidtracking.com/v1/us/20201201.json";
        this.pacovidApi = 'https://api.covidtracking.com/v1/states/pa/info.json';
        this.njcovidApi = 'https://api.covidtracking.com/v1/states/nj/info.json';
        this.nycovidApi = 'https://api.covidtracking.com/v1/states/ma/info.json';
        this.macovidApi = 'https://api.covidtracking.com/v1/states/ca/info.json';
        this.micovidApi = 'https://api.covidtracking.com/v1/states/mi/info.json';
        this.covidApi = 'https://api.covidtracking.com/v1/us/current.json';
        this.currentCovidApi = 'https://api.covidtracking.com/v1/us/current.json';
        this.baseApi = 'https://api.covidtracking.com/v1/us/';
        this.newsApi = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=e0f7cab22d204d0b9091502244fd8ecf';
        this.teamApi = '/assets/data/team.json';
        this.covidSummaryApi = 'https://api.covid19api.com/summary';
        // historical api calls
        this.lastDecCovidApi = 'https://api.covidtracking.com/v1/us/20201201.json';
        // getPolicyData(): Observable<PolicyModel[]> {
        //     return this.http.get<PolicyModel[]>(this.policyApi).pipe(
        //         map(results => results["policies"])
        //
        //     );
        // }
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'X-Access-Token': '5cf9dfd5-3449-485e-b5ae-70a60e997864'
            })
        };
    }
    getCovidSummary() {
        return this.http.get(this.covidSummaryApi).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res["Countries"]));
    }
    getCovidGlobal() {
        return this.http.get('../assets/data/covidglobal.json');
    }
    getCurrentRank() {
        return this.http.get('../assets/data/mock-data/idrankings.json');
    }
    getNewRankings() {
        return this.http.get(this.rankings);
    }
    getCovidByEurope() {
        return this.http.get(this.globalJson).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            data.find(data.region === 'Europe');
        }));
    }
    getPlayerById(id) {
        const url = `${this.teamApi}/${id}`;
        return this.http.get(url);
    }
    // team detail method
    getTeamById(id) {
        const url = `${this.teamApi}/${id}`;
        return this.http.get(url);
    }
    getCovidByDate(param) {
        return this.http.get(this.baseApi + param + `.json`);
    }
    getCovid() {
        return this.http.get(this.covidApi);
    }
    // filterStates(): Observable<any> {
    //     return this.http.get<any>(this.covidApi).pipe(
    //         map(res => )
    //     )
    // }
    getDeathProp() {
        return this.http.get(this.covidApi).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(result => result.filter(data => data.death == data.death)));
    }
    getCovidTypes() {
        return this.http.get(this.covidApi);
    }
    getJan5() {
        return this.http.get(this.jan5);
    }
    getNewsHeadlines() {
        return this.http.get(this.newsApi);
    }
    getDec28() {
        return this.http.get(this.dec28);
    }
    getCovidDeath() {
        return this.http.get(this.covidApi);
    }
    // getCovidFields(): Observable<BigCovidProps[]> {
    //   return this.http.get<BigCovidProps[]>(this.covidApi).pipe(
    //       map((res) =>
    //
    //     )
    //   );
    // }
    getCurrentCovidData() {
        return this.http.get(this.currentCovidApi);
    }
    getAllStatesCovid() {
        return this.http.get(this.covidApi);
    }
    getPACovid() {
        return this.http.get(this.pacovidApi);
    }
    getDecCovid() {
        return this.http.get(this.decOneApi);
    }
    getJanCovid() {
        return this.http.get(this.janOneApi);
    }
    getNovCovid() {
        return this.http.get(this.novOneApi);
    }
    getNJCovid() {
        return this.http.get(this.njcovidApi);
    }
    getNYCovid() {
        return this.http.get(this.nycovidApi);
    }
    getMACovid() {
        return this.http.get(this.macovidApi);
    }
    getMICovid() {
        return this.http.get(this.micovidApi);
    }
    // team dashboard
    getTeam() {
        return this.http.get('/assets/data/team.json');
    }
    // test - for global api
    getGlobalCovid() {
        return this.http.get(this.globalJson);
    }
    getAdvisors() {
        return this.http.get('/assets/data/advisors.json');
    }
    // ecommerce dashboard
    getRecentOrdersTableData() {
        return this.http.get('/assets/data/ecommerce-dashboard/recent-orders-table.json');
    }
    getLatestTicketsTableData() {
        return this.http.get('/assets/data/ecommerce-dashboard/latest-tickets-table.json');
    }
    // crm dashboard
    getLeadsTableData() {
        return this.http.get('/assets/data/crm-dashboard/leads-table.json');
    }
    getTopSellersData() {
        return this.http.get('/assets/data/crm-dashboard/top-sellers.json');
    }
    getLaggingSellersData() {
        return this.http.get('/assets/data/crm-dashboard/lagging-sellers.json');
    }
    getArticles() {
        return this.http.get('/assets/data/crm-dashboard/articles.json');
    }
    getTasks() {
        return this.http.get('/assets/data/crm-dashboard/tasks.json');
    }
};
DashboardsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DashboardsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DashboardsService);



/***/ })

}]);
//# sourceMappingURL=default~dashboards-dashboards-module~home-home-module~records-records-module-es2015.js.map