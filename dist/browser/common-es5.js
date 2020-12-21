(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
        /***/ "./src/app/resolvers/dashboards.resolver.ts": 
        /*!**************************************************!*\
          !*** ./src/app/resolvers/dashboards.resolver.ts ***!
          \**************************************************/
        /*! exports provided: EcommerceDashboardResolver, CrmDashboardResolver */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcommerceDashboardResolver", function () { return EcommerceDashboardResolver; });
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
                            _this.dashboardService.getTasks()
                        ])
                            .subscribe(function (data) {
                            return resolve({
                                leadsData: data[0],
                                topSellers: data[1],
                                laggingSellers: data[2],
                                articles: data[3],
                                tasks: data[4]
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
                }
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
//# sourceMappingURL=common-es2015.js.map
//# sourceMappingURL=common-es5.js.map
//# sourceMappingURL=common-es5.js.map