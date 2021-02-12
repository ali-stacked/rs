(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboards-dashboards-module~home-home-module~records-records-module"], {
        /***/ "./src/app/resolvers/dashboards.resolver.ts": 
        /*!**************************************************!*\
          !*** ./src/app/resolvers/dashboards.resolver.ts ***!
          \**************************************************/
        /*! exports provided: EcommerceDashboardResolver, DataVizResolver, crmDashboardResolver, CrmDashboardResolver, PlayerDetailResolver, TeamDetailResolver */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceDashboardResolver", function () { return EcommerceDashboardResolver; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataVizResolver", function () { return DataVizResolver; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crmDashboardResolver", function () { return crmDashboardResolver; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrmDashboardResolver", function () { return CrmDashboardResolver; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerDetailResolver", function () { return PlayerDetailResolver; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamDetailResolver", function () { return TeamDetailResolver; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_dashboards_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dashboards.service */ "./src/app/services/dashboards.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var EcommerceDashboardResolver = /** @class */ (function () {
                function EcommerceDashboardResolver(dashboardService) {
                    this.dashboardService = dashboardService;
                }
                EcommerceDashboardResolver.prototype.resolve = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
                            _this.dashboardService.getRecentOrdersTableData(),
                            _this.dashboardService.getLatestTicketsTableData()
                        ])
                            .subscribe(function (data) {
                            return resolve({
                                recentOrdersData: data[0],
                                latestTicketsData: data[1]
                            });
                        });
                    });
                };
                return EcommerceDashboardResolver;
            }());
            EcommerceDashboardResolver.ctorParameters = function () { return [
                { type: _services_dashboards_service__WEBPACK_IMPORTED_MODULE_2__["DashboardsService"] }
            ]; };
            EcommerceDashboardResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], EcommerceDashboardResolver);
            var DataVizResolver = /** @class */ (function () {
                function DataVizResolver(dashboardService) {
                    this.dashboardService = dashboardService;
                }
                DataVizResolver.prototype.resolve = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
                            _this.dashboardService.getAllStatesCovid(),
                            _this.dashboardService.getTeam(),
                            _this.dashboardService.getNYCovid(),
                            _this.dashboardService.getNJCovid(),
                            _this.dashboardService.getPACovid(),
                            _this.dashboardService.getMICovid(),
                            _this.dashboardService.getMACovid()
                        ])
                            .subscribe(function (data) {
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
                };
                return DataVizResolver;
            }());
            DataVizResolver.ctorParameters = function () { return [
                { type: _services_dashboards_service__WEBPACK_IMPORTED_MODULE_2__["DashboardsService"] }
            ]; };
            DataVizResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], DataVizResolver);
            var crmDashboardResolver = /** @class */ (function () {
                function crmDashboardResolver(dashboardService) {
                    this.dashboardService = dashboardService;
                }
                crmDashboardResolver.prototype.resolve = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
                            _this.dashboardService.getArticles(),
                            _this.dashboardService.getTasks(),
                            _this.dashboardService.getAllStatesCovid(),
                            _this.dashboardService.getAdvisors()
                        ])
                            .subscribe(function (data) {
                            return resolve({
                                articles: data[1],
                                tasks: data[2],
                                covid: data[3],
                                advisors: data[4]
                            });
                        });
                    });
                };
                return crmDashboardResolver;
            }());
            crmDashboardResolver.ctorParameters = function () { return [
                { type: _services_dashboards_service__WEBPACK_IMPORTED_MODULE_2__["DashboardsService"] }
            ]; };
            crmDashboardResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], crmDashboardResolver);
            var CrmDashboardResolver = /** @class */ (function () {
                function CrmDashboardResolver(dashboardService) {
                    this.dashboardService = dashboardService;
                }
                CrmDashboardResolver.prototype.resolve = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([
                            _this.dashboardService.getLeadsTableData(),
                            _this.dashboardService.getTopSellersData(),
                            _this.dashboardService.getLaggingSellersData(),
                            _this.dashboardService.getArticles(),
                            _this.dashboardService.getTasks(),
                            _this.dashboardService.getAllStatesCovid(),
                            _this.dashboardService.getAdvisors()
                        ])
                            .subscribe(function (data) {
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
                };
                return CrmDashboardResolver;
            }());
            CrmDashboardResolver.ctorParameters = function () { return [
                { type: _services_dashboards_service__WEBPACK_IMPORTED_MODULE_2__["DashboardsService"] }
            ]; };
            CrmDashboardResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], CrmDashboardResolver);
            var PlayerDetailResolver = /** @class */ (function () {
                function PlayerDetailResolver(dashboardService) {
                    this.dashboardService = dashboardService;
                }
                PlayerDetailResolver.prototype.resolve = function (route, state) {
                    return this.dashboardService.getPlayerById(route.paramMap.get('id'));
                };
                return PlayerDetailResolver;
            }());
            PlayerDetailResolver.ctorParameters = function () { return [
                { type: _services_dashboards_service__WEBPACK_IMPORTED_MODULE_2__["DashboardsService"] }
            ]; };
            PlayerDetailResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], PlayerDetailResolver);
            var TeamDetailResolver = /** @class */ (function () {
                function TeamDetailResolver(dashboardService) {
                    this.dashboardService = dashboardService;
                }
                TeamDetailResolver.prototype.resolve = function (route, state) {
                    return this.dashboardService.getTeamById(+route.paramMap.get('id'));
                };
                return TeamDetailResolver;
            }());
            TeamDetailResolver.ctorParameters = function () { return [
                { type: _services_dashboards_service__WEBPACK_IMPORTED_MODULE_2__["DashboardsService"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/services/dashboards.service.ts": 
        /*!************************************************!*\
          !*** ./src/app/services/dashboards.service.ts ***!
          \************************************************/
        /*! exports provided: DashboardsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardsService", function () { return DashboardsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var DashboardsService = /** @class */ (function () {
                function DashboardsService(http) {
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
                DashboardsService.prototype.getCovidSummary = function () {
                    return this.http.get(this.covidSummaryApi).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res["Countries"]; }));
                };
                DashboardsService.prototype.getCovidGlobal = function () {
                    return this.http.get('../assets/data/covidglobal.json');
                };
                DashboardsService.prototype.getCurrentRank = function () {
                    return this.http.get('../assets/data/mock-data/idrankings.json');
                };
                DashboardsService.prototype.getNewRankings = function () {
                    return this.http.get(this.rankings);
                };
                DashboardsService.prototype.getCovidByEurope = function () {
                    return this.http.get(this.globalJson).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
                        data.find(data.region === 'Europe');
                    }));
                };
                DashboardsService.prototype.getPlayerById = function (id) {
                    var url = this.teamApi + "/" + id;
                    return this.http.get(url);
                };
                // team detail method
                DashboardsService.prototype.getTeamById = function (id) {
                    var url = this.teamApi + "/" + id;
                    return this.http.get(url);
                };
                DashboardsService.prototype.getCovidByDate = function (param) {
                    return this.http.get(this.baseApi + param + ".json");
                };
                DashboardsService.prototype.getCovid = function () {
                    return this.http.get(this.covidApi);
                };
                // filterStates(): Observable<any> {
                //     return this.http.get<any>(this.covidApi).pipe(
                //         map(res => )
                //     )
                // }
                DashboardsService.prototype.getDeathProp = function () {
                    return this.http.get(this.covidApi).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.filter(function (data) { return data.death == data.death; }); }));
                };
                DashboardsService.prototype.getCovidTypes = function () {
                    return this.http.get(this.covidApi);
                };
                DashboardsService.prototype.getJan5 = function () {
                    return this.http.get(this.jan5);
                };
                DashboardsService.prototype.getNewsHeadlines = function () {
                    return this.http.get(this.newsApi);
                };
                DashboardsService.prototype.getDec28 = function () {
                    return this.http.get(this.dec28);
                };
                DashboardsService.prototype.getCovidDeath = function () {
                    return this.http.get(this.covidApi);
                };
                // getCovidFields(): Observable<BigCovidProps[]> {
                //   return this.http.get<BigCovidProps[]>(this.covidApi).pipe(
                //       map((res) =>
                //
                //     )
                //   );
                // }
                DashboardsService.prototype.getCurrentCovidData = function () {
                    return this.http.get(this.currentCovidApi);
                };
                DashboardsService.prototype.getAllStatesCovid = function () {
                    return this.http.get(this.covidApi);
                };
                DashboardsService.prototype.getPACovid = function () {
                    return this.http.get(this.pacovidApi);
                };
                DashboardsService.prototype.getDecCovid = function () {
                    return this.http.get(this.decOneApi);
                };
                DashboardsService.prototype.getJanCovid = function () {
                    return this.http.get(this.janOneApi);
                };
                DashboardsService.prototype.getNovCovid = function () {
                    return this.http.get(this.novOneApi);
                };
                DashboardsService.prototype.getNJCovid = function () {
                    return this.http.get(this.njcovidApi);
                };
                DashboardsService.prototype.getNYCovid = function () {
                    return this.http.get(this.nycovidApi);
                };
                DashboardsService.prototype.getMACovid = function () {
                    return this.http.get(this.macovidApi);
                };
                DashboardsService.prototype.getMICovid = function () {
                    return this.http.get(this.micovidApi);
                };
                // team dashboard
                DashboardsService.prototype.getTeam = function () {
                    return this.http.get('/assets/data/team.json');
                };
                // test - for global api
                DashboardsService.prototype.getGlobalCovid = function () {
                    return this.http.get(this.globalJson);
                };
                DashboardsService.prototype.getAdvisors = function () {
                    return this.http.get('/assets/data/advisors.json');
                };
                // ecommerce dashboard
                DashboardsService.prototype.getRecentOrdersTableData = function () {
                    return this.http.get('/assets/data/ecommerce-dashboard/recent-orders-table.json');
                };
                DashboardsService.prototype.getLatestTicketsTableData = function () {
                    return this.http.get('/assets/data/ecommerce-dashboard/latest-tickets-table.json');
                };
                // crm dashboard
                DashboardsService.prototype.getLeadsTableData = function () {
                    return this.http.get('/assets/data/crm-dashboard/leads-table.json');
                };
                DashboardsService.prototype.getTopSellersData = function () {
                    return this.http.get('/assets/data/crm-dashboard/top-sellers.json');
                };
                DashboardsService.prototype.getLaggingSellersData = function () {
                    return this.http.get('/assets/data/crm-dashboard/lagging-sellers.json');
                };
                DashboardsService.prototype.getArticles = function () {
                    return this.http.get('/assets/data/crm-dashboard/articles.json');
                };
                DashboardsService.prototype.getTasks = function () {
                    return this.http.get('/assets/data/crm-dashboard/tasks.json');
                };
                return DashboardsService;
            }());
            DashboardsService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            DashboardsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], DashboardsService);
            /***/ 
        })
    }]);
//# sourceMappingURL=default~dashboards-dashboards-module~home-home-module~records-records-module-es2015.js.map
//# sourceMappingURL=default~dashboards-dashboards-module~home-home-module~records-records-module-es5.js.map
//# sourceMappingURL=default~dashboards-dashboards-module~home-home-module~records-records-module-es5.js.map