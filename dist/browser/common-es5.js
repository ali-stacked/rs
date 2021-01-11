(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
        /***/ "./src/app/resolvers/dashboards.resolver.ts": 
        /*!**************************************************!*\
          !*** ./src/app/resolvers/dashboards.resolver.ts ***!
          \**************************************************/
        /*! exports provided: EcommerceDashboardResolver, DataVizResolver, CrmDashboardResolver */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceDashboardResolver", function () { return EcommerceDashboardResolver; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataVizResolver", function () { return DataVizResolver; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrmDashboardResolver", function () { return CrmDashboardResolver; });
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
                                USA: data[0],
                                team: data[1],
                                NY: data[2],
                                NJ: data[3],
                                PA: data[4],
                                MI: data[5],
                                MA: data[6]
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
                            _this.dashboardService.getTeam(),
                            _this.dashboardService.getAllStatesCovid(),
                            _this.dashboardService.getNYCovid(),
                            _this.dashboardService.getNJCovid(),
                            _this.dashboardService.getPACovid(),
                            _this.dashboardService.getMICovid(),
                            _this.dashboardService.getMACovid(),
                            _this.dashboardService.getDecCovid(),
                            _this.dashboardService.getJanCovid(),
                            _this.dashboardService.getNovCovid()
                        ])
                            .subscribe(function (data) {
                            return resolve({
                                leadsData: data[0],
                                topSellers: data[1],
                                laggingSellers: data[2],
                                articles: data[3],
                                tasks: data[4],
                                team: data[5],
                                NY: data[6],
                                NJ: data[7],
                                PA: data[8],
                                MI: data[9],
                                MA: data[10],
                                nov: data[11],
                                dec: data[12],
                                jan: data[13],
                                covid: data[14]
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
        /***/ "./src/app/resolvers/grid.resolver.ts": 
        /*!********************************************!*\
          !*** ./src/app/resolvers/grid.resolver.ts ***!
          \********************************************/
        /*! exports provided: RegularTablesResolver, CovidTablesResolver */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularTablesResolver", function () { return RegularTablesResolver; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovidTablesResolver", function () { return CovidTablesResolver; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_dashboards_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/dashboards.service */ "./src/app/services/dashboards.service.ts");
            var RegularTablesResolver = /** @class */ (function () {
                function RegularTablesResolver(gridService) {
                    this.gridService = gridService;
                }
                RegularTablesResolver.prototype.resolve = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.gridService.getAllStatesCovid()
                            .subscribe(function (tableData) {
                            return resolve(tableData);
                        });
                    });
                };
                return RegularTablesResolver;
            }());
            RegularTablesResolver.ctorParameters = function () { return [
                { type: _services_dashboards_service__WEBPACK_IMPORTED_MODULE_2__["DashboardsService"] }
            ]; };
            RegularTablesResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], RegularTablesResolver);
            var CovidTablesResolver = /** @class */ (function () {
                function CovidTablesResolver(covidService) {
                    this.covidService = covidService;
                }
                CovidTablesResolver.prototype.resolve = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.covidService.getAllStatesCovid()
                            .subscribe(function (tableData) {
                            return resolve(tableData);
                        });
                    });
                };
                return CovidTablesResolver;
            }());
            CovidTablesResolver.ctorParameters = function () { return [
                { type: _services_dashboards_service__WEBPACK_IMPORTED_MODULE_2__["DashboardsService"] }
            ]; };
            CovidTablesResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], CovidTablesResolver);
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
            var DashboardsService = /** @class */ (function () {
                function DashboardsService(http) {
                    this.http = http;
                    // https://api.covidtracking.com/v1/us/20201201.json
                    this.currentApi = 'https://api.covidtracking.com/v1/us/current.json';
                    this.janOneApi = 'https://api.covidtracking.com/v1/us/20210101.json';
                    this.novOneApi = 'https://api.covidtracking.com/v1/us/20201101.json';
                    this.decOneApi = "https://api.covidtracking.com/v1/us/20201201.json";
                    this.pacovidApi = 'https://api.covidtracking.com/v1/states/pa/info.json';
                    this.njcovidApi = 'https://api.covidtracking.com/v1/states/nj/info.json';
                    this.nycovidApi = 'https://api.covidtracking.com/v1/states/ma/info.json';
                    this.macovidApi = 'https://api.covidtracking.com/v1/states/ca/info.json';
                    this.micovidApi = 'https://api.covidtracking.com/v1/states/mi/info.json';
                    this.covidApi = 'https://api.covidtracking.com/v1/us/current.json';
                    this.baseApi = 'https://api.covidtracking.com/v1/us/';
                    // historical api calls
                    this.lastDecCovidApi = 'https://api.covidtracking.com/v1/us/20201201.json';
                }
                DashboardsService.prototype.getCovidByDate = function (param) {
                    return this.http.get(this.baseApi + param + ".json");
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
                DashboardsService.prototype.getCovidYesterday = function () {
                    return this.http.get(this.lastDecCovidApi);
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
        }),
        /***/ "./src/app/services/news.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/news.service.ts ***!
          \******************************************/
        /*! exports provided: NewsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function () { return NewsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var NewsService = /** @class */ (function () {
                function NewsService(http) {
                    this.http = http;
                    this.newsApi = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=e0f7cab22d204d0b9091502244fd8ecf';
                    this.covidApi = 'https://api.covidtracking.com/v1/us/current.json';
                }
                NewsService.prototype.getNewsHeadlines = function () {
                    return this.http.get(this.newsApi);
                };
                NewsService.prototype.getCovidData = function () {
                    return this.http.get(this.covidApi);
                };
                return NewsService;
            }());
            NewsService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            NewsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], NewsService);
            /***/ 
        })
    }]);
//# sourceMappingURL=common-es2015.js.map
//# sourceMappingURL=common-es5.js.map
//# sourceMappingURL=common-es5.js.map