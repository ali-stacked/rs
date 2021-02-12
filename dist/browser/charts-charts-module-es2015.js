(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-charts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/chartjs/chartjs-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/chartjs/chartjs-page.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid content-wrapper\">\n  <h1 class=\"page-title\">Real Stack Charts</h1>\n\n  <div class=\"callout-message-wrapper\">\n    <div class=\"callout-icon d-none d-md-block\">\n      <i class=\"fas fa-info-circle\"></i>\n    </div>\n    <div class=\"callout-message\">\n      <span>\n       Real Stack Charts Built In Angular, Extend Our Clients BI Tools On Mobile & Web Clients\n      </span>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-sm-12\">\n      <div class=\"chart-card\">\n        <div class=\"chart-card-header\">\n          <span>Total transactions</span>\n        </div>\n        <div class=\"chart-card-body\">\n          <canvas *ngIf=\"isBrowser\" baseChart\n            [datasets]=\"lineChartData\"\n            [labels]=\"lineChartLabels\"\n            [options]=\"lineChartOptions\"\n            [colors]=\"lineChartColors\"\n            [legend]=\"lineChartLegend\"\n            [chartType]=\"lineChartType\">\n          </canvas>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-sm-12\">\n      <div class=\"chart-card\">\n        <div class=\"chart-card-header\">\n          <span>Sales by source</span>\n        </div>\n        <div class=\"chart-card-body\">\n          <canvas *ngIf=\"isBrowser\" baseChart\n            [data]=\"pieChartData\"\n            [labels]=\"pieChartLabels\"\n            [chartType]=\"pieChartType\"\n            [options]=\"pieChartOptions\"\n            [colors]=\"pieChartColors\"\n            [legend]=\"pieChartLegend\">\n          </canvas>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-sm-12\">\n      <div class=\"chart-card\">\n        <div class=\"chart-card-header\">\n          <span>Sales by Product</span>\n        </div>\n        <div class=\"chart-card-body\">\n          <canvas *ngIf=\"isBrowser\" baseChart\n            [datasets]=\"barChartData\"\n            [labels]=\"barChartLabels\"\n            [options]=\"barChartOptions\"\n            [plugins]=\"barChartPlugins\"\n            [legend]=\"barChartLegend\"\n            [chartType]=\"barChartType\">\n          </canvas>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-sm-12\">\n      <div class=\"chart-card\">\n        <div class=\"chart-card-header\">\n          <span>Sales by device</span>\n        </div>\n        <div class=\"chart-card-body\">\n          <canvas *ngIf=\"isBrowser\" baseChart\n            [data]=\"doughnutChartData\"\n            [labels]=\"doughnutChartLabels\"\n            [colors]=\"doughnutChartColors\"\n            [chartType]=\"doughnutChartType\">\n          </canvas>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-sm-12\">\n      <div class=\"chart-card\">\n        <div class=\"chart-card-header\">\n          <span>Project Hours Distribution</span>\n        </div>\n        <div class=\"chart-card-body\">\n          <canvas *ngIf=\"isBrowser\" baseChart\n            [datasets]=\"radarChartData\"\n            [options]=\"radarChartOptions\"\n            [labels]=\"radarChartLabels\"\n            [chartType]=\"radarChartType\">\n          </canvas>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/echarts/echarts-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/echarts/echarts-page.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid content-wrapper\">\n  <h1 class=\"page-title\">Visualization Warehouse, We Offer a very\n    large variety of Cutting Edge products with animations that scale.\n    Our Integrations allow clients to directly edit charts via The UI Modeling\n    Any Domain Specified KPI Data with the RealStack Mobile, Desktop, Or Saas Web Application Options </h1>\n\n  <div class=\"callout-message-wrapper\">\n    <div class=\"callout-icon d-none d-md-block\">\n      Chart Menu\n    </div>\n    <div class=\"callout-message\">\n     <span>\n        <p class=\"viz-item\"><a routerLink=\"/charts/scalable-viz\" >D3 Extensions</a></p>\n       <p class=\"viz-item\"><a routerLink=\"/charts/stacked-charts\" >NGX Integrations</a></p>\n       <p class=\"viz-item\"><a routerLink=\"/charts/custom-charts\" >RealStack Visualizations</a></p>\n      </span>\n    </div>\n  </div>\n</div>\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-sm-12\">\n      <div class=\"chart-card\">\n        <div class=\"chart-card-header\">\n          <span>Page Views</span>\n        </div>\n        <div class=\"chart-card-body\">\n          <div *ngIf=\"isBrowser\" echarts [options]=\"multipleLineChartOption\" [theme]=\"'admin-template'\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-sm-12\">\n      <div class=\"chart-card\">\n        <div class=\"chart-card-header\">\n          <span>Transactions Completed - By Country</span>\n        </div>\n        <div class=\"chart-card-body\">\n          <div *ngIf=\"isBrowser\" echarts [options]=\"pieChartOption\" [theme]=\"'admin-template'\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-sm-12\">\n      <div class=\"chart-card\">\n        <div class=\"chart-card-header\">\n          <span>Monthly Transactions</span>\n        </div>\n        <div class=\"chart-card-body\">\n          <div *ngIf=\"isBrowser\" echarts [options]=\"barChartOption\" [theme]=\"'admin-template'\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-sm-12\">\n      <div class=\"chart-card\">\n        <div class=\"chart-card-header\">\n          <span>Sales</span>\n        </div>\n        <div class=\"chart-card-body\">\n          <div *ngIf=\"isBrowser\" echarts [options]=\"smoothLineOption\" [theme]=\"'admin-template'\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-sm-12\">\n      <div class=\"chart-card\">\n        <div class=\"chart-card-header\">\n          <span>Project Distribution</span>\n        </div>\n        <div class=\"chart-card-body\">\n          <div *ngIf=\"isBrowser\" echarts [options]=\"multiplePieChartOption\" [theme]=\"'admin-template'\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-sm-12\">\n      <div class=\"chart-card\">\n        <div class=\"chart-card-header\">\n          <span>Devices</span>\n        </div>\n        <div class=\"chart-card-body\">\n          <div *ngIf=\"isBrowser\" echarts [options]=\"doughnutChartOption\" [theme]=\"'admin-template'\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12\">\n      <div class=\"chart-card\">\n        <div class=\"chart-card-header\">\n          <span>Referral Source</span>\n        </div>\n        <div class=\"chart-card-body\">\n          <div *ngIf=\"isBrowser\" echarts [options]=\"areaStackChartOption\" [theme]=\"'admin-template'\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/ngx-charts/ngx-charts-page.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/ngx-charts/ngx-charts-page.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid content-wrapper\">\n  <h1 class=\"page-title\">Visualization Warehouse, We Offer a very\n    large variety of Cutting Edge products with animations that scale.\n    Our Integrations allow clients to directly edit charts via The UI Modeling\n    Any Domain Specified KPI Data with the RealStack Mobile, Desktop, Or Saas Web Application Options </h1>\n\n  <div class=\"callout-message-wrapper\">\n    <div class=\"callout-icon d-none d-md-block\">\n      Chart Menu\n    </div>\n    <div class=\"callout-message\">\n         <span>\n        <p class=\"viz-item\"><a routerLink=\"/charts/scalable-viz\" >D3 Extensions</a></p>\n       <p class=\"viz-item\"><a routerLink=\"/charts/stacked-charts\" >NGX Integrations</a></p>\n       <p class=\"viz-item\"><a routerLink=\"/charts/real-charts\" >RealStack Visualizations</a></p>\n      </span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12 chart-card\">\n      <div>\n        <div class=\"chart-card-header\">\n          <span>Sales by Country - This year</span>\n        </div>\n        <div class=\"chart-card-body bar-vertical\">\n          <ngx-charts-bar-vertical *ngIf=\"isBrowser\"\n            [scheme]=\"colorScheme\"\n            [results]=\"countriesData\"\n            [gradient]=\"verticalBarOptions.gradient\"\n            [xAxis]=\"verticalBarOptions.showXAxis\"\n            [yAxis]=\"verticalBarOptions.showYAxis\"\n            [legend]=\"verticalBarOptions.showLegend\"\n            [showXAxisLabel]=\"verticalBarOptions.showXAxisLabel\"\n            [showYAxisLabel]=\"verticalBarOptions.showYAxisLabel\"\n            [xAxisLabel]=\"verticalBarOptions.xAxisLabel\"\n            [yAxisLabel]=\"verticalBarOptions.yAxisLabel\"\n            [barPadding]=\"verticalBarOptions.barPadding\"\n            [showGridLines]=\"verticalBarOptions.showGridLines\">\n          </ngx-charts-bar-vertical>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 chart-card\">\n      <div>\n        <div class=\"chart-card-header\">\n          <span>Visitors distribution</span>\n        </div>\n        <div class=\"chart-card-body bar-horizontal\">\n          <ngx-charts-bar-horizontal-2d *ngIf=\"isBrowser\"\n            [scheme]=\"colorScheme\"\n            [results]=\"countriesData2\"\n            [legendPosition]=\"horizontalBarOptions.legendPosition\"\n            [xAxis]=\"horizontalBarOptions.showXAxis\"\n            [yAxis]=\"horizontalBarOptions.showYAxis\"\n            [legend]=\"horizontalBarOptions.showLegend\"\n            [showXAxisLabel]=\"horizontalBarOptions.showXAxisLabel\"\n            [showYAxisLabel]=\"horizontalBarOptions.showYAxisLabel\"\n            [xAxisLabel]=\"horizontalBarOptions.xAxisLabel\"\n            [barPadding]=\"horizontalBarOptions.barPadding\"\n            [groupPadding]=\"horizontalBarOptions.groupPadding\"\n            [showGridLines]=\"horizontalBarOptions.showGridLines\">\n          </ngx-charts-bar-horizontal-2d>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 chart-card\">\n      <div>\n        <div class=\"chart-card-header\">\n          <span>Contest Results - % of correct answers</span>\n        </div>\n        <div class=\"chart-card-body pie-grid\">\n          <ngx-charts-pie-grid *ngIf=\"isBrowser\"\n          [label]=\"'Points'\"\n          [scheme]=\"colorScheme\"\n          [results]=\"contestData\">\n          </ngx-charts-pie-grid>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 chart-card\">\n      <div>\n        <div class=\"chart-card-header\">\n          <span>Page Vistis</span>\n        </div>\n        <div class=\"chart-card-body line-chart\">\n          <ngx-charts-line-chart *ngIf=\"isBrowser\"\n          [scheme]=\"colorScheme\"\n          [results]=\"lineChartData\"\n          [legendPosition]=\"lineChartOptions.legendPosition\"\n          [xAxis]=\"lineChartOptions.showXAxis\"\n          [yAxis]=\"lineChartOptions.showYAxis\"\n          [legend]=\"lineChartOptions.showLegend\"\n          [showXAxisLabel]=\"lineChartOptions.showXAxisLabel\"\n          [showYAxisLabel]=\"lineChartOptions.showYAxisLabel\"\n          [roundDomains]=\"lineChartOptions.roundDomains\"\n          [autoScale]=\"lineChartOptions.autoScale\"\n          [showGridLines]=\"lineChartOptions.showGridLines\">\n          </ngx-charts-line-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/rcharts/rcharts.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/rcharts/rcharts.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid content-wrapper\">\n  <h1 class=\"page-title\">Visualization Warehouse, We Offer a very\n    large variety of Cutting Edge products with animations that scale.\n    Our Integrations allow clients to directly edit charts via The UI Modeling\n    Any Domain Specified KPI Data with the RealStack Mobile, Desktop, Or Saas Web Application Options </h1>\n\n  <div class=\"callout-message-wrapper\">\n    <div class=\"callout-icon d-none d-md-block\">\n      Chart Menu\n    </div>\n    <div class=\"callout-message\">\n     <span>\n        <p class=\"viz-item\"><a routerLink=\"/charts/scalable-viz\" >D3 Extensions</a></p>\n       <p class=\"viz-item\"><a routerLink=\"/charts/stacked-charts\" >NGX Integrations</a></p>\n       <p class=\"viz-item\"><a routerLink=\"/charts/custom-charts\" >RealStack Visualizations</a></p>\n      </span>\n    </div>\n  </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-sm-12\">\n      <div class=\"chart-card\">\n        <div class=\"chart-card-header\">\n          <span>Page Views</span>\n        </div>\n        <div class=\"chart-card-body\">\n          <div *ngIf=\"isBrowser\" echarts [options]=\"multipleLineChartOption\" [theme]=\"'admin-template'\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-sm-12\">\n      <div class=\"chart-card\">\n        <div class=\"chart-card-header\">\n          <span>Transactions Completed - By Country</span>\n        </div>\n        <div class=\"chart-card-body\">\n          <div *ngIf=\"isBrowser\" echarts [options]=\"pieChartOption\" [theme]=\"'admin-template'\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-sm-12\">\n      <div class=\"chart-card\">\n        <div class=\"chart-card-header\">\n          <span>Monthly Transactions</span>\n        </div>\n        <div class=\"chart-card-body\">\n          <div *ngIf=\"isBrowser\" echarts [options]=\"barChartOption\" [theme]=\"'admin-template'\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-sm-12\">\n      <div class=\"chart-card\">\n        <div class=\"chart-card-header\">\n          <span>Sales</span>\n        </div>\n        <div class=\"chart-card-body\">\n          <div *ngIf=\"isBrowser\" echarts [options]=\"smoothLineOption\" [theme]=\"'admin-template'\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-sm-12\">\n      <div class=\"chart-card\">\n        <div class=\"chart-card-header\">\n          <span>Project Distribution</span>\n        </div>\n        <div class=\"chart-card-body\">\n          <div *ngIf=\"isBrowser\" echarts [options]=\"multiplePieChartOption\" [theme]=\"'admin-template'\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-sm-12\">\n      <div class=\"chart-card\">\n        <div class=\"chart-card-header\">\n          <span>Devices</span>\n        </div>\n        <div class=\"chart-card-body\">\n          <div *ngIf=\"isBrowser\" echarts [options]=\"doughnutChartOption\" [theme]=\"'admin-template'\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12\">\n      <div class=\"chart-card\">\n        <div class=\"chart-card-header\">\n          <span>Referral Source</span>\n        </div>\n        <div class=\"chart-card-body\">\n          <div *ngIf=\"isBrowser\" echarts [options]=\"areaStackChartOption\" [theme]=\"'admin-template'\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/real-ngx/realngx.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/real-ngx/realngx.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid content-wrapper\">\n  <h1 class=\"page-title\">Visualization Warehouse, We Offer a very\n    large variety of Cutting Edge products with animations that scale.\n    Our Integrations allow clients to directly edit charts via The UI Modeling\n    Any Domain Specified KPI Data with the RealStack Mobile, Desktop, Or Saas Web Application Options </h1>\n\n  <div class=\"callout-message-wrapper\">\n    <div class=\"callout-icon d-none d-md-block\">\n      Chart Menu\n    </div>\n    <div class=\"callout-message\">\n     <span>\n        <p class=\"viz-item\"><a routerLink=\"/charts/scalable-viz\" >D3 Extensions</a></p>\n       <p class=\"viz-item\"><a routerLink=\"/charts/stacked-charts\" >NGX Integrations</a></p>\n       <p class=\"viz-item\"><a routerLink=\"/charts/custom-charts\" >RealStack Visualizations</a></p>\n      </span>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12 chart-card\">\n      <div>\n        <div class=\"chart-card-header\">\n          <span>Covid - By Country</span>\n        </div>\n        <div class=\"chart-card-body bar-vertical\">\n          <ngx-charts-bar-vertical *ngIf=\"isBrowser\"\n            [scheme]=\"colorScheme\"\n            [results]=\"countriesData\"\n            [gradient]=\"verticalBarOptions.gradient\"\n            [xAxis]=\"verticalBarOptions.showXAxis\"\n            [yAxis]=\"verticalBarOptions.showYAxis\"\n            [legend]=\"verticalBarOptions.showLegend\"\n            [showXAxisLabel]=\"verticalBarOptions.showXAxisLabel\"\n            [showYAxisLabel]=\"verticalBarOptions.showYAxisLabel\"\n            [xAxisLabel]=\"verticalBarOptions.xAxisLabel\"\n            [yAxisLabel]=\"verticalBarOptions.yAxisLabel\"\n            [barPadding]=\"verticalBarOptions.barPadding\"\n            [showGridLines]=\"verticalBarOptions.showGridLines\">\n          </ngx-charts-bar-vertical>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 chart-card\">\n      <div>\n        <div class=\"chart-card-header\">\n          <span>Active Covid Cases Per Million By Country</span>\n        </div>\n        <div class=\"chart-card-body bar-horizontal\">\n          <ngx-charts-bar-horizontal-2d *ngIf=\"isBrowser\"\n            [scheme]=\"colorScheme\"\n            [results]=\"countriesData2\"\n            [legendPosition]=\"horizontalBarOptions.legendPosition\"\n            [xAxis]=\"horizontalBarOptions.showXAxis\"\n            [yAxis]=\"horizontalBarOptions.showYAxis\"\n            [legend]=\"horizontalBarOptions.showLegend\"\n            [showXAxisLabel]=\"horizontalBarOptions.showXAxisLabel\"\n            [showYAxisLabel]=\"horizontalBarOptions.showYAxisLabel\"\n            [xAxisLabel]=\"horizontalBarOptions.xAxisLabel\"\n            [barPadding]=\"horizontalBarOptions.barPadding\"\n            [groupPadding]=\"horizontalBarOptions.groupPadding\"\n            [showGridLines]=\"horizontalBarOptions.showGridLines\">\n          </ngx-charts-bar-horizontal-2d>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 chart-card\">\n      <div>\n        <div class=\"chart-card-header\">\n          <span>Contest Results - % of correct answers</span>\n        </div>\n        <div class=\"chart-card-body pie-grid\">\n          <ngx-charts-pie-grid *ngIf=\"isBrowser\"\n          [label]=\"'Points'\"\n          [scheme]=\"colorScheme\"\n          [results]=\"contestData\">\n          </ngx-charts-pie-grid>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 chart-card\">\n      <div>\n        <div class=\"chart-card-header\">\n          <span>Page Vistis</span>\n        </div>\n        <div class=\"chart-card-body line-chart\">\n          <ngx-charts-line-chart *ngIf=\"isBrowser\"\n          [scheme]=\"colorScheme\"\n          [results]=\"lineChartData\"\n          [legendPosition]=\"lineChartOptions.legendPosition\"\n          [xAxis]=\"lineChartOptions.showXAxis\"\n          [yAxis]=\"lineChartOptions.showYAxis\"\n          [legend]=\"lineChartOptions.showLegend\"\n          [showXAxisLabel]=\"lineChartOptions.showXAxisLabel\"\n          [showYAxisLabel]=\"lineChartOptions.showYAxisLabel\"\n          [roundDomains]=\"lineChartOptions.roundDomains\"\n          [autoScale]=\"lineChartOptions.autoScale\"\n          [showGridLines]=\"lineChartOptions.showGridLines\">\n          </ngx-charts-line-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/realjs/realjs-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/realjs/realjs-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid content-wrapper\">\n  <h1 class=\"page-title\">Visualization Warehouse, We Offer a very large variety of Cutting Edge products with animations that can scale and are edited by clients directly on The User's Interface with\n    Any Domain Data from the RealStack Mobile, Desktop, Or Saas Web Application Options </h1>\n\n  <div class=\"callout-message-wrapper\">\n    <div class=\"callout-icon d-none d-md-block\">\n  Chart Menu\n    </div>\n    <div class=\"callout-message\">\n     <span>\n        <p class=\"viz-item\"><a routerLink=\"/charts/scalable-viz\" >D3 Extensions</a></p>\n       <p class=\"viz-item\"><a routerLink=\"/charts/stacked-charts\" >NGX Integrations</a></p>\n       <p class=\"viz-item\"><a routerLink=\"/charts/custom-charts\" >RealStack Visualizations</a></p>\n      </span>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-sm-12\">\n      <div class=\"chart-card\">\n        <div class=\"chart-card-header\">\n          <span>Total transactions</span>\n        </div>\n        <div class=\"chart-card-body\">\n          <canvas *ngIf=\"isBrowser\" baseChart\n            [datasets]=\"lineChartData\"\n            [labels]=\"lineChartLabels\"\n            [options]=\"lineChartOptions\"\n            [colors]=\"lineChartColors\"\n            [legend]=\"lineChartLegend\"\n            [chartType]=\"lineChartType\">\n          </canvas>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-sm-12\">\n      <div class=\"chart-card\">\n        <div class=\"chart-card-header\">\n          <span>Sales by source</span>\n        </div>\n        <div class=\"chart-card-body\">\n          <canvas *ngIf=\"isBrowser\" baseChart\n            [data]=\"pieChartData\"\n            [labels]=\"pieChartLabels\"\n            [chartType]=\"pieChartType\"\n            [options]=\"pieChartOptions\"\n            [colors]=\"pieChartColors\"\n            [legend]=\"pieChartLegend\">\n          </canvas>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-sm-12\">\n      <div class=\"chart-card\">\n        <div class=\"chart-card-header\">\n          <span>Sales by Product</span>\n        </div>\n        <div class=\"chart-card-body\">\n          <canvas *ngIf=\"isBrowser\" baseChart\n            [datasets]=\"barChartData\"\n            [labels]=\"barChartLabels\"\n            [options]=\"barChartOptions\"\n            [plugins]=\"barChartPlugins\"\n            [legend]=\"barChartLegend\"\n            [chartType]=\"barChartType\">\n          </canvas>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-sm-12\">\n      <div class=\"chart-card\">\n        <div class=\"chart-card-header\">\n          <span>Sales by device</span>\n        </div>\n        <div class=\"chart-card-body\">\n          <canvas *ngIf=\"isBrowser\" baseChart\n            [data]=\"doughnutChartData\"\n            [labels]=\"doughnutChartLabels\"\n            [colors]=\"doughnutChartColors\"\n            [chartType]=\"doughnutChartType\">\n          </canvas>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-6 col-sm-12\">\n      <div class=\"chart-card\">\n        <div class=\"chart-card-header\">\n          <span>Project Hours Distribution</span>\n        </div>\n        <div class=\"chart-card-body\">\n          <canvas *ngIf=\"isBrowser\" baseChart\n            [datasets]=\"radarChartData\"\n            [options]=\"radarChartOptions\"\n            [labels]=\"radarChartLabels\"\n            [chartType]=\"radarChartType\">\n          </canvas>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/charts/chartjs/chartjs-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/charts/chartjs/chartjs-page.component.ts ***!
  \**********************************************************/
/*! exports provided: ChartsJsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsJsPageComponent", function() { return ChartsJsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_4__);





let ChartsJsPageComponent = class ChartsJsPageComponent {
    constructor(platformId, themeService) {
        this.platformId = platformId;
        this.themeService = themeService;
        // Line Chart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Transactions' },
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                borderColor: '#035388',
                backgroundColor: 'rgba(3,83,136,0.4)',
            },
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartPlugins = [];
        // Pie Chart
        this.pieChartOptions = {
            responsive: true,
            legend: {
                position: 'right'
            }
        };
        this.pieChartLabels = ['In Store Sales', 'Website Sales', 'Email Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        this.pieChartLegend = true;
        this.pieChartColors = [
            {
                backgroundColor: ['#035388', '#40c3f7', '#b3ecff'],
            },
        ];
        // Bar Chart
        this.barChartOptions = {
            responsive: true
        };
        this.barChartLabels = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [];
        this.barChartData = [
            {
                data: [165, 159, 180, 181, 156, 155, 140, 200],
                label: 'Product A',
                backgroundColor: '#035388',
                borderColor: '#035388',
                hoverBackgroundColor: 'rgb(81,107,145)',
                hoverBorderColor: 'rgb(81,107,145)'
            },
            {
                data: [128, 148, 140, 139, 186, 127, 190, 230],
                label: 'Product B',
                backgroundColor: '#40c3f7',
                borderColor: '#40c3f7'
            }
        ];
        // Doughnut
        this.doughnutChartLabels = ['Mobile', 'Desktop', 'Tablet'];
        this.doughnutChartData = [250, 130, 50];
        this.doughnutChartType = 'doughnut';
        this.doughnutChartColors = [
            {
                backgroundColor: ['#035388', '#40c3f7', '#b3ecff'],
            },
        ];
        // Radar
        this.radarChartOptions = {
            responsive: true,
        };
        this.radarChartLabels = ['Coding', 'Designing', 'Testing', 'Refactoring', 'Meetings', 'Discovery'];
        this.radarChartData = [
            {
                data: [80, 59, 70, 30, 46, 15],
                label: 'Admin Template'
            },
            {
                data: [60, 48, 20, 19, 16, 50],
                label: 'Site Template'
            }
        ];
        this.radarChartType = 'radar';
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId);
        this.setTheme();
    }
    setTheme() {
        const overrides = {
            legend: {
                labels: {
                    fontColor: '#999999',
                    boxWidth: 20,
                    padding: 20
                },
            },
            scales: {
                xAxes: [{
                        ticks: { fontColor: '#999999' },
                        gridLines: { color: 'rgba(255,255,255,0.1)' }
                    }],
                yAxes: [{
                        ticks: { fontColor: '#999999' },
                        gridLines: { color: 'rgba(255,255,255,0.1)' }
                    }]
            },
            tooltips: {
                enabled: true,
                backgroundColor: '#FFF',
                titleFontColor: '#999999',
                bodyFontColor: '#999999',
                caretPadding: 4,
                xPadding: 10,
                yPadding: 10,
                borderColor: '#999999',
                borderWidth: 1
            }
        };
        chart_js__WEBPACK_IMPORTED_MODULE_4__["defaults"].global.defaultFontColor = '#999999';
        chart_js__WEBPACK_IMPORTED_MODULE_4__["defaults"].global.defaultFontFamily = 'Nunito, sans-serif';
        chart_js__WEBPACK_IMPORTED_MODULE_4__["defaults"].global.responsive = true;
        this.themeService.setColorschemesOptions(overrides);
    }
};
ChartsJsPageComponent.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ThemeService"] }
];
ChartsJsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chartjs-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chartjs-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/chartjs/chartjs-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chartjs-page.scss */ "./src/app/charts/chartjs/chartjs-page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]))
], ChartsJsPageComponent);



/***/ }),

/***/ "./src/app/charts/chartjs/chartjs-page.scss":
/*!**************************************************!*\
  !*** ./src/app/charts/chartjs/chartjs-page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n:host {\n  --page-title-color: rgb(var(--palette-primary-rgb));\n  --callout-message-color: rgb(var(--palette-info-rgb));\n  --callout-message-background: rgb(var(--palette-info-light-rgb));\n  --card-background: rgb(var(--palette-white-rgb));\n  --card-title-color: rgb(var(--palette-grey-8-rgb));\n  --card-border-color: rgb(var(--palette-grey-2-rgb));\n  --border-radius: 6px;\n  --page-padding: 60px 40px;\n  --page-spacing: 10px;\n}\n.content-wrapper {\n  padding: var(--page-padding);\n}\n.content-wrapper .page-title {\n  color: var(--page-title-color);\n  font-size: 30px;\n  margin-bottom: calc(var(--page-spacing) * 3);\n}\n.content-wrapper .callout-message-wrapper {\n  display: flex;\n  color: var(--callout-message-color);\n  background-color: var(--callout-message-background);\n  padding: calc(var(--page-spacing) * 2.5);\n  border-radius: var(--border-radius);\n  margin-bottom: calc(var(--page-spacing) * 3);\n}\n.content-wrapper .callout-message-wrapper .callout-link {\n  color: var(--callout-message-color);\n  font-weight: 700;\n}\n.content-wrapper .callout-message-wrapper .callout-icon {\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-right: calc(var(--page-spacing) * 1.5);\n}\n.content-wrapper .callout-message-wrapper .callout-icon i {\n  font-size: 40px;\n}\n.content-wrapper .callout-message-wrapper .callout-message {\n  flex-grow: 1;\n  padding-left: calc(var(--page-spacing) * 1.5);\n  border-left: 1px solid var(--callout-message-color);\n}\n.content-wrapper .chart-card {\n  padding: 0px;\n  background-color: var(--card-background);\n  margin-bottom: calc(var(--page-spacing) * 3);\n  border-radius: var(--border-radius);\n  box-shadow: 0px 10px 20px rgba(var(--palette-grey-3-rgb), 0.15),  0px 3px 6px rgba(var(--palette-grey-3-rgb), 0.1);\n}\n.content-wrapper .chart-card-header {\n  border-bottom: 1px solid var(--card-border-color);\n  padding: calc(var(--page-spacing) * 1.5) calc(var(--page-spacing) * 2.5);\n  font-weight: 600;\n  text-align: center;\n  color: var(--card-title-color);\n}\n.content-wrapper .chart-card-body {\n  padding: calc(var(--page-spacing) * 2.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bndpc2UvbWVhbi9zcmMvdGhlbWUvcGFsZXR0ZXMvc2hhcmVkLnNjc3MiLCIvVXNlcnMvc2hhd253aXNlL21lYW4vc3JjL3RoZW1lL3BhbGV0dGVzL21vZGUuc2NzcyIsIi9Vc2Vycy9zaGF3bndpc2UvbWVhbi9zcmMvYXBwL2NoYXJ0cy9jaGFydGpzL2NoYXJ0anMtcGFnZS5zY3NzIiwic3JjL2FwcC9jaGFydHMvY2hhcnRqcy9jaGFydGpzLXBhZ2Uuc2NzcyIsIi9Vc2Vycy9zaGF3bndpc2UvbWVhbi9zcmMvdGhlbWUvbWl4aW5zL2VsZXZhdGlvbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUNKQTtFQUVFLG1EQUFBO0VBQ0EscURBQUE7RUFDQSxnRUFBQTtFQUNBLGdEQUFBO0VBQ0Esa0RBQUE7RUFDQSxtREFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQzJDRjtBRHhDQTtFQUNFLDRCQUFBO0FDMkNGO0FEekNFO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7QUMyQ0o7QUR4Q0U7RUFDRSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSxtREFBQTtFQUNBLHdDQUFBO0VBQ0EsbUNBQUE7RUFDQSw0Q0FBQTtBQzBDSjtBRHhDSTtFQUNFLG1DQUFBO0VBQ0EsZ0JBQUE7QUMwQ047QUR2Q0k7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7QUN5Q047QUR4Q007RUFDRSxlQUFBO0FDMENSO0FEdkNJO0VBQ0UsWUFBQTtFQUNBLDZDQUFBO0VBQ0EsbURBQUE7QUN5Q047QURyQ0U7RUFDRSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSw0Q0FBQTtFQUNBLG1DQUFBO0VFNEJBLGtIQUFBO0FEWUo7QURwQ0U7RUFDRSxpREFBQTtFQUNBLHdFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FDc0NKO0FEbkNFO0VBQ0Usd0NBQUE7QUNxQ0oiLCJmaWxlIjoic3JjL2FwcC9jaGFydHMvY2hhcnRqcy9jaGFydGpzLXBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFNoYXJlZFxuKi9cblxuQGltcG9ydCAncHJlZmVyZW5jZXMnO1xuQGltcG9ydCAnaW50ZXJmYWNlJztcbkBpbXBvcnQgJ21vZGUnO1xuXG4vLyBBbiBhYnN0cmFjdCB3YXkgdG8gcHJvdmlkZSBjb2xvcnMuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGFuIGludGVyZmFjZSB0byBib3RoIFNhc3MgdmFyaWFibGVzIGFuZCBDU1MgNCB2YXJpYWJsZXMgYmFzZWQgY29sb3IgcGFsZXR0ZXMuXG5AZnVuY3Rpb24gcGFsZXR0ZS1jb2xvcigkY29sb3ItbmFtZSwgJGFscGhhOiAxKSB7XG4gIC8vICRjb2xvci1wYWxldHRlLW1vZGUgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY2hvb3Nlbi1wYWxldHRlICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBtb2RlLnNjc3NcbiAgLy8gJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlICAgPT4gIERlZmluZWQgaW4gaW50ZXJmYWNlLnNjc3NcbiAgLy8gJGNzczQtdmFyLXByZWZpeCAgICAgICAgICAgPT4gIERlZmluZWQgaW4gcHJlZmVyZW5jZXMuc2Nzc1xuICAvLyAkY3NzNC1jb2xvci1mb3JtYXQgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG5cbiAgQGlmICgkY29sb3ItcGFsZXR0ZS1tb2RlID09ICdjc3MtNCcpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjb2xvci1wYWxldHRlLWludGVyZmFjZTtcblxuICAgICRjb2xvci12YXJpYWJsZS1pbmRleDogaW5kZXgoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlLWluZGV4KSA9PSAnbnVtYmVyJykge1xuICAgICAgJGNvbG9yLXZhcmlhYmxlLW5hbWU6IG50aCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci12YXJpYWJsZS1pbmRleCk7XG5cbiAgICAgIEBpZiAoJGFscGhhID4gMCBhbmQgJGFscGhhIDwgMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYmEodmFyKCcgKyAkY3NzNC12YXItcHJlZml4ICsgJGNvbG9yLXZhcmlhYmxlLW5hbWUgKyAnLScgKyAkY3NzNC1jb2xvci1mb3JtYXQgKycpLCAjeyRhbHBoYX0pJ307XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYih2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArICcpKSd9O1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci1uYW1lfSkgd2FzIG5vdCBmb3VuZCBvbiBDb2xvciBQYWxldHRlIGRlZmluaXRpb24uIE1ha2Ugc3VyZSBpdCdzIGRlZmluZWQgaW4gdGhlIHRoZW1lL3BhbGV0dGVzL2ludGVyZmFjZS5zY3NzIGZpbGVcIjtcbiAgICB9XG4gIH0gQGVsc2UgaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ3Nhc3MnKSB7XG4gICAgJHBhbGV0dGUtcmVmZXJlbmNlOiAkY2hvb3Nlbi1wYWxldHRlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlOiBtYXAtZ2V0KCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLW5hbWUpO1xuXG4gICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBTYXNzIGNvbG9yXG4gICAgQGlmICh0eXBlX29mKCRjb2xvci12YXJpYWJsZSkgPT0gJ2NvbG9yJykge1xuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gcmdiYSgkY29sb3ItdmFyaWFibGUsICRhbHBoYSk7XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICRjb2xvci12YXJpYWJsZTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICBAZXJyb3IgXCJBbHBoYSAoI3skYWxwaGF9KSBtdXN0IGJlIGEgbnVtYmVyXCI7XG4gICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICBAZXJyb3IgXCJDb2xvciAoI3skY29sb3ItdmFyaWFibGV9KSBpcyBub3QgYSBTYXNzIGNvbG9yXCI7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAZXJyb3IgJ05vIENvbG9yIFBhbGV0dGUgbW9kZSBzZWxlY3RlZCBpbiB0aGVtZS9wYWxldHRlcy9wcmVmZXJlbmNlcy5zY3NzJztcbiAgfVxufVxuIiwiLypcbiAgQ1NTIDQgTW9kZVxuKi9cbiRjb2xvci1wYWxldHRlLW1vZGU6ICdjc3MtNCc7XG5cblxuLypcbiAgU2FzcyBNb2RlXG4qL1xuLy8gQGltcG9ydCAnY29yZSc7XG4vL1xuLy8gJGNvbG9yLXBhbGV0dGUtbW9kZTogJ3Nhc3MnO1xuLy9cbi8vIC8vIEltcG9ydCB0aGUgZGVmaW5pdGlvbnMgb2YgdGhlIHBhbGV0dGUgeW91IHdhbnQgdG8gdXNlXG4vLyBAaW1wb3J0ICdwYWxldHRlLTEvZGVmaW5pdGlvbnMnO1xuLy8gLy8gQGltcG9ydCAncGFsZXR0ZS0yL2RlZmluaXRpb25zJztcbi8vXG4vLyAvLyBBc3NpZ24gYSBwYXJ0aWN1bGFyIENvbG9yIFBhbGV0dGUgdG8gdGhlICdjaG9vc2VuLXBhbGV0dGUnIHBvaW50ZXIuXG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlIHdpbGwgYmUgYSBTYXNzIG1hcCBwb2ludGluZyB0byBhbm90aGVyIGNvbG9yIHBhbGV0dGUgU2FzcyBtYXBcbi8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMSk7XG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlOiBidWlsZFNhc3NQYWxldHRlKCRwYWxldHRlLTIpO1xuIiwiQGltcG9ydCAnc2hhcmVkJztcblxuOmhvc3Qge1xuICAvLyBEZWZhdWx0IHZhcmlhYmxlc1xuICAtLXBhZ2UtdGl0bGUtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeScpfTtcbiAgLS1jYWxsb3V0LW1lc3NhZ2UtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignaW5mbycpfTtcbiAgLS1jYWxsb3V0LW1lc3NhZ2UtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCdpbmZvLWxpZ2h0Jyl9O1xuICAtLWNhcmQtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCd3aGl0ZScpfTtcbiAgLS1jYXJkLXRpdGxlLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktOCcpfTtcbiAgLS1jYXJkLWJvcmRlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdncmV5LTInKX07XG4gIC0tYm9yZGVyLXJhZGl1czogNnB4O1xuICAtLXBhZ2UtcGFkZGluZzogNjBweCA0MHB4O1xuICAtLXBhZ2Utc3BhY2luZzogMTBweDtcbn1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtcGFkZGluZyk7XG5cbiAgLnBhZ2UtdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1wYWdlLXRpdGxlLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMyk7XG4gIH1cblxuICAuY2FsbG91dC1tZXNzYWdlLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6IHZhcigtLWNhbGxvdXQtbWVzc2FnZS1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FsbG91dC1tZXNzYWdlLWJhY2tncm91bmQpO1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDIuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMyk7XG5cbiAgICAuY2FsbG91dC1saW5rIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1jYWxsb3V0LW1lc3NhZ2UtY29sb3IpO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG5cbiAgICAuY2FsbG91dC1pY29uIHtcbiAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAxLjUpO1xuICAgICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNhbGxvdXQtbWVzc2FnZSB7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDEuNSk7XG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWNhbGxvdXQtbWVzc2FnZS1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgLmNoYXJ0LWNhcmQge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJhY2tncm91bmQpO1xuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDMpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIEBpbmNsdWRlIGVsZXZhdGlvbih6MywgJ2dyZXktMycpO1xuICB9XG5cbiAgLmNoYXJ0LWNhcmQtaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXItY29sb3IpO1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDEuNSkgY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMi41KTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tY2FyZC10aXRsZS1jb2xvcik7XG4gIH1cblxuICAuY2hhcnQtY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyLjUpO1xuICB9XG59XG4iLCIvKlxuICBTaGFyZWRcbiovXG4vKlxuICBDU1MgNCBNb2RlXG4qL1xuLypcbiAgU2FzcyBNb2RlXG4qL1xuLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbi8qXG4gIFNoYXJlZFxuKi9cbi8qXG4gIENTUyA0IE1vZGVcbiovXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vKlxuICBTaGFyZWRcbiovXG4vKlxuICBDU1MgNCBNb2RlXG4qL1xuLypcbiAgU2FzcyBNb2RlXG4qL1xuLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbjpob3N0IHtcbiAgLS1wYWdlLXRpdGxlLWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpO1xuICAtLWNhbGxvdXQtbWVzc2FnZS1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtaW5mby1yZ2IpKTtcbiAgLS1jYWxsb3V0LW1lc3NhZ2UtYmFja2dyb3VuZDogcmdiKHZhcigtLXBhbGV0dGUtaW5mby1saWdodC1yZ2IpKTtcbiAgLS1jYXJkLWJhY2tncm91bmQ6IHJnYih2YXIoLS1wYWxldHRlLXdoaXRlLXJnYikpO1xuICAtLWNhcmQtdGl0bGUtY29sb3I6IHJnYih2YXIoLS1wYWxldHRlLWdyZXktOC1yZ2IpKTtcbiAgLS1jYXJkLWJvcmRlci1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtZ3JleS0yLXJnYikpO1xuICAtLWJvcmRlci1yYWRpdXM6IDZweDtcbiAgLS1wYWdlLXBhZGRpbmc6IDYwcHggNDBweDtcbiAgLS1wYWdlLXNwYWNpbmc6IDEwcHg7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLXBhZGRpbmcpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAucGFnZS10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLXRpdGxlLWNvbG9yKTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAzKTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmNhbGxvdXQtbWVzc2FnZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IHZhcigtLWNhbGxvdXQtbWVzc2FnZS1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbGxvdXQtbWVzc2FnZS1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMi41KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDMpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2FsbG91dC1tZXNzYWdlLXdyYXBwZXIgLmNhbGxvdXQtbGluayB7XG4gIGNvbG9yOiB2YXIoLS1jYWxsb3V0LW1lc3NhZ2UtY29sb3IpO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2FsbG91dC1tZXNzYWdlLXdyYXBwZXIgLmNhbGxvdXQtaWNvbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMS41KTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmNhbGxvdXQtbWVzc2FnZS13cmFwcGVyIC5jYWxsb3V0LWljb24gaSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmNhbGxvdXQtbWVzc2FnZS13cmFwcGVyIC5jYWxsb3V0LW1lc3NhZ2Uge1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMS41KTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1jYWxsb3V0LW1lc3NhZ2UtY29sb3IpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2hhcnQtY2FyZCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iYWNrZ3JvdW5kKTtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEodmFyKC0tcGFsZXR0ZS1ncmV5LTMtcmdiKSwgMC4xNSksICAwcHggM3B4IDZweCByZ2JhKHZhcigtLXBhbGV0dGUtZ3JleS0zLXJnYiksIDAuMSk7XG59XG4uY29udGVudC13cmFwcGVyIC5jaGFydC1jYXJkLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jYXJkLWJvcmRlci1jb2xvcik7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDEuNSkgY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMi41KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tY2FyZC10aXRsZS1jb2xvcik7XG59XG4uY29udGVudC13cmFwcGVyIC5jaGFydC1jYXJkLWJvZHkge1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyLjUpO1xufSIsIkBpbXBvcnQgJ3V0aWxzJztcbkBpbXBvcnQgJy4uL3BhbGV0dGVzL3NoYXJlZCc7XG5cbiRlbGV2YXRpb25zLXNwZWNzOiAoXG4gIHoxOiAoXG4gICAgKHNoYWRvdzogMHB4IDFweCAzcHgsIG9wYWNpdHk6IDAuMTIpLFxuICAgIChzaGFkb3c6IDBweCAxcHggMnB4LCBvcGFjaXR5OiAwLjI0KVxuICApLFxuICB6MjogKFxuICAgIChzaGFkb3c6IDBweCAzcHggNnB4LCBvcGFjaXR5OiAwLjE1KSxcbiAgICAoc2hhZG93OiAwcHggMnB4IDRweCwgb3BhY2l0eTogMC4xMilcbiAgKSxcbiAgejM6IChcbiAgICAoc2hhZG93OiAwcHggMTBweCAyMHB4LCBvcGFjaXR5OiAwLjE1KSxcbiAgICAoc2hhZG93OiAwcHggM3B4IDZweCwgb3BhY2l0eTogMC4xMClcbiAgKSxcbiAgejQ6IChcbiAgICAoc2hhZG93OiAwcHggMTVweCAyNXB4LCBvcGFjaXR5OiAwLjE1KSxcbiAgICAoc2hhZG93OiAwcHggNXB4IDEwcHgsIG9wYWNpdHk6IDAuMDUpXG4gICksXG4gIHo1OiAoXG4gICAgKHNoYWRvdzogMHB4IDIwcHggNDBweCwgb3BhY2l0eTogMC4yMClcbiAgKVxuKTtcblxuLy8gQG1peGluIGVsZXZhdGlvbigkejogejEsICRjb2xvcjogI0NDQykge1xuQG1peGluIGVsZXZhdGlvbigkejogejEsICRjb2xvcjogJ2dyZXktMicpIHtcbiAgJHNoYWRvd3MtcmVmZXJlbmNlOiAkZWxldmF0aW9ucy1zcGVjcztcblxuICAvLyBDaGVjayBpZiB3ZSBoYXZlIGEgc3BlYyBmb3IgdGhlIGRlc2lyZWQgc2hhZG93XG4gIEBpZiBtYXAtaGFzLWtleSgkc2hhZG93cy1yZWZlcmVuY2UsICR6KSB7XG4gICAgLy8gQWNjdW11bGF0ZSBtdWx0aXBsZSBzaGFkb3cgdmFsdWVzIGluIHRoaXMgbGlzdFxuICAgICR6LXNoYWRvd3MtdmFsdWVzOiAoKTtcbiAgICAvLyBHZXQgc2hhZG93cyBtYXBcbiAgICAkei1zaGFkb3dzOiBtYXAtZ2V0KCRzaGFkb3dzLXJlZmVyZW5jZSwgJHopO1xuXG4gICAgLy8gQGVycm9yICR6LXNoYWRvd3M7XG5cbiAgICAvLyBNdWx0aXBsZSBzaGFkb3dzIGNvbWJpbmVkXG4gICAgQGlmICh0eXBlX29mKCR6LXNoYWRvd3MpID09ICdsaXN0Jykge1xuICAgICAgQGVhY2ggJHotc2hhZG93IGluICR6LXNoYWRvd3Mge1xuICAgICAgICBAaWYgKHR5cGVfb2YoJHotc2hhZG93KSA9PSAnbWFwJykge1xuICAgICAgICAgICRzaGFkb3c6IG1hcC1nZXQoJHotc2hhZG93LCBzaGFkb3cpO1xuICAgICAgICAgICRvcGFjaXR5OiBtYXAtZ2V0KCR6LXNoYWRvdywgb3BhY2l0eSk7XG5cbiAgICAgICAgICAvLyBAZXJyb3IgJHotc2hhZG93O1xuICAgICAgICAgIC8vIEBlcnJvciAkc2hhZG93O1xuICAgICAgICAgIC8vIEBlcnJvciAkb3BhY2l0eTtcblxuICAgICAgICAgIC8vICRzaGFkb3ctdmFsdWU6ICRzaGFkb3cgKyAnICcgKyByZ2JhKCRjb2xvciwgJG9wYWNpdHkpO1xuICAgICAgICAgICRzaGFkb3ctdmFsdWU6ICRzaGFkb3cgKyAnICcgKyBwYWxldHRlLWNvbG9yKCRjb2xvciwgJG9wYWNpdHkpO1xuXG4gICAgICAgICAgLy8gQGVycm9yICRzaGFkb3ctdmFsdWU7XG5cbiAgICAgICAgICAkei1zaGFkb3dzLXZhbHVlczogYXBwZW5kKCR6LXNoYWRvd3MtdmFsdWVzLCAkc2hhZG93LXZhbHVlKTtcblxuICAgICAgICAgIC8vIEBlcnJvciAkei1zaGFkb3dzLXZhbHVlcztcbiAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgQGVycm9yICdJbnZhbGlkIHNoYWRvdyBkZWZpbml0aW9uIGZvciBhcmd1bWVudCAkei1zaGFkb3c6IGAjeyR6LXNoYWRvd31gJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKHR5cGVfb2YoJHotc2hhZG93cykgPT0gJ21hcCcpIHtcbiAgICAgIC8vIFNpbmdsZSBzaGFkb3dcbiAgICAgICRzaGFkb3c6IG1hcC1nZXQoJHotc2hhZG93cywgc2hhZG93KTtcbiAgICAgICRvcGFjaXR5OiBtYXAtZ2V0KCR6LXNoYWRvd3MsIG9wYWNpdHkpO1xuXG4gICAgICAvLyBAZXJyb3IgJHotc2hhZG93O1xuICAgICAgLy8gQGVycm9yICRzaGFkb3c7XG4gICAgICAvLyBAZXJyb3IgJG9wYWNpdHk7XG5cbiAgICAgIC8vICRzaGFkb3ctdmFsdWU6ICRzaGFkb3cgKyAnICcgKyByZ2JhKCRjb2xvciwgJG9wYWNpdHkpO1xuICAgICAgJHNoYWRvdy12YWx1ZTogJHNoYWRvdyArICcgJyArIHBhbGV0dGUtY29sb3IoJGNvbG9yLCAkb3BhY2l0eSk7XG5cbiAgICAgIC8vIEBlcnJvciAkc2hhZG93LXZhbHVlO1xuXG4gICAgICAkei1zaGFkb3dzLXZhbHVlczogYXBwZW5kKCR6LXNoYWRvd3MtdmFsdWVzLCAkc2hhZG93LXZhbHVlKTtcblxuICAgICAgLy8gQGVycm9yICR6LXNoYWRvd3MtdmFsdWVzO1xuICAgIH0gQGVsc2Uge1xuICAgICAgQGVycm9yICdJbnZhbGlkIHNoYWRvdyB2YWx1ZXMgZm9yIGFyZ3VtZW50ICR6LXNoYWRvd3M6IGAjeyR6LXNoYWRvd3N9YC4gSXRcXCdzIG5laXRoZXIgYSBtYXAgb3IgYSBsaXN0JztcbiAgICB9XG5cbiAgICAvLyBAZXJyb3IgI3t0by1zdHJpbmcoJHotc2hhZG93cy12YWx1ZXMsICcsICcpfTtcblxuICAgIGJveC1zaGFkb3c6ICN7dG8tc3RyaW5nKCR6LXNoYWRvd3MtdmFsdWVzLCAnLCAnKX07XG4gIH0gQGVsc2Uge1xuICAgIEBlcnJvciAnTm8gcmVmZXJlbmNlIGZvdW5kIGZvciBhcmd1bWVudCAkejogYCN7JHp9YCBpbiBzaGFkb3dzIHNwZWNzLic7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/charts/charts.module.ts":
/*!*****************************************!*\
  !*** ./src/app/charts/charts.module.ts ***!
  \*****************************************/
/*! exports provided: chartsRoutes, ChartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartsRoutes", function() { return chartsRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _rcharts_rcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rcharts/rcharts */ "./src/app/charts/rcharts/rcharts.ts");
/* harmony import */ var _charts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charts.service */ "./src/app/charts/charts.service.ts");
/* harmony import */ var _services_dashboards_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/dashboards.service */ "./src/app/services/dashboards.service.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm2015/ngx-echarts.js");
/* harmony import */ var _echarts_echarts_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./echarts/echarts-page.component */ "./src/app/charts/echarts/echarts-page.component.ts");
/* harmony import */ var _chartjs_chartjs_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chartjs/chartjs-page.component */ "./src/app/charts/chartjs/chartjs-page.component.ts");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _ngx_charts_ngx_charts_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ngx-charts/ngx-charts-page.component */ "./src/app/charts/ngx-charts/ngx-charts-page.component.ts");
/* harmony import */ var _real_ngx_realngx_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./real-ngx/realngx.component */ "./src/app/charts/real-ngx/realngx.component.ts");
/* harmony import */ var _realjs_realjs_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./realjs/realjs-page.component */ "./src/app/charts/realjs/realjs-page.component.ts");








// echarts - lib: https://github.com/xieziyu/ngx-echarts


// chartjs - lib: https://github.com/valor-software/ng2-charts


// ngx-charts - lib: https://swimlane.gitbook.io/ngx-charts/




const chartsRoutes = [
    {
        path: '',
        redirectTo: 'stacked-charts'
    },
    {
        path: 'custom-charts',
        component: _echarts_echarts_page_component__WEBPACK_IMPORTED_MODULE_9__["EchartsPageComponent"]
    },
    {
        path: 'charts-rs',
        component: _chartjs_chartjs_page_component__WEBPACK_IMPORTED_MODULE_10__["ChartsJsPageComponent"]
    },
    {
        path: 'rs',
        component: _ngx_charts_ngx_charts_page_component__WEBPACK_IMPORTED_MODULE_13__["NgxChartsPageComponent"]
    },
    {
        path: 'real-charts',
        component: _rcharts_rcharts__WEBPACK_IMPORTED_MODULE_5__["RealCharts"]
    },
    {
        path: 'stacked-charts',
        component: _realjs_realjs_page_component__WEBPACK_IMPORTED_MODULE_15__["RealTSCharts"]
    },
    {
        path: 'scalable-viz',
        component: _real_ngx_realngx_component__WEBPACK_IMPORTED_MODULE_14__["RealXCharts"]
    }
];
let ChartsModule = class ChartsModule {
};
ChartsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _echarts_echarts_page_component__WEBPACK_IMPORTED_MODULE_9__["EchartsPageComponent"],
            _chartjs_chartjs_page_component__WEBPACK_IMPORTED_MODULE_10__["ChartsJsPageComponent"],
            _ngx_charts_ngx_charts_page_component__WEBPACK_IMPORTED_MODULE_13__["NgxChartsPageComponent"],
            _rcharts_rcharts__WEBPACK_IMPORTED_MODULE_5__["RealCharts"],
            _real_ngx_realngx_component__WEBPACK_IMPORTED_MODULE_14__["RealXCharts"],
            _realjs_realjs_page_component__WEBPACK_IMPORTED_MODULE_15__["RealTSCharts"]
        ],
        providers: [
            _charts_service__WEBPACK_IMPORTED_MODULE_6__["ChartsDataService"],
            _services_dashboards_service__WEBPACK_IMPORTED_MODULE_7__["DashboardsService"]
        ],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(chartsRoutes),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ngx_echarts__WEBPACK_IMPORTED_MODULE_8__["NgxEchartsModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_12__["NgxChartsModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_11__["ChartsModule"]
        ]
    })
], ChartsModule);



/***/ }),

/***/ "./src/app/charts/charts.service.ts":
/*!******************************************!*\
  !*** ./src/app/charts/charts.service.ts ***!
  \******************************************/
/*! exports provided: ChartsDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsDataService", function() { return ChartsDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChartsDataService = class ChartsDataService {
};
ChartsDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ChartsDataService);



/***/ }),

/***/ "./src/app/charts/echarts/echarts-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/charts/echarts/echarts-page.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n:host {\n  --page-title-color: rgb(var(--palette-primary-rgb));\n  --callout-message-color: rgb(var(--palette-info-rgb));\n  --callout-message-background: rgb(var(--palette-info-light-rgb));\n  --card-background: rgb(var(--palette-white-rgb));\n  --card-title-color: rgb(var(--palette-grey-8-rgb));\n  --card-border-color: rgb(var(--palette-grey-2-rgb));\n  --border-radius: 6px;\n  --page-padding: 60px 40px;\n  --page-spacing: 10px;\n}\n.content-wrapper {\n  padding: var(--page-padding);\n}\n.content-wrapper .page-title {\n  color: var(--page-title-color);\n  font-size: 30px;\n  margin-bottom: calc(var(--page-spacing) * 3);\n}\n.content-wrapper .callout-message-wrapper {\n  display: flex;\n  color: var(--callout-message-color);\n  background-color: var(--callout-message-background);\n  padding: calc(var(--page-spacing) * 2.5);\n  border-radius: var(--border-radius);\n  margin-bottom: calc(var(--page-spacing) * 3);\n}\n.content-wrapper .callout-message-wrapper .callout-link {\n  color: var(--callout-message-color);\n  font-weight: 700;\n}\n.content-wrapper .callout-message-wrapper .callout-icon {\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-right: calc(var(--page-spacing) * 1.5);\n}\n.content-wrapper .callout-message-wrapper .callout-icon i {\n  font-size: 40px;\n}\n.content-wrapper .callout-message-wrapper .callout-message {\n  flex-grow: 1;\n  padding-left: calc(var(--page-spacing) * 1.5);\n  border-left: 1px solid var(--callout-message-color);\n}\n.content-wrapper .chart-card {\n  padding: 0px;\n  background-color: var(--card-background);\n  margin-bottom: calc(var(--page-spacing) * 3);\n  border-radius: var(--border-radius);\n  box-shadow: 0px 10px 20px rgba(var(--palette-grey-3-rgb), 0.15),  0px 3px 6px rgba(var(--palette-grey-3-rgb), 0.1);\n}\n.content-wrapper .chart-card-header {\n  border-bottom: 1px solid var(--card-border-color);\n  padding: calc(var(--page-spacing) * 1.5) calc(var(--page-spacing) * 2.5);\n  font-weight: 600;\n  text-align: center;\n  color: var(--card-title-color);\n}\n.content-wrapper .chart-card-body {\n  padding: calc(var(--page-spacing) * 2.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bndpc2UvbWVhbi9zcmMvdGhlbWUvcGFsZXR0ZXMvc2hhcmVkLnNjc3MiLCIvVXNlcnMvc2hhd253aXNlL21lYW4vc3JjL3RoZW1lL3BhbGV0dGVzL21vZGUuc2NzcyIsIi9Vc2Vycy9zaGF3bndpc2UvbWVhbi9zcmMvYXBwL2NoYXJ0cy9lY2hhcnRzL2VjaGFydHMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2hhcnRzL2VjaGFydHMvZWNoYXJ0cy1wYWdlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NoYXdud2lzZS9tZWFuL3NyYy90aGVtZS9taXhpbnMvZWxldmF0aW9ucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBQ0pBO0VBRUUsbURBQUE7RUFDQSxxREFBQTtFQUNBLGdFQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrREFBQTtFQUNBLG1EQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FDMkNGO0FEeENBO0VBQ0UsNEJBQUE7QUMyQ0Y7QUR6Q0U7RUFDRSw4QkFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtBQzJDSjtBRHhDRTtFQUNFLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLG1EQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDRDQUFBO0FDMENKO0FEeENJO0VBQ0UsbUNBQUE7RUFDQSxnQkFBQTtBQzBDTjtBRHZDSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQ3lDTjtBRHhDTTtFQUNFLGVBQUE7QUMwQ1I7QUR2Q0k7RUFDRSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxtREFBQTtBQ3lDTjtBRHJDRTtFQUNFLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsbUNBQUE7RUU0QkEsa0hBQUE7QURZSjtBRHBDRTtFQUNFLGlEQUFBO0VBQ0Esd0VBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNzQ0o7QURuQ0U7RUFDRSx3Q0FBQTtBQ3FDSiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9lY2hhcnRzL2VjaGFydHMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFNoYXJlZFxuKi9cblxuQGltcG9ydCAncHJlZmVyZW5jZXMnO1xuQGltcG9ydCAnaW50ZXJmYWNlJztcbkBpbXBvcnQgJ21vZGUnO1xuXG4vLyBBbiBhYnN0cmFjdCB3YXkgdG8gcHJvdmlkZSBjb2xvcnMuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGFuIGludGVyZmFjZSB0byBib3RoIFNhc3MgdmFyaWFibGVzIGFuZCBDU1MgNCB2YXJpYWJsZXMgYmFzZWQgY29sb3IgcGFsZXR0ZXMuXG5AZnVuY3Rpb24gcGFsZXR0ZS1jb2xvcigkY29sb3ItbmFtZSwgJGFscGhhOiAxKSB7XG4gIC8vICRjb2xvci1wYWxldHRlLW1vZGUgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY2hvb3Nlbi1wYWxldHRlICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBtb2RlLnNjc3NcbiAgLy8gJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlICAgPT4gIERlZmluZWQgaW4gaW50ZXJmYWNlLnNjc3NcbiAgLy8gJGNzczQtdmFyLXByZWZpeCAgICAgICAgICAgPT4gIERlZmluZWQgaW4gcHJlZmVyZW5jZXMuc2Nzc1xuICAvLyAkY3NzNC1jb2xvci1mb3JtYXQgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG5cbiAgQGlmICgkY29sb3ItcGFsZXR0ZS1tb2RlID09ICdjc3MtNCcpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjb2xvci1wYWxldHRlLWludGVyZmFjZTtcblxuICAgICRjb2xvci12YXJpYWJsZS1pbmRleDogaW5kZXgoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlLWluZGV4KSA9PSAnbnVtYmVyJykge1xuICAgICAgJGNvbG9yLXZhcmlhYmxlLW5hbWU6IG50aCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci12YXJpYWJsZS1pbmRleCk7XG5cbiAgICAgIEBpZiAoJGFscGhhID4gMCBhbmQgJGFscGhhIDwgMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYmEodmFyKCcgKyAkY3NzNC12YXItcHJlZml4ICsgJGNvbG9yLXZhcmlhYmxlLW5hbWUgKyAnLScgKyAkY3NzNC1jb2xvci1mb3JtYXQgKycpLCAjeyRhbHBoYX0pJ307XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYih2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArICcpKSd9O1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci1uYW1lfSkgd2FzIG5vdCBmb3VuZCBvbiBDb2xvciBQYWxldHRlIGRlZmluaXRpb24uIE1ha2Ugc3VyZSBpdCdzIGRlZmluZWQgaW4gdGhlIHRoZW1lL3BhbGV0dGVzL2ludGVyZmFjZS5zY3NzIGZpbGVcIjtcbiAgICB9XG4gIH0gQGVsc2UgaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ3Nhc3MnKSB7XG4gICAgJHBhbGV0dGUtcmVmZXJlbmNlOiAkY2hvb3Nlbi1wYWxldHRlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlOiBtYXAtZ2V0KCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLW5hbWUpO1xuXG4gICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBTYXNzIGNvbG9yXG4gICAgQGlmICh0eXBlX29mKCRjb2xvci12YXJpYWJsZSkgPT0gJ2NvbG9yJykge1xuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gcmdiYSgkY29sb3ItdmFyaWFibGUsICRhbHBoYSk7XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICRjb2xvci12YXJpYWJsZTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICBAZXJyb3IgXCJBbHBoYSAoI3skYWxwaGF9KSBtdXN0IGJlIGEgbnVtYmVyXCI7XG4gICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICBAZXJyb3IgXCJDb2xvciAoI3skY29sb3ItdmFyaWFibGV9KSBpcyBub3QgYSBTYXNzIGNvbG9yXCI7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAZXJyb3IgJ05vIENvbG9yIFBhbGV0dGUgbW9kZSBzZWxlY3RlZCBpbiB0aGVtZS9wYWxldHRlcy9wcmVmZXJlbmNlcy5zY3NzJztcbiAgfVxufVxuIiwiLypcbiAgQ1NTIDQgTW9kZVxuKi9cbiRjb2xvci1wYWxldHRlLW1vZGU6ICdjc3MtNCc7XG5cblxuLypcbiAgU2FzcyBNb2RlXG4qL1xuLy8gQGltcG9ydCAnY29yZSc7XG4vL1xuLy8gJGNvbG9yLXBhbGV0dGUtbW9kZTogJ3Nhc3MnO1xuLy9cbi8vIC8vIEltcG9ydCB0aGUgZGVmaW5pdGlvbnMgb2YgdGhlIHBhbGV0dGUgeW91IHdhbnQgdG8gdXNlXG4vLyBAaW1wb3J0ICdwYWxldHRlLTEvZGVmaW5pdGlvbnMnO1xuLy8gLy8gQGltcG9ydCAncGFsZXR0ZS0yL2RlZmluaXRpb25zJztcbi8vXG4vLyAvLyBBc3NpZ24gYSBwYXJ0aWN1bGFyIENvbG9yIFBhbGV0dGUgdG8gdGhlICdjaG9vc2VuLXBhbGV0dGUnIHBvaW50ZXIuXG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlIHdpbGwgYmUgYSBTYXNzIG1hcCBwb2ludGluZyB0byBhbm90aGVyIGNvbG9yIHBhbGV0dGUgU2FzcyBtYXBcbi8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMSk7XG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlOiBidWlsZFNhc3NQYWxldHRlKCRwYWxldHRlLTIpO1xuIiwiQGltcG9ydCAnc2hhcmVkJztcblxuOmhvc3Qge1xuICAvLyBEZWZhdWx0IHZhcmlhYmxlc1xuICAtLXBhZ2UtdGl0bGUtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeScpfTtcbiAgLS1jYWxsb3V0LW1lc3NhZ2UtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignaW5mbycpfTtcbiAgLS1jYWxsb3V0LW1lc3NhZ2UtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCdpbmZvLWxpZ2h0Jyl9O1xuICAtLWNhcmQtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCd3aGl0ZScpfTtcbiAgLS1jYXJkLXRpdGxlLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktOCcpfTtcbiAgLS1jYXJkLWJvcmRlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdncmV5LTInKX07XG4gIC0tYm9yZGVyLXJhZGl1czogNnB4O1xuICAtLXBhZ2UtcGFkZGluZzogNjBweCA0MHB4O1xuICAtLXBhZ2Utc3BhY2luZzogMTBweDtcbn1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtcGFkZGluZyk7XG5cbiAgLnBhZ2UtdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1wYWdlLXRpdGxlLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMyk7XG4gIH1cblxuICAuY2FsbG91dC1tZXNzYWdlLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6IHZhcigtLWNhbGxvdXQtbWVzc2FnZS1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FsbG91dC1tZXNzYWdlLWJhY2tncm91bmQpO1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDIuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMyk7XG5cbiAgICAuY2FsbG91dC1saW5rIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1jYWxsb3V0LW1lc3NhZ2UtY29sb3IpO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG5cbiAgICAuY2FsbG91dC1pY29uIHtcbiAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAxLjUpO1xuICAgICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNhbGxvdXQtbWVzc2FnZSB7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDEuNSk7XG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWNhbGxvdXQtbWVzc2FnZS1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgLmNoYXJ0LWNhcmQge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJhY2tncm91bmQpO1xuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDMpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIEBpbmNsdWRlIGVsZXZhdGlvbih6MywgJ2dyZXktMycpO1xuICB9XG5cbiAgLmNoYXJ0LWNhcmQtaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXItY29sb3IpO1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDEuNSkgY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMi41KTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tY2FyZC10aXRsZS1jb2xvcik7XG4gIH1cblxuICAuY2hhcnQtY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyLjUpO1xuICB9XG59XG4iLCIvKlxuICBTaGFyZWRcbiovXG4vKlxuICBDU1MgNCBNb2RlXG4qL1xuLypcbiAgU2FzcyBNb2RlXG4qL1xuLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbi8qXG4gIFNoYXJlZFxuKi9cbi8qXG4gIENTUyA0IE1vZGVcbiovXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vKlxuICBTaGFyZWRcbiovXG4vKlxuICBDU1MgNCBNb2RlXG4qL1xuLypcbiAgU2FzcyBNb2RlXG4qL1xuLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbjpob3N0IHtcbiAgLS1wYWdlLXRpdGxlLWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpO1xuICAtLWNhbGxvdXQtbWVzc2FnZS1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtaW5mby1yZ2IpKTtcbiAgLS1jYWxsb3V0LW1lc3NhZ2UtYmFja2dyb3VuZDogcmdiKHZhcigtLXBhbGV0dGUtaW5mby1saWdodC1yZ2IpKTtcbiAgLS1jYXJkLWJhY2tncm91bmQ6IHJnYih2YXIoLS1wYWxldHRlLXdoaXRlLXJnYikpO1xuICAtLWNhcmQtdGl0bGUtY29sb3I6IHJnYih2YXIoLS1wYWxldHRlLWdyZXktOC1yZ2IpKTtcbiAgLS1jYXJkLWJvcmRlci1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtZ3JleS0yLXJnYikpO1xuICAtLWJvcmRlci1yYWRpdXM6IDZweDtcbiAgLS1wYWdlLXBhZGRpbmc6IDYwcHggNDBweDtcbiAgLS1wYWdlLXNwYWNpbmc6IDEwcHg7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLXBhZGRpbmcpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAucGFnZS10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLXRpdGxlLWNvbG9yKTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAzKTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmNhbGxvdXQtbWVzc2FnZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IHZhcigtLWNhbGxvdXQtbWVzc2FnZS1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbGxvdXQtbWVzc2FnZS1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMi41KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDMpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2FsbG91dC1tZXNzYWdlLXdyYXBwZXIgLmNhbGxvdXQtbGluayB7XG4gIGNvbG9yOiB2YXIoLS1jYWxsb3V0LW1lc3NhZ2UtY29sb3IpO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2FsbG91dC1tZXNzYWdlLXdyYXBwZXIgLmNhbGxvdXQtaWNvbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMS41KTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmNhbGxvdXQtbWVzc2FnZS13cmFwcGVyIC5jYWxsb3V0LWljb24gaSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmNhbGxvdXQtbWVzc2FnZS13cmFwcGVyIC5jYWxsb3V0LW1lc3NhZ2Uge1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMS41KTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1jYWxsb3V0LW1lc3NhZ2UtY29sb3IpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2hhcnQtY2FyZCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iYWNrZ3JvdW5kKTtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEodmFyKC0tcGFsZXR0ZS1ncmV5LTMtcmdiKSwgMC4xNSksICAwcHggM3B4IDZweCByZ2JhKHZhcigtLXBhbGV0dGUtZ3JleS0zLXJnYiksIDAuMSk7XG59XG4uY29udGVudC13cmFwcGVyIC5jaGFydC1jYXJkLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jYXJkLWJvcmRlci1jb2xvcik7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDEuNSkgY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMi41KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tY2FyZC10aXRsZS1jb2xvcik7XG59XG4uY29udGVudC13cmFwcGVyIC5jaGFydC1jYXJkLWJvZHkge1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyLjUpO1xufSIsIkBpbXBvcnQgJ3V0aWxzJztcbkBpbXBvcnQgJy4uL3BhbGV0dGVzL3NoYXJlZCc7XG5cbiRlbGV2YXRpb25zLXNwZWNzOiAoXG4gIHoxOiAoXG4gICAgKHNoYWRvdzogMHB4IDFweCAzcHgsIG9wYWNpdHk6IDAuMTIpLFxuICAgIChzaGFkb3c6IDBweCAxcHggMnB4LCBvcGFjaXR5OiAwLjI0KVxuICApLFxuICB6MjogKFxuICAgIChzaGFkb3c6IDBweCAzcHggNnB4LCBvcGFjaXR5OiAwLjE1KSxcbiAgICAoc2hhZG93OiAwcHggMnB4IDRweCwgb3BhY2l0eTogMC4xMilcbiAgKSxcbiAgejM6IChcbiAgICAoc2hhZG93OiAwcHggMTBweCAyMHB4LCBvcGFjaXR5OiAwLjE1KSxcbiAgICAoc2hhZG93OiAwcHggM3B4IDZweCwgb3BhY2l0eTogMC4xMClcbiAgKSxcbiAgejQ6IChcbiAgICAoc2hhZG93OiAwcHggMTVweCAyNXB4LCBvcGFjaXR5OiAwLjE1KSxcbiAgICAoc2hhZG93OiAwcHggNXB4IDEwcHgsIG9wYWNpdHk6IDAuMDUpXG4gICksXG4gIHo1OiAoXG4gICAgKHNoYWRvdzogMHB4IDIwcHggNDBweCwgb3BhY2l0eTogMC4yMClcbiAgKVxuKTtcblxuLy8gQG1peGluIGVsZXZhdGlvbigkejogejEsICRjb2xvcjogI0NDQykge1xuQG1peGluIGVsZXZhdGlvbigkejogejEsICRjb2xvcjogJ2dyZXktMicpIHtcbiAgJHNoYWRvd3MtcmVmZXJlbmNlOiAkZWxldmF0aW9ucy1zcGVjcztcblxuICAvLyBDaGVjayBpZiB3ZSBoYXZlIGEgc3BlYyBmb3IgdGhlIGRlc2lyZWQgc2hhZG93XG4gIEBpZiBtYXAtaGFzLWtleSgkc2hhZG93cy1yZWZlcmVuY2UsICR6KSB7XG4gICAgLy8gQWNjdW11bGF0ZSBtdWx0aXBsZSBzaGFkb3cgdmFsdWVzIGluIHRoaXMgbGlzdFxuICAgICR6LXNoYWRvd3MtdmFsdWVzOiAoKTtcbiAgICAvLyBHZXQgc2hhZG93cyBtYXBcbiAgICAkei1zaGFkb3dzOiBtYXAtZ2V0KCRzaGFkb3dzLXJlZmVyZW5jZSwgJHopO1xuXG4gICAgLy8gQGVycm9yICR6LXNoYWRvd3M7XG5cbiAgICAvLyBNdWx0aXBsZSBzaGFkb3dzIGNvbWJpbmVkXG4gICAgQGlmICh0eXBlX29mKCR6LXNoYWRvd3MpID09ICdsaXN0Jykge1xuICAgICAgQGVhY2ggJHotc2hhZG93IGluICR6LXNoYWRvd3Mge1xuICAgICAgICBAaWYgKHR5cGVfb2YoJHotc2hhZG93KSA9PSAnbWFwJykge1xuICAgICAgICAgICRzaGFkb3c6IG1hcC1nZXQoJHotc2hhZG93LCBzaGFkb3cpO1xuICAgICAgICAgICRvcGFjaXR5OiBtYXAtZ2V0KCR6LXNoYWRvdywgb3BhY2l0eSk7XG5cbiAgICAgICAgICAvLyBAZXJyb3IgJHotc2hhZG93O1xuICAgICAgICAgIC8vIEBlcnJvciAkc2hhZG93O1xuICAgICAgICAgIC8vIEBlcnJvciAkb3BhY2l0eTtcblxuICAgICAgICAgIC8vICRzaGFkb3ctdmFsdWU6ICRzaGFkb3cgKyAnICcgKyByZ2JhKCRjb2xvciwgJG9wYWNpdHkpO1xuICAgICAgICAgICRzaGFkb3ctdmFsdWU6ICRzaGFkb3cgKyAnICcgKyBwYWxldHRlLWNvbG9yKCRjb2xvciwgJG9wYWNpdHkpO1xuXG4gICAgICAgICAgLy8gQGVycm9yICRzaGFkb3ctdmFsdWU7XG5cbiAgICAgICAgICAkei1zaGFkb3dzLXZhbHVlczogYXBwZW5kKCR6LXNoYWRvd3MtdmFsdWVzLCAkc2hhZG93LXZhbHVlKTtcblxuICAgICAgICAgIC8vIEBlcnJvciAkei1zaGFkb3dzLXZhbHVlcztcbiAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgQGVycm9yICdJbnZhbGlkIHNoYWRvdyBkZWZpbml0aW9uIGZvciBhcmd1bWVudCAkei1zaGFkb3c6IGAjeyR6LXNoYWRvd31gJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKHR5cGVfb2YoJHotc2hhZG93cykgPT0gJ21hcCcpIHtcbiAgICAgIC8vIFNpbmdsZSBzaGFkb3dcbiAgICAgICRzaGFkb3c6IG1hcC1nZXQoJHotc2hhZG93cywgc2hhZG93KTtcbiAgICAgICRvcGFjaXR5OiBtYXAtZ2V0KCR6LXNoYWRvd3MsIG9wYWNpdHkpO1xuXG4gICAgICAvLyBAZXJyb3IgJHotc2hhZG93O1xuICAgICAgLy8gQGVycm9yICRzaGFkb3c7XG4gICAgICAvLyBAZXJyb3IgJG9wYWNpdHk7XG5cbiAgICAgIC8vICRzaGFkb3ctdmFsdWU6ICRzaGFkb3cgKyAnICcgKyByZ2JhKCRjb2xvciwgJG9wYWNpdHkpO1xuICAgICAgJHNoYWRvdy12YWx1ZTogJHNoYWRvdyArICcgJyArIHBhbGV0dGUtY29sb3IoJGNvbG9yLCAkb3BhY2l0eSk7XG5cbiAgICAgIC8vIEBlcnJvciAkc2hhZG93LXZhbHVlO1xuXG4gICAgICAkei1zaGFkb3dzLXZhbHVlczogYXBwZW5kKCR6LXNoYWRvd3MtdmFsdWVzLCAkc2hhZG93LXZhbHVlKTtcblxuICAgICAgLy8gQGVycm9yICR6LXNoYWRvd3MtdmFsdWVzO1xuICAgIH0gQGVsc2Uge1xuICAgICAgQGVycm9yICdJbnZhbGlkIHNoYWRvdyB2YWx1ZXMgZm9yIGFyZ3VtZW50ICR6LXNoYWRvd3M6IGAjeyR6LXNoYWRvd3N9YC4gSXRcXCdzIG5laXRoZXIgYSBtYXAgb3IgYSBsaXN0JztcbiAgICB9XG5cbiAgICAvLyBAZXJyb3IgI3t0by1zdHJpbmcoJHotc2hhZG93cy12YWx1ZXMsICcsICcpfTtcblxuICAgIGJveC1zaGFkb3c6ICN7dG8tc3RyaW5nKCR6LXNoYWRvd3MtdmFsdWVzLCAnLCAnKX07XG4gIH0gQGVsc2Uge1xuICAgIEBlcnJvciAnTm8gcmVmZXJlbmNlIGZvdW5kIGZvciBhcmd1bWVudCAkejogYCN7JHp9YCBpbiBzaGFkb3dzIHNwZWNzLic7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/charts/echarts/echarts-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/charts/echarts/echarts-page.component.ts ***!
  \**********************************************************/
/*! exports provided: EchartsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EchartsPageComponent", function() { return EchartsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _theme_echarts_theme_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../theme/echarts-theme.js */ "./src/theme/echarts-theme.js");
/* harmony import */ var _theme_echarts_theme_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_theme_echarts_theme_js__WEBPACK_IMPORTED_MODULE_3__);



/** echarts theme: */

let EchartsPageComponent = class EchartsPageComponent {
    constructor(platformId) {
        this.platformId = platformId;
        this.multiplePieChartOption = {
            tooltip: {
                trigger: 'none'
            },
            legend: {
                type: 'plain',
                orient: 'vertical',
                icon: 'circle',
                left: 'left',
                data: ['Development', 'Design', 'Testing']
            },
            series: [{
                    name: 'Development',
                    type: 'pie',
                    clockwise: true,
                    hoverAnimation: false,
                    radius: [105, 130],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    data: [
                        {
                            value: 68,
                            name: 'Development'
                        },
                        {
                            value: 32,
                            name: 'invisible',
                            itemStyle: {
                                color: '#FFF',
                                barBorderRadius: 6
                            },
                            emphasis: {
                                itemStyle: {
                                    color: '#FFF',
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    }
                                }
                            }
                        }
                    ]
                }, {
                    name: 'Design',
                    type: 'pie',
                    clockwise: true,
                    hoverAnimation: false,
                    radius: [75, 100],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    data: [
                        {
                            value: 50,
                            name: 'Design'
                        },
                        {
                            value: 71,
                            name: 'invisible',
                            itemStyle: {
                                color: '#FFF'
                            }
                        }
                    ]
                }, {
                    name: 'Testing',
                    type: 'pie',
                    clockwise: true,
                    hoverAnimation: false,
                    radius: [45, 70],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    data: [
                        {
                            value: 40,
                            name: 'Testing'
                        }, {
                            value: 97,
                            name: 'invisible',
                            itemStyle: {
                                color: '#FFF'
                            }
                        }
                    ]
                }
            ]
        };
        this.multipleLineChartOption = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}'
            },
            xAxis: {
                type: 'category',
                axisLine: {
                    show: false
                },
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                splitLine: {
                    show: false
                },
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false
                },
                splitNumber: 4,
                axisLine: {
                    show: false
                },
            },
            legend: {
                type: 'plain',
                orient: 'horizontal',
                bottom: 0,
            },
            series: [
                {
                    name: 'This week',
                    data: [680, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                },
                {
                    name: 'Last week',
                    data: [620, 999, 1003, 1200, 1100, 1200, 1500],
                    type: 'line',
                    lineStyle: {
                        normal: {
                            color: 'grey',
                            type: 'dashed'
                        }
                    },
                }
            ]
        };
        this.pieChartOption = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'right',
                data: ['USA', 'Brazil', 'India', 'France', 'UK'],
            },
            series: [
                {
                    name: 'Transactions',
                    type: 'pie',
                    radius: '80%',
                    center: ['50%', '50%'],
                    data: [
                        {
                            name: 'USA',
                            value: 500
                        },
                        {
                            name: 'Brazil',
                            value: 300
                        },
                        {
                            name: 'India',
                            value: 200
                        },
                        {
                            name: 'France',
                            value: 100
                        },
                        {
                            name: 'UK',
                            value: 100
                        }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: '#ccc'
                        }
                    },
                    label: {
                        normal: {
                            textStyle: {
                                color: '#999999'
                            },
                        },
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: '#999999'
                            },
                        },
                    }
                }
            ]
        };
        this.barChartOption = {
            tooltip: {
                position: 'top',
                trigger: 'axis',
                axisPointer: {
                    type: 'none'
                },
            },
            legend: {
                type: 'plain',
                orient: 'vertical',
                right: 0,
                top: 0,
                data: [
                    {
                        name: 'Product 1',
                        icon: 'circle'
                    },
                    {
                        name: 'Product 2',
                        icon: 'circle'
                    }
                ]
            },
            xAxis: {
                axisLine: {
                    show: false
                },
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                silent: false,
                splitLine: {
                    show: false
                },
            },
            yAxis: {
                axisTick: {
                    show: false
                },
                splitNumber: 4,
                axisLine: {
                    show: false
                },
            },
            series: [
                {
                    name: 'Product 1',
                    type: 'bar',
                    data: [600, 400, 300, 500, 350, 400, 471, 500, 600, 700, 590, 490],
                    animationDelay: (idx) => idx * 10,
                    itemStyle: {
                        barBorderRadius: 6
                    },
                    barMaxWidth: 10
                },
                {
                    name: 'Product 2',
                    type: 'bar',
                    data: [300, 450, 320, 370, 290, 370, 500, 621, 789, 650, 599, 700],
                    animationDelay: (idx) => idx * 10,
                    itemStyle: {
                        barBorderRadius: 6
                    },
                    barMaxWidth: 10
                }
            ],
            animationEasing: 'elasticOut',
            animationDelayUpdate: (idx) => idx * 5
        };
        this.areaStackChartOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            legend: {
                data: ['Twitter', 'Facebook', 'Google', 'Medium', 'Email'],
            },
            toolbox: {
                feature: {
                    saveAsImage: {
                        title: 'Download'
                    }
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'Users'
                }
            ],
            series: [
                {
                    name: 'Twitter',
                    type: 'line',
                    stack: 'a',
                    areaStyle: {},
                    data: [120, 132, 101, 134, 90, 230, 210, 240, 250, 220, 201, 250]
                },
                {
                    name: 'Facebook',
                    type: 'line',
                    stack: 'a',
                    areaStyle: {},
                    data: [220, 182, 191, 234, 290, 330, 310, 334, 356, 310, 330, 320]
                },
                {
                    name: 'Google',
                    type: 'line',
                    stack: 'a',
                    areaStyle: {},
                    data: [150, 232, 201, 154, 190, 330, 410, 440, 478, 510, 550, 470]
                },
                {
                    name: 'Medium',
                    type: 'line',
                    stack: 'a',
                    areaStyle: { normal: {} },
                    data: [320, 332, 301, 334, 390, 330, 320, 330, 300, 380, 400, 390]
                },
                {
                    name: 'Email',
                    type: 'line',
                    stack: 'a',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: { normal: {} },
                    data: [620, 732, 701, 734, 990, 1130, 1120, 1170, 1250, 1299, 1310, 1360]
                }
            ]
        };
        this.doughnutChartOption = {
            color: ['#EF4E4E', '#FF9B9B', '#FFE3E3'],
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'horizontal',
                type: 'plain',
                bottom: 0,
                data: [
                    {
                        name: 'Desktop',
                        icon: 'circle'
                    },
                    {
                        name: 'Tablet',
                        icon: 'circle'
                    },
                    {
                        name: 'Mobile',
                        icon: 'circle'
                    }
                ]
            },
            series: [
                {
                    type: 'pie',
                    radius: ['60%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false
                    },
                    data: [
                        { value: 335, name: 'Desktop' },
                        { value: 310, name: 'Mobile' },
                        { value: 234, name: 'Tablet' }
                    ],
                    itemStyle: {
                        normal: {
                            borderWidth: 4,
                            borderColor: '#FFFFFF'
                        }
                    }
                }
            ]
        };
        this.smoothLineOption = {
            xAxis: {
                axisLine: {
                    show: false
                },
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                silent: false,
                splitLine: {
                    show: false
                },
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false
                },
                splitNumber: 5,
                axisLabel: {
                    formatter: '${value}k',
                    fontWeight: 'bold'
                },
                axisLine: {
                    show: false
                },
            },
            series: [{
                    data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40],
                    type: 'line',
                    smooth: true,
                    lineStyle: {
                        color: '#2c7be5',
                        width: 3
                    },
                    symbol: 'none'
                }]
        };
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId);
    }
};
EchartsPageComponent.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
];
EchartsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-echarts-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./echarts-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/echarts/echarts-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./echarts-page.component.scss */ "./src/app/charts/echarts/echarts-page.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]))
], EchartsPageComponent);



/***/ }),

/***/ "./src/app/charts/ngx-charts/ngx-charts-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/charts/ngx-charts/ngx-charts-page.component.ts ***!
  \****************************************************************/
/*! exports provided: NgxChartsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChartsPageComponent", function() { return NgxChartsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let NgxChartsPageComponent = class NgxChartsPageComponent {
    constructor(platformId) {
        this.platformId = platformId;
        this.verticalBarOptions = {
            showXAxis: true,
            showYAxis: true,
            gradient: false,
            showLegend: true,
            showGridLines: true,
            barPadding: 50,
            showXAxisLabel: false,
            xAxisLabel: 'Country',
            showYAxisLabel: true,
            yAxisLabel: 'Sales'
        };
        this.horizontalBarOptions = {
            showXAxis: true,
            showYAxis: true,
            showLegend: true,
            showGridLines: false,
            barPadding: 6,
            groupPadding: 30,
            showXAxisLabel: false,
            xAxisLabel: 'Country',
            showYAxisLabel: false,
            legendPosition: 'right'
        };
        this.lineChartOptions = {
            showXAxis: true,
            showYAxis: true,
            showLegend: true,
            showGridLines: true,
            showXAxisLabel: false,
            showYAxisLabel: true,
            legendPosition: 'right',
            autoScale: false,
            roundDomains: true
        };
        this.colorScheme = {
            domain: ['#035388', '#40c3f7', '#b3ecff', '#52606d', '#127fbf', '#9aa5b1']
        };
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId);
        this.countriesData =
            [
                {
                    name: 'Germany',
                    value: 2500
                },
                {
                    name: 'USA',
                    value: 4000
                },
                {
                    name: 'Spain',
                    value: 1700
                },
                {
                    name: 'India',
                    value: 2000
                },
                {
                    name: 'France',
                    value: 1200
                }
            ];
        this.countriesData2 =
            [
                {
                    name: 'Germany',
                    series: [
                        {
                            name: '2020',
                            value: 40632
                        },
                        {
                            name: '2010',
                            value: 36953
                        },
                        {
                            name: '2000',
                            value: 31476
                        }
                    ]
                },
                {
                    name: 'United States',
                    series: [
                        {
                            name: '2020',
                            value: 50986
                        },
                        {
                            name: '2010',
                            value: 45986
                        },
                        {
                            name: '2000',
                            value: 37060
                        }
                    ]
                },
                {
                    name: 'France',
                    series: [
                        {
                            name: '2020',
                            value: 36745
                        },
                        {
                            name: '2010',
                            value: 34774
                        },
                        {
                            name: '2000',
                            value: 29476
                        }
                    ]
                },
                {
                    name: 'United Kingdom',
                    series: [
                        {
                            name: '2020',
                            value: 36240
                        },
                        {
                            name: '2010',
                            value: 32543
                        },
                        {
                            name: '2000',
                            value: 26424
                        }
                    ]
                }
            ];
        this.contestData =
            [
                {
                    name: 'Agustin',
                    value: 4000
                },
                {
                    name: 'Rachel',
                    value: 2500
                },
                {
                    name: 'Max',
                    value: 2000
                },
                {
                    name: 'Nina',
                    value: 1700
                },
                {
                    name: 'Sollange',
                    value: 1200
                }
            ];
        this.lineChartData =
            [
                {
                    name: 'This week',
                    series: [
                        {
                            value: 2303,
                            name: 'Mon'
                        },
                        {
                            value: 5616,
                            name: 'Tue'
                        },
                        {
                            value: 4862,
                            name: 'Wed'
                        },
                        {
                            value: 3658,
                            name: 'Thu'
                        },
                        {
                            value: 6089,
                            name: 'Fri'
                        }
                    ]
                },
                {
                    name: 'Last week',
                    series: [
                        {
                            value: 2000,
                            name: 'Mon'
                        },
                        {
                            value: 4300,
                            name: 'Tue'
                        },
                        {
                            value: 5200,
                            name: 'Wed'
                        },
                        {
                            value: 3100,
                            name: 'Thu'
                        },
                        {
                            value: 4300,
                            name: 'Fri'
                        }
                    ]
                }
            ];
    }
};
NgxChartsPageComponent.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
];
NgxChartsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ngx-charts-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ngx-charts-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/ngx-charts/ngx-charts-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ngx-charts-page.scss */ "./src/app/charts/ngx-charts/ngx-charts-page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]))
], NgxChartsPageComponent);



/***/ }),

/***/ "./src/app/charts/ngx-charts/ngx-charts-page.scss":
/*!********************************************************!*\
  !*** ./src/app/charts/ngx-charts/ngx-charts-page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n:host {\n  --page-title-color: rgb(var(--palette-primary-rgb));\n  --callout-message-color: rgb(var(--palette-info-rgb));\n  --callout-message-background: rgb(var(--palette-info-light-rgb));\n  --card-title-color: rgb(var(--palette-grey-8-rgb));\n  --border-radius: 6px;\n  --page-padding: 60px 40px;\n  --page-spacing: 10px;\n}\n.content-wrapper {\n  padding: var(--page-padding);\n}\n.content-wrapper .page-title {\n  color: var(--page-title-color);\n  font-size: 30px;\n  margin-bottom: calc(var(--page-spacing) * 3);\n}\n.content-wrapper .callout-message-wrapper {\n  display: flex;\n  color: var(--callout-message-color);\n  background-color: var(--callout-message-background);\n  padding: calc(var(--page-spacing) * 2.5);\n  border-radius: var(--border-radius);\n  margin-bottom: calc(var(--page-spacing) * 3);\n}\n.content-wrapper .callout-message-wrapper .callout-link {\n  color: var(--callout-message-color);\n  font-weight: 700;\n}\n.content-wrapper .callout-message-wrapper .callout-icon {\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-right: calc(var(--page-spacing) * 1.5);\n}\n.content-wrapper .callout-message-wrapper .callout-icon i {\n  font-size: 40px;\n}\n.content-wrapper .callout-message-wrapper .callout-message {\n  flex-grow: 1;\n  padding-left: calc(var(--page-spacing) * 1.5);\n  border-left: 1px solid var(--callout-message-color);\n}\n.content-wrapper .chart-card {\n  margin-bottom: calc(var(--page-spacing) * 6);\n}\n.content-wrapper .chart-card-header {\n  padding: calc(var(--page-spacing) * 1.5) calc(var(--page-spacing) * 2.5);\n  font-weight: 700;\n  font-size: 20px;\n  text-align: center;\n  color: var(--card-title-color);\n}\n.content-wrapper .chart-card-body.bar-vertical {\n  min-height: 400px;\n}\n.content-wrapper .chart-card-body.bar-horizontal {\n  min-height: 300px;\n}\n.content-wrapper .chart-card-body.pie-grid {\n  min-height: 250px;\n}\n.content-wrapper .chart-card-body.line-chart {\n  min-height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bndpc2UvbWVhbi9zcmMvdGhlbWUvcGFsZXR0ZXMvc2hhcmVkLnNjc3MiLCIvVXNlcnMvc2hhd253aXNlL21lYW4vc3JjL3RoZW1lL3BhbGV0dGVzL21vZGUuc2NzcyIsIi9Vc2Vycy9zaGF3bndpc2UvbWVhbi9zcmMvYXBwL2NoYXJ0cy9uZ3gtY2hhcnRzL25neC1jaGFydHMtcGFnZS5zY3NzIiwic3JjL2FwcC9jaGFydHMvbmd4LWNoYXJ0cy9uZ3gtY2hhcnRzLXBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUROQTs7Q0FBQTtBQ0FBOztDQUFBO0FBTUE7O0NBQUE7QUNKQTtFQUVFLG1EQUFBO0VBQ0EscURBQUE7RUFDQSxnRUFBQTtFQUNBLGtEQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FDMkNGO0FEeENBO0VBQ0UsNEJBQUE7QUMyQ0Y7QUR6Q0U7RUFDRSw4QkFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtBQzJDSjtBRHhDRTtFQUNFLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLG1EQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDRDQUFBO0FDMENKO0FEeENJO0VBQ0UsbUNBQUE7RUFDQSxnQkFBQTtBQzBDTjtBRHZDSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQ3lDTjtBRHhDTTtFQUNFLGVBQUE7QUMwQ1I7QUR2Q0k7RUFDRSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxtREFBQTtBQ3lDTjtBRHJDRTtFQUNFLDRDQUFBO0FDdUNKO0FEcENFO0VBQ0Usd0VBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FDc0NKO0FEbENJO0VBQ0MsaUJBQUE7QUNvQ0w7QURsQ0k7RUFDQyxpQkFBQTtBQ29DTDtBRGxDSTtFQUNDLGlCQUFBO0FDb0NMO0FEbENJO0VBQ0MsaUJBQUE7QUNvQ0wiLCJmaWxlIjoic3JjL2FwcC9jaGFydHMvbmd4LWNoYXJ0cy9uZ3gtY2hhcnRzLXBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFNoYXJlZFxuKi9cblxuQGltcG9ydCAncHJlZmVyZW5jZXMnO1xuQGltcG9ydCAnaW50ZXJmYWNlJztcbkBpbXBvcnQgJ21vZGUnO1xuXG4vLyBBbiBhYnN0cmFjdCB3YXkgdG8gcHJvdmlkZSBjb2xvcnMuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGFuIGludGVyZmFjZSB0byBib3RoIFNhc3MgdmFyaWFibGVzIGFuZCBDU1MgNCB2YXJpYWJsZXMgYmFzZWQgY29sb3IgcGFsZXR0ZXMuXG5AZnVuY3Rpb24gcGFsZXR0ZS1jb2xvcigkY29sb3ItbmFtZSwgJGFscGhhOiAxKSB7XG4gIC8vICRjb2xvci1wYWxldHRlLW1vZGUgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY2hvb3Nlbi1wYWxldHRlICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBtb2RlLnNjc3NcbiAgLy8gJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlICAgPT4gIERlZmluZWQgaW4gaW50ZXJmYWNlLnNjc3NcbiAgLy8gJGNzczQtdmFyLXByZWZpeCAgICAgICAgICAgPT4gIERlZmluZWQgaW4gcHJlZmVyZW5jZXMuc2Nzc1xuICAvLyAkY3NzNC1jb2xvci1mb3JtYXQgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG5cbiAgQGlmICgkY29sb3ItcGFsZXR0ZS1tb2RlID09ICdjc3MtNCcpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjb2xvci1wYWxldHRlLWludGVyZmFjZTtcblxuICAgICRjb2xvci12YXJpYWJsZS1pbmRleDogaW5kZXgoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlLWluZGV4KSA9PSAnbnVtYmVyJykge1xuICAgICAgJGNvbG9yLXZhcmlhYmxlLW5hbWU6IG50aCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci12YXJpYWJsZS1pbmRleCk7XG5cbiAgICAgIEBpZiAoJGFscGhhID4gMCBhbmQgJGFscGhhIDwgMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYmEodmFyKCcgKyAkY3NzNC12YXItcHJlZml4ICsgJGNvbG9yLXZhcmlhYmxlLW5hbWUgKyAnLScgKyAkY3NzNC1jb2xvci1mb3JtYXQgKycpLCAjeyRhbHBoYX0pJ307XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYih2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArICcpKSd9O1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci1uYW1lfSkgd2FzIG5vdCBmb3VuZCBvbiBDb2xvciBQYWxldHRlIGRlZmluaXRpb24uIE1ha2Ugc3VyZSBpdCdzIGRlZmluZWQgaW4gdGhlIHRoZW1lL3BhbGV0dGVzL2ludGVyZmFjZS5zY3NzIGZpbGVcIjtcbiAgICB9XG4gIH0gQGVsc2UgaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ3Nhc3MnKSB7XG4gICAgJHBhbGV0dGUtcmVmZXJlbmNlOiAkY2hvb3Nlbi1wYWxldHRlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlOiBtYXAtZ2V0KCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLW5hbWUpO1xuXG4gICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBTYXNzIGNvbG9yXG4gICAgQGlmICh0eXBlX29mKCRjb2xvci12YXJpYWJsZSkgPT0gJ2NvbG9yJykge1xuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gcmdiYSgkY29sb3ItdmFyaWFibGUsICRhbHBoYSk7XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICRjb2xvci12YXJpYWJsZTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICBAZXJyb3IgXCJBbHBoYSAoI3skYWxwaGF9KSBtdXN0IGJlIGEgbnVtYmVyXCI7XG4gICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICBAZXJyb3IgXCJDb2xvciAoI3skY29sb3ItdmFyaWFibGV9KSBpcyBub3QgYSBTYXNzIGNvbG9yXCI7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAZXJyb3IgJ05vIENvbG9yIFBhbGV0dGUgbW9kZSBzZWxlY3RlZCBpbiB0aGVtZS9wYWxldHRlcy9wcmVmZXJlbmNlcy5zY3NzJztcbiAgfVxufVxuIiwiLypcbiAgQ1NTIDQgTW9kZVxuKi9cbiRjb2xvci1wYWxldHRlLW1vZGU6ICdjc3MtNCc7XG5cblxuLypcbiAgU2FzcyBNb2RlXG4qL1xuLy8gQGltcG9ydCAnY29yZSc7XG4vL1xuLy8gJGNvbG9yLXBhbGV0dGUtbW9kZTogJ3Nhc3MnO1xuLy9cbi8vIC8vIEltcG9ydCB0aGUgZGVmaW5pdGlvbnMgb2YgdGhlIHBhbGV0dGUgeW91IHdhbnQgdG8gdXNlXG4vLyBAaW1wb3J0ICdwYWxldHRlLTEvZGVmaW5pdGlvbnMnO1xuLy8gLy8gQGltcG9ydCAncGFsZXR0ZS0yL2RlZmluaXRpb25zJztcbi8vXG4vLyAvLyBBc3NpZ24gYSBwYXJ0aWN1bGFyIENvbG9yIFBhbGV0dGUgdG8gdGhlICdjaG9vc2VuLXBhbGV0dGUnIHBvaW50ZXIuXG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlIHdpbGwgYmUgYSBTYXNzIG1hcCBwb2ludGluZyB0byBhbm90aGVyIGNvbG9yIHBhbGV0dGUgU2FzcyBtYXBcbi8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMSk7XG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlOiBidWlsZFNhc3NQYWxldHRlKCRwYWxldHRlLTIpO1xuIiwiQGltcG9ydCAnc2hhcmVkJztcblxuOmhvc3Qge1xuICAvLyBEZWZhdWx0IHZhcmlhYmxlc1xuICAtLXBhZ2UtdGl0bGUtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeScpfTtcbiAgLS1jYWxsb3V0LW1lc3NhZ2UtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignaW5mbycpfTtcbiAgLS1jYWxsb3V0LW1lc3NhZ2UtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCdpbmZvLWxpZ2h0Jyl9O1xuICAtLWNhcmQtdGl0bGUtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignZ3JleS04Jyl9O1xuICAtLWJvcmRlci1yYWRpdXM6IDZweDtcbiAgLS1wYWdlLXBhZGRpbmc6IDYwcHggNDBweDtcbiAgLS1wYWdlLXNwYWNpbmc6IDEwcHg7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLXBhZGRpbmcpO1xuXG4gIC5wYWdlLXRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tcGFnZS10aXRsZS1jb2xvcik7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDMpO1xuICB9XG5cbiAgLmNhbGxvdXQtbWVzc2FnZS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiB2YXIoLS1jYWxsb3V0LW1lc3NhZ2UtY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbGxvdXQtbWVzc2FnZS1iYWNrZ3JvdW5kKTtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDMpO1xuXG4gICAgLmNhbGxvdXQtbGluayB7XG4gICAgICBjb2xvcjogdmFyKC0tY2FsbG91dC1tZXNzYWdlLWNvbG9yKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuXG4gICAgLmNhbGxvdXQtaWNvbiB7XG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMS41KTtcbiAgICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5jYWxsb3V0LW1lc3NhZ2Uge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAxLjUpO1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1jYWxsb3V0LW1lc3NhZ2UtY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIC5jaGFydC1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiA2KTtcbiAgfVxuXG4gIC5jaGFydC1jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMS41KSBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyLjUpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tY2FyZC10aXRsZS1jb2xvcik7XG4gIH1cblxuICAuY2hhcnQtY2FyZC1ib2R5IHtcbiAgICAmLmJhci12ZXJ0aWNhbCB7XG4gICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICAgIH1cbiAgICAmLmJhci1ob3Jpem9udGFsIHtcbiAgICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgfVxuICAgICYucGllLWdyaWQge1xuICAgICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgICB9XG4gICAgJi5saW5lLWNoYXJ0IHtcbiAgICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgfVxuICB9XG59XG4iLCIvKlxuICBTaGFyZWRcbiovXG4vKlxuICBDU1MgNCBNb2RlXG4qL1xuLypcbiAgU2FzcyBNb2RlXG4qL1xuLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbi8qXG4gIFNoYXJlZFxuKi9cbi8qXG4gIENTUyA0IE1vZGVcbiovXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vKlxuICBTaGFyZWRcbiovXG4vKlxuICBDU1MgNCBNb2RlXG4qL1xuLypcbiAgU2FzcyBNb2RlXG4qL1xuLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbjpob3N0IHtcbiAgLS1wYWdlLXRpdGxlLWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpO1xuICAtLWNhbGxvdXQtbWVzc2FnZS1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtaW5mby1yZ2IpKTtcbiAgLS1jYWxsb3V0LW1lc3NhZ2UtYmFja2dyb3VuZDogcmdiKHZhcigtLXBhbGV0dGUtaW5mby1saWdodC1yZ2IpKTtcbiAgLS1jYXJkLXRpdGxlLWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS1ncmV5LTgtcmdiKSk7XG4gIC0tYm9yZGVyLXJhZGl1czogNnB4O1xuICAtLXBhZ2UtcGFkZGluZzogNjBweCA0MHB4O1xuICAtLXBhZ2Utc3BhY2luZzogMTBweDtcbn1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtcGFkZGluZyk7XG59XG4uY29udGVudC13cmFwcGVyIC5wYWdlLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXBhZ2UtdGl0bGUtY29sb3IpO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDMpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2FsbG91dC1tZXNzYWdlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogdmFyKC0tY2FsbG91dC1tZXNzYWdlLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FsbG91dC1tZXNzYWdlLWJhY2tncm91bmQpO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyLjUpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMyk7XG59XG4uY29udGVudC13cmFwcGVyIC5jYWxsb3V0LW1lc3NhZ2Utd3JhcHBlciAuY2FsbG91dC1saW5rIHtcbiAgY29sb3I6IHZhcigtLWNhbGxvdXQtbWVzc2FnZS1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uY29udGVudC13cmFwcGVyIC5jYWxsb3V0LW1lc3NhZ2Utd3JhcHBlciAuY2FsbG91dC1pY29uIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAxLjUpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2FsbG91dC1tZXNzYWdlLXdyYXBwZXIgLmNhbGxvdXQtaWNvbiBpIHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2FsbG91dC1tZXNzYWdlLXdyYXBwZXIgLmNhbGxvdXQtbWVzc2FnZSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAxLjUpO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWNhbGxvdXQtbWVzc2FnZS1jb2xvcik7XG59XG4uY29udGVudC13cmFwcGVyIC5jaGFydC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogNik7XG59XG4uY29udGVudC13cmFwcGVyIC5jaGFydC1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDEuNSkgY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMi41KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1jYXJkLXRpdGxlLWNvbG9yKTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmNoYXJ0LWNhcmQtYm9keS5iYXItdmVydGljYWwge1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmNoYXJ0LWNhcmQtYm9keS5iYXItaG9yaXpvbnRhbCB7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2hhcnQtY2FyZC1ib2R5LnBpZS1ncmlkIHtcbiAgbWluLWhlaWdodDogMjUwcHg7XG59XG4uY29udGVudC13cmFwcGVyIC5jaGFydC1jYXJkLWJvZHkubGluZS1jaGFydCB7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/charts/rcharts/rcharts.scss":
/*!*********************************************!*\
  !*** ./src/app/charts/rcharts/rcharts.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n:host {\n  --page-title-color: rgb(var(--palette-primary-rgb));\n  --callout-message-color: rgb(var(--palette-info-rgb));\n  --callout-message-background: rgb(var(--palette-info-light-rgb));\n  --card-background: rgb(var(--palette-white-rgb));\n  --card-title-color: rgb(var(--palette-grey-8-rgb));\n  --card-border-color: rgb(var(--palette-grey-2-rgb));\n  --border-radius: 6px;\n  --page-padding: 60px 40px;\n  --page-spacing: 10px;\n}\n.content-wrapper {\n  padding: var(--page-padding);\n}\n.content-wrapper .page-title {\n  color: var(--page-title-color);\n  font-size: 30px;\n  margin-bottom: calc(var(--page-spacing) * 3);\n}\n.content-wrapper .callout-message-wrapper {\n  display: flex;\n  color: var(--callout-message-color);\n  background-color: var(--callout-message-background);\n  padding: calc(var(--page-spacing) * 2.5);\n  border-radius: var(--border-radius);\n  margin-bottom: calc(var(--page-spacing) * 3);\n}\n.content-wrapper .callout-message-wrapper .callout-link {\n  color: var(--callout-message-color);\n  font-weight: 700;\n}\n.content-wrapper .callout-message-wrapper .callout-icon {\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-right: calc(var(--page-spacing) * 1.5);\n}\n.content-wrapper .callout-message-wrapper .callout-icon i {\n  font-size: 40px;\n}\n.content-wrapper .callout-message-wrapper .callout-message {\n  flex-grow: 1;\n  padding-left: calc(var(--page-spacing) * 1.5);\n  border-left: 1px solid var(--callout-message-color);\n}\n.content-wrapper .chart-card {\n  padding: 0px;\n  background-color: var(--card-background);\n  margin-bottom: calc(var(--page-spacing) * 3);\n  border-radius: var(--border-radius);\n  box-shadow: 0px 10px 20px rgba(var(--palette-grey-3-rgb), 0.15),  0px 3px 6px rgba(var(--palette-grey-3-rgb), 0.1);\n}\n.content-wrapper .chart-card-header {\n  border-bottom: 1px solid var(--card-border-color);\n  padding: calc(var(--page-spacing) * 1.5) calc(var(--page-spacing) * 2.5);\n  font-weight: 600;\n  text-align: center;\n  color: var(--card-title-color);\n}\n.content-wrapper .chart-card-body {\n  padding: calc(var(--page-spacing) * 2.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bndpc2UvbWVhbi9zcmMvdGhlbWUvcGFsZXR0ZXMvc2hhcmVkLnNjc3MiLCIvVXNlcnMvc2hhd253aXNlL21lYW4vc3JjL3RoZW1lL3BhbGV0dGVzL21vZGUuc2NzcyIsIi9Vc2Vycy9zaGF3bndpc2UvbWVhbi9zcmMvYXBwL2NoYXJ0cy9yY2hhcnRzL3JjaGFydHMuc2NzcyIsInNyYy9hcHAvY2hhcnRzL3JjaGFydHMvcmNoYXJ0cy5zY3NzIiwiL1VzZXJzL3NoYXdud2lzZS9tZWFuL3NyYy90aGVtZS9taXhpbnMvZWxldmF0aW9ucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBQ0pBO0VBRUUsbURBQUE7RUFDQSxxREFBQTtFQUNBLGdFQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrREFBQTtFQUNBLG1EQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FDMkNGO0FEeENBO0VBQ0UsNEJBQUE7QUMyQ0Y7QUR6Q0U7RUFDRSw4QkFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtBQzJDSjtBRHhDRTtFQUNFLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLG1EQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDRDQUFBO0FDMENKO0FEeENJO0VBQ0UsbUNBQUE7RUFDQSxnQkFBQTtBQzBDTjtBRHZDSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQ3lDTjtBRHhDTTtFQUNFLGVBQUE7QUMwQ1I7QUR2Q0k7RUFDRSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxtREFBQTtBQ3lDTjtBRHJDRTtFQUNFLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsbUNBQUE7RUU0QkEsa0hBQUE7QURZSjtBRHBDRTtFQUNFLGlEQUFBO0VBQ0Esd0VBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNzQ0o7QURuQ0U7RUFDRSx3Q0FBQTtBQ3FDSiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9yY2hhcnRzL3JjaGFydHMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFNoYXJlZFxuKi9cblxuQGltcG9ydCAncHJlZmVyZW5jZXMnO1xuQGltcG9ydCAnaW50ZXJmYWNlJztcbkBpbXBvcnQgJ21vZGUnO1xuXG4vLyBBbiBhYnN0cmFjdCB3YXkgdG8gcHJvdmlkZSBjb2xvcnMuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGFuIGludGVyZmFjZSB0byBib3RoIFNhc3MgdmFyaWFibGVzIGFuZCBDU1MgNCB2YXJpYWJsZXMgYmFzZWQgY29sb3IgcGFsZXR0ZXMuXG5AZnVuY3Rpb24gcGFsZXR0ZS1jb2xvcigkY29sb3ItbmFtZSwgJGFscGhhOiAxKSB7XG4gIC8vICRjb2xvci1wYWxldHRlLW1vZGUgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY2hvb3Nlbi1wYWxldHRlICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBtb2RlLnNjc3NcbiAgLy8gJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlICAgPT4gIERlZmluZWQgaW4gaW50ZXJmYWNlLnNjc3NcbiAgLy8gJGNzczQtdmFyLXByZWZpeCAgICAgICAgICAgPT4gIERlZmluZWQgaW4gcHJlZmVyZW5jZXMuc2Nzc1xuICAvLyAkY3NzNC1jb2xvci1mb3JtYXQgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG5cbiAgQGlmICgkY29sb3ItcGFsZXR0ZS1tb2RlID09ICdjc3MtNCcpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjb2xvci1wYWxldHRlLWludGVyZmFjZTtcblxuICAgICRjb2xvci12YXJpYWJsZS1pbmRleDogaW5kZXgoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlLWluZGV4KSA9PSAnbnVtYmVyJykge1xuICAgICAgJGNvbG9yLXZhcmlhYmxlLW5hbWU6IG50aCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci12YXJpYWJsZS1pbmRleCk7XG5cbiAgICAgIEBpZiAoJGFscGhhID4gMCBhbmQgJGFscGhhIDwgMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYmEodmFyKCcgKyAkY3NzNC12YXItcHJlZml4ICsgJGNvbG9yLXZhcmlhYmxlLW5hbWUgKyAnLScgKyAkY3NzNC1jb2xvci1mb3JtYXQgKycpLCAjeyRhbHBoYX0pJ307XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYih2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArICcpKSd9O1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci1uYW1lfSkgd2FzIG5vdCBmb3VuZCBvbiBDb2xvciBQYWxldHRlIGRlZmluaXRpb24uIE1ha2Ugc3VyZSBpdCdzIGRlZmluZWQgaW4gdGhlIHRoZW1lL3BhbGV0dGVzL2ludGVyZmFjZS5zY3NzIGZpbGVcIjtcbiAgICB9XG4gIH0gQGVsc2UgaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ3Nhc3MnKSB7XG4gICAgJHBhbGV0dGUtcmVmZXJlbmNlOiAkY2hvb3Nlbi1wYWxldHRlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlOiBtYXAtZ2V0KCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLW5hbWUpO1xuXG4gICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBTYXNzIGNvbG9yXG4gICAgQGlmICh0eXBlX29mKCRjb2xvci12YXJpYWJsZSkgPT0gJ2NvbG9yJykge1xuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gcmdiYSgkY29sb3ItdmFyaWFibGUsICRhbHBoYSk7XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICRjb2xvci12YXJpYWJsZTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICBAZXJyb3IgXCJBbHBoYSAoI3skYWxwaGF9KSBtdXN0IGJlIGEgbnVtYmVyXCI7XG4gICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICBAZXJyb3IgXCJDb2xvciAoI3skY29sb3ItdmFyaWFibGV9KSBpcyBub3QgYSBTYXNzIGNvbG9yXCI7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAZXJyb3IgJ05vIENvbG9yIFBhbGV0dGUgbW9kZSBzZWxlY3RlZCBpbiB0aGVtZS9wYWxldHRlcy9wcmVmZXJlbmNlcy5zY3NzJztcbiAgfVxufVxuIiwiLypcbiAgQ1NTIDQgTW9kZVxuKi9cbiRjb2xvci1wYWxldHRlLW1vZGU6ICdjc3MtNCc7XG5cblxuLypcbiAgU2FzcyBNb2RlXG4qL1xuLy8gQGltcG9ydCAnY29yZSc7XG4vL1xuLy8gJGNvbG9yLXBhbGV0dGUtbW9kZTogJ3Nhc3MnO1xuLy9cbi8vIC8vIEltcG9ydCB0aGUgZGVmaW5pdGlvbnMgb2YgdGhlIHBhbGV0dGUgeW91IHdhbnQgdG8gdXNlXG4vLyBAaW1wb3J0ICdwYWxldHRlLTEvZGVmaW5pdGlvbnMnO1xuLy8gLy8gQGltcG9ydCAncGFsZXR0ZS0yL2RlZmluaXRpb25zJztcbi8vXG4vLyAvLyBBc3NpZ24gYSBwYXJ0aWN1bGFyIENvbG9yIFBhbGV0dGUgdG8gdGhlICdjaG9vc2VuLXBhbGV0dGUnIHBvaW50ZXIuXG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlIHdpbGwgYmUgYSBTYXNzIG1hcCBwb2ludGluZyB0byBhbm90aGVyIGNvbG9yIHBhbGV0dGUgU2FzcyBtYXBcbi8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMSk7XG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlOiBidWlsZFNhc3NQYWxldHRlKCRwYWxldHRlLTIpO1xuIiwiQGltcG9ydCAnc2hhcmVkJztcblxuOmhvc3Qge1xuICAvLyBEZWZhdWx0IHZhcmlhYmxlc1xuICAtLXBhZ2UtdGl0bGUtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeScpfTtcbiAgLS1jYWxsb3V0LW1lc3NhZ2UtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignaW5mbycpfTtcbiAgLS1jYWxsb3V0LW1lc3NhZ2UtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCdpbmZvLWxpZ2h0Jyl9O1xuICAtLWNhcmQtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCd3aGl0ZScpfTtcbiAgLS1jYXJkLXRpdGxlLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktOCcpfTtcbiAgLS1jYXJkLWJvcmRlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdncmV5LTInKX07XG4gIC0tYm9yZGVyLXJhZGl1czogNnB4O1xuICAtLXBhZ2UtcGFkZGluZzogNjBweCA0MHB4O1xuICAtLXBhZ2Utc3BhY2luZzogMTBweDtcbn1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtcGFkZGluZyk7XG5cbiAgLnBhZ2UtdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1wYWdlLXRpdGxlLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMyk7XG4gIH1cblxuICAuY2FsbG91dC1tZXNzYWdlLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6IHZhcigtLWNhbGxvdXQtbWVzc2FnZS1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FsbG91dC1tZXNzYWdlLWJhY2tncm91bmQpO1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDIuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMyk7XG5cbiAgICAuY2FsbG91dC1saW5rIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1jYWxsb3V0LW1lc3NhZ2UtY29sb3IpO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG5cbiAgICAuY2FsbG91dC1pY29uIHtcbiAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAxLjUpO1xuICAgICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNhbGxvdXQtbWVzc2FnZSB7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDEuNSk7XG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWNhbGxvdXQtbWVzc2FnZS1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgLmNoYXJ0LWNhcmQge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJhY2tncm91bmQpO1xuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDMpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIEBpbmNsdWRlIGVsZXZhdGlvbih6MywgJ2dyZXktMycpO1xuICB9XG5cbiAgLmNoYXJ0LWNhcmQtaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXItY29sb3IpO1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDEuNSkgY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMi41KTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tY2FyZC10aXRsZS1jb2xvcik7XG4gIH1cblxuICAuY2hhcnQtY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyLjUpO1xuICB9XG59XG4iLCIvKlxuICBTaGFyZWRcbiovXG4vKlxuICBDU1MgNCBNb2RlXG4qL1xuLypcbiAgU2FzcyBNb2RlXG4qL1xuLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbi8qXG4gIFNoYXJlZFxuKi9cbi8qXG4gIENTUyA0IE1vZGVcbiovXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vKlxuICBTaGFyZWRcbiovXG4vKlxuICBDU1MgNCBNb2RlXG4qL1xuLypcbiAgU2FzcyBNb2RlXG4qL1xuLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbjpob3N0IHtcbiAgLS1wYWdlLXRpdGxlLWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpO1xuICAtLWNhbGxvdXQtbWVzc2FnZS1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtaW5mby1yZ2IpKTtcbiAgLS1jYWxsb3V0LW1lc3NhZ2UtYmFja2dyb3VuZDogcmdiKHZhcigtLXBhbGV0dGUtaW5mby1saWdodC1yZ2IpKTtcbiAgLS1jYXJkLWJhY2tncm91bmQ6IHJnYih2YXIoLS1wYWxldHRlLXdoaXRlLXJnYikpO1xuICAtLWNhcmQtdGl0bGUtY29sb3I6IHJnYih2YXIoLS1wYWxldHRlLWdyZXktOC1yZ2IpKTtcbiAgLS1jYXJkLWJvcmRlci1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtZ3JleS0yLXJnYikpO1xuICAtLWJvcmRlci1yYWRpdXM6IDZweDtcbiAgLS1wYWdlLXBhZGRpbmc6IDYwcHggNDBweDtcbiAgLS1wYWdlLXNwYWNpbmc6IDEwcHg7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLXBhZGRpbmcpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAucGFnZS10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLXRpdGxlLWNvbG9yKTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAzKTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmNhbGxvdXQtbWVzc2FnZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IHZhcigtLWNhbGxvdXQtbWVzc2FnZS1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbGxvdXQtbWVzc2FnZS1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMi41KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDMpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2FsbG91dC1tZXNzYWdlLXdyYXBwZXIgLmNhbGxvdXQtbGluayB7XG4gIGNvbG9yOiB2YXIoLS1jYWxsb3V0LW1lc3NhZ2UtY29sb3IpO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2FsbG91dC1tZXNzYWdlLXdyYXBwZXIgLmNhbGxvdXQtaWNvbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMS41KTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmNhbGxvdXQtbWVzc2FnZS13cmFwcGVyIC5jYWxsb3V0LWljb24gaSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmNhbGxvdXQtbWVzc2FnZS13cmFwcGVyIC5jYWxsb3V0LW1lc3NhZ2Uge1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMS41KTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1jYWxsb3V0LW1lc3NhZ2UtY29sb3IpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2hhcnQtY2FyZCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iYWNrZ3JvdW5kKTtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEodmFyKC0tcGFsZXR0ZS1ncmV5LTMtcmdiKSwgMC4xNSksICAwcHggM3B4IDZweCByZ2JhKHZhcigtLXBhbGV0dGUtZ3JleS0zLXJnYiksIDAuMSk7XG59XG4uY29udGVudC13cmFwcGVyIC5jaGFydC1jYXJkLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jYXJkLWJvcmRlci1jb2xvcik7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDEuNSkgY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMi41KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tY2FyZC10aXRsZS1jb2xvcik7XG59XG4uY29udGVudC13cmFwcGVyIC5jaGFydC1jYXJkLWJvZHkge1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyLjUpO1xufSIsIkBpbXBvcnQgJ3V0aWxzJztcbkBpbXBvcnQgJy4uL3BhbGV0dGVzL3NoYXJlZCc7XG5cbiRlbGV2YXRpb25zLXNwZWNzOiAoXG4gIHoxOiAoXG4gICAgKHNoYWRvdzogMHB4IDFweCAzcHgsIG9wYWNpdHk6IDAuMTIpLFxuICAgIChzaGFkb3c6IDBweCAxcHggMnB4LCBvcGFjaXR5OiAwLjI0KVxuICApLFxuICB6MjogKFxuICAgIChzaGFkb3c6IDBweCAzcHggNnB4LCBvcGFjaXR5OiAwLjE1KSxcbiAgICAoc2hhZG93OiAwcHggMnB4IDRweCwgb3BhY2l0eTogMC4xMilcbiAgKSxcbiAgejM6IChcbiAgICAoc2hhZG93OiAwcHggMTBweCAyMHB4LCBvcGFjaXR5OiAwLjE1KSxcbiAgICAoc2hhZG93OiAwcHggM3B4IDZweCwgb3BhY2l0eTogMC4xMClcbiAgKSxcbiAgejQ6IChcbiAgICAoc2hhZG93OiAwcHggMTVweCAyNXB4LCBvcGFjaXR5OiAwLjE1KSxcbiAgICAoc2hhZG93OiAwcHggNXB4IDEwcHgsIG9wYWNpdHk6IDAuMDUpXG4gICksXG4gIHo1OiAoXG4gICAgKHNoYWRvdzogMHB4IDIwcHggNDBweCwgb3BhY2l0eTogMC4yMClcbiAgKVxuKTtcblxuLy8gQG1peGluIGVsZXZhdGlvbigkejogejEsICRjb2xvcjogI0NDQykge1xuQG1peGluIGVsZXZhdGlvbigkejogejEsICRjb2xvcjogJ2dyZXktMicpIHtcbiAgJHNoYWRvd3MtcmVmZXJlbmNlOiAkZWxldmF0aW9ucy1zcGVjcztcblxuICAvLyBDaGVjayBpZiB3ZSBoYXZlIGEgc3BlYyBmb3IgdGhlIGRlc2lyZWQgc2hhZG93XG4gIEBpZiBtYXAtaGFzLWtleSgkc2hhZG93cy1yZWZlcmVuY2UsICR6KSB7XG4gICAgLy8gQWNjdW11bGF0ZSBtdWx0aXBsZSBzaGFkb3cgdmFsdWVzIGluIHRoaXMgbGlzdFxuICAgICR6LXNoYWRvd3MtdmFsdWVzOiAoKTtcbiAgICAvLyBHZXQgc2hhZG93cyBtYXBcbiAgICAkei1zaGFkb3dzOiBtYXAtZ2V0KCRzaGFkb3dzLXJlZmVyZW5jZSwgJHopO1xuXG4gICAgLy8gQGVycm9yICR6LXNoYWRvd3M7XG5cbiAgICAvLyBNdWx0aXBsZSBzaGFkb3dzIGNvbWJpbmVkXG4gICAgQGlmICh0eXBlX29mKCR6LXNoYWRvd3MpID09ICdsaXN0Jykge1xuICAgICAgQGVhY2ggJHotc2hhZG93IGluICR6LXNoYWRvd3Mge1xuICAgICAgICBAaWYgKHR5cGVfb2YoJHotc2hhZG93KSA9PSAnbWFwJykge1xuICAgICAgICAgICRzaGFkb3c6IG1hcC1nZXQoJHotc2hhZG93LCBzaGFkb3cpO1xuICAgICAgICAgICRvcGFjaXR5OiBtYXAtZ2V0KCR6LXNoYWRvdywgb3BhY2l0eSk7XG5cbiAgICAgICAgICAvLyBAZXJyb3IgJHotc2hhZG93O1xuICAgICAgICAgIC8vIEBlcnJvciAkc2hhZG93O1xuICAgICAgICAgIC8vIEBlcnJvciAkb3BhY2l0eTtcblxuICAgICAgICAgIC8vICRzaGFkb3ctdmFsdWU6ICRzaGFkb3cgKyAnICcgKyByZ2JhKCRjb2xvciwgJG9wYWNpdHkpO1xuICAgICAgICAgICRzaGFkb3ctdmFsdWU6ICRzaGFkb3cgKyAnICcgKyBwYWxldHRlLWNvbG9yKCRjb2xvciwgJG9wYWNpdHkpO1xuXG4gICAgICAgICAgLy8gQGVycm9yICRzaGFkb3ctdmFsdWU7XG5cbiAgICAgICAgICAkei1zaGFkb3dzLXZhbHVlczogYXBwZW5kKCR6LXNoYWRvd3MtdmFsdWVzLCAkc2hhZG93LXZhbHVlKTtcblxuICAgICAgICAgIC8vIEBlcnJvciAkei1zaGFkb3dzLXZhbHVlcztcbiAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgQGVycm9yICdJbnZhbGlkIHNoYWRvdyBkZWZpbml0aW9uIGZvciBhcmd1bWVudCAkei1zaGFkb3c6IGAjeyR6LXNoYWRvd31gJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKHR5cGVfb2YoJHotc2hhZG93cykgPT0gJ21hcCcpIHtcbiAgICAgIC8vIFNpbmdsZSBzaGFkb3dcbiAgICAgICRzaGFkb3c6IG1hcC1nZXQoJHotc2hhZG93cywgc2hhZG93KTtcbiAgICAgICRvcGFjaXR5OiBtYXAtZ2V0KCR6LXNoYWRvd3MsIG9wYWNpdHkpO1xuXG4gICAgICAvLyBAZXJyb3IgJHotc2hhZG93O1xuICAgICAgLy8gQGVycm9yICRzaGFkb3c7XG4gICAgICAvLyBAZXJyb3IgJG9wYWNpdHk7XG5cbiAgICAgIC8vICRzaGFkb3ctdmFsdWU6ICRzaGFkb3cgKyAnICcgKyByZ2JhKCRjb2xvciwgJG9wYWNpdHkpO1xuICAgICAgJHNoYWRvdy12YWx1ZTogJHNoYWRvdyArICcgJyArIHBhbGV0dGUtY29sb3IoJGNvbG9yLCAkb3BhY2l0eSk7XG5cbiAgICAgIC8vIEBlcnJvciAkc2hhZG93LXZhbHVlO1xuXG4gICAgICAkei1zaGFkb3dzLXZhbHVlczogYXBwZW5kKCR6LXNoYWRvd3MtdmFsdWVzLCAkc2hhZG93LXZhbHVlKTtcblxuICAgICAgLy8gQGVycm9yICR6LXNoYWRvd3MtdmFsdWVzO1xuICAgIH0gQGVsc2Uge1xuICAgICAgQGVycm9yICdJbnZhbGlkIHNoYWRvdyB2YWx1ZXMgZm9yIGFyZ3VtZW50ICR6LXNoYWRvd3M6IGAjeyR6LXNoYWRvd3N9YC4gSXRcXCdzIG5laXRoZXIgYSBtYXAgb3IgYSBsaXN0JztcbiAgICB9XG5cbiAgICAvLyBAZXJyb3IgI3t0by1zdHJpbmcoJHotc2hhZG93cy12YWx1ZXMsICcsICcpfTtcblxuICAgIGJveC1zaGFkb3c6ICN7dG8tc3RyaW5nKCR6LXNoYWRvd3MtdmFsdWVzLCAnLCAnKX07XG4gIH0gQGVsc2Uge1xuICAgIEBlcnJvciAnTm8gcmVmZXJlbmNlIGZvdW5kIGZvciBhcmd1bWVudCAkejogYCN7JHp9YCBpbiBzaGFkb3dzIHNwZWNzLic7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/charts/rcharts/rcharts.ts":
/*!*******************************************!*\
  !*** ./src/app/charts/rcharts/rcharts.ts ***!
  \*******************************************/
/*! exports provided: RealCharts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealCharts", function() { return RealCharts; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _theme_echarts_theme_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../theme/echarts-theme.js */ "./src/theme/echarts-theme.js");
/* harmony import */ var _theme_echarts_theme_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_theme_echarts_theme_js__WEBPACK_IMPORTED_MODULE_3__);



/** echarts theme: */

let RealCharts = class RealCharts {
    constructor(platformId) {
        this.platformId = platformId;
        this.multiplePieChartOption = {
            tooltip: {
                trigger: 'none'
            },
            legend: {
                type: 'plain',
                orient: 'vertical',
                icon: 'circle',
                left: 'left',
                data: ['Development', 'Design', 'Testing']
            },
            series: [{
                    name: 'Development',
                    type: 'pie',
                    clockwise: true,
                    hoverAnimation: false,
                    radius: [105, 130],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    data: [
                        {
                            value: 68,
                            name: 'Development'
                        },
                        {
                            value: 32,
                            name: 'invisible',
                            itemStyle: {
                                color: '#FFF',
                                barBorderRadius: 6
                            },
                            emphasis: {
                                itemStyle: {
                                    color: '#FFF',
                                    label: {
                                        show: false
                                    },
                                    labelLine: {
                                        show: false
                                    }
                                }
                            }
                        }
                    ]
                }, {
                    name: 'Design',
                    type: 'pie',
                    clockwise: true,
                    hoverAnimation: false,
                    radius: [75, 100],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    data: [
                        {
                            value: 50,
                            name: 'Design'
                        },
                        {
                            value: 71,
                            name: 'invisible',
                            itemStyle: {
                                color: '#FFF'
                            }
                        }
                    ]
                }, {
                    name: 'Testing',
                    type: 'pie',
                    clockwise: true,
                    hoverAnimation: false,
                    radius: [45, 70],
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    },
                    data: [
                        {
                            value: 40,
                            name: 'Testing'
                        }, {
                            value: 97,
                            name: 'invisible',
                            itemStyle: {
                                color: '#FFF'
                            }
                        }
                    ]
                }
            ]
        };
        this.multipleLineChartOption = {
            tooltip: {
                trigger: 'item',
                formatter: '{c}'
            },
            xAxis: {
                type: 'category',
                axisLine: {
                    show: false
                },
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                splitLine: {
                    show: false
                },
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false
                },
                splitNumber: 4,
                axisLine: {
                    show: false
                },
            },
            legend: {
                type: 'plain',
                orient: 'horizontal',
                bottom: 0,
            },
            series: [
                {
                    name: 'This week',
                    data: [680, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                },
                {
                    name: 'Last week',
                    data: [620, 999, 1003, 1200, 1100, 1200, 1500],
                    type: 'line',
                    lineStyle: {
                        normal: {
                            color: 'grey',
                            type: 'dashed'
                        }
                    },
                }
            ]
        };
        this.pieChartOption = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'right',
                data: ['USA', 'Brazil', 'India', 'France', 'UK'],
            },
            series: [
                {
                    name: 'Transactions',
                    type: 'pie',
                    radius: '80%',
                    center: ['50%', '50%'],
                    data: [
                        {
                            name: 'USA',
                            value: 500
                        },
                        {
                            name: 'Brazil',
                            value: 300
                        },
                        {
                            name: 'India',
                            value: 200
                        },
                        {
                            name: 'France',
                            value: 100
                        },
                        {
                            name: 'UK',
                            value: 100
                        }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: '#ccc'
                        }
                    },
                    label: {
                        normal: {
                            textStyle: {
                                color: '#999999'
                            },
                        },
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: '#999999'
                            },
                        },
                    }
                }
            ]
        };
        this.barChartOption = {
            tooltip: {
                position: 'top',
                trigger: 'axis',
                axisPointer: {
                    type: 'none'
                },
            },
            legend: {
                type: 'plain',
                orient: 'vertical',
                right: 0,
                top: 0,
                data: [
                    {
                        name: 'Product 1',
                        icon: 'circle'
                    },
                    {
                        name: 'Product 2',
                        icon: 'circle'
                    }
                ]
            },
            xAxis: {
                axisLine: {
                    show: false
                },
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                silent: false,
                splitLine: {
                    show: false
                },
            },
            yAxis: {
                axisTick: {
                    show: false
                },
                splitNumber: 4,
                axisLine: {
                    show: false
                },
            },
            series: [
                {
                    name: 'Product 1',
                    type: 'bar',
                    data: [600, 400, 300, 500, 350, 400, 471, 500, 600, 700, 590, 490],
                    animationDelay: (idx) => idx * 10,
                    itemStyle: {
                        barBorderRadius: 6
                    },
                    barMaxWidth: 10
                },
                {
                    name: 'Product 2',
                    type: 'bar',
                    data: [300, 450, 320, 370, 290, 370, 500, 621, 789, 650, 599, 700],
                    animationDelay: (idx) => idx * 10,
                    itemStyle: {
                        barBorderRadius: 6
                    },
                    barMaxWidth: 10
                }
            ],
            animationEasing: 'elasticOut',
            animationDelayUpdate: (idx) => idx * 5
        };
        this.areaStackChartOption = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            legend: {
                data: ['Twitter', 'Facebook', 'Google', 'Medium', 'Email'],
            },
            toolbox: {
                feature: {
                    saveAsImage: {
                        title: 'Download'
                    }
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'Users'
                }
            ],
            series: [
                {
                    name: 'Twitter',
                    type: 'line',
                    stack: 'a',
                    areaStyle: {},
                    data: [120, 132, 101, 134, 90, 230, 210, 240, 250, 220, 201, 250]
                },
                {
                    name: 'Facebook',
                    type: 'line',
                    stack: 'a',
                    areaStyle: {},
                    data: [220, 182, 191, 234, 290, 330, 310, 334, 356, 310, 330, 320]
                },
                {
                    name: 'Google',
                    type: 'line',
                    stack: 'a',
                    areaStyle: {},
                    data: [150, 232, 201, 154, 190, 330, 410, 440, 478, 510, 550, 470]
                },
                {
                    name: 'Medium',
                    type: 'line',
                    stack: 'a',
                    areaStyle: { normal: {} },
                    data: [320, 332, 301, 334, 390, 330, 320, 330, 300, 380, 400, 390]
                },
                {
                    name: 'Email',
                    type: 'line',
                    stack: 'a',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: { normal: {} },
                    data: [620, 732, 701, 734, 990, 1130, 1120, 1170, 1250, 1299, 1310, 1360]
                }
            ]
        };
        this.doughnutChartOption = {
            color: ['#EF4E4E', '#FF9B9B', '#FFE3E3'],
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c} ({d}%)'
            },
            legend: {
                orient: 'horizontal',
                type: 'plain',
                bottom: 0,
                data: [
                    {
                        name: 'Desktop',
                        icon: 'circle'
                    },
                    {
                        name: 'Tablet',
                        icon: 'circle'
                    },
                    {
                        name: 'Mobile',
                        icon: 'circle'
                    }
                ]
            },
            series: [
                {
                    type: 'pie',
                    radius: ['60%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false
                    },
                    data: [
                        { value: 335, name: 'Desktop' },
                        { value: 310, name: 'Mobile' },
                        { value: 234, name: 'Tablet' }
                    ],
                    itemStyle: {
                        normal: {
                            borderWidth: 4,
                            borderColor: '#FFFFFF'
                        }
                    }
                }
            ]
        };
        this.smoothLineOption = {
            xAxis: {
                axisLine: {
                    show: false
                },
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                silent: false,
                splitLine: {
                    show: false
                },
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false
                },
                splitNumber: 5,
                axisLabel: {
                    formatter: '${value}k',
                    fontWeight: 'bold'
                },
                axisLine: {
                    show: false
                },
            },
            series: [{
                    data: [0, 10, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40],
                    type: 'line',
                    smooth: true,
                    lineStyle: {
                        color: '#2c7be5',
                        width: 3
                    },
                    symbol: 'none'
                }]
        };
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId);
    }
};
RealCharts.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
];
RealCharts = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rcharts-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./rcharts.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/rcharts/rcharts.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./rcharts.scss */ "./src/app/charts/rcharts/rcharts.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]))
], RealCharts);



/***/ }),

/***/ "./src/app/charts/real-ngx/realngx.component.ts":
/*!******************************************************!*\
  !*** ./src/app/charts/real-ngx/realngx.component.ts ***!
  \******************************************************/
/*! exports provided: RealXCharts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealXCharts", function() { return RealXCharts; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_dashboards_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dashboards.service */ "./src/app/services/dashboards.service.ts");




let RealXCharts = class RealXCharts {
    constructor(platformId, service) {
        this.platformId = platformId;
        this.service = service;
        this.globalValues = {};
        this.verticalBarOptions = {
            showXAxis: true,
            showYAxis: true,
            gradient: false,
            showLegend: true,
            showGridLines: true,
            barPadding: 50,
            showXAxisLabel: false,
            xAxisLabel: 'Country',
            showYAxisLabel: true,
            yAxisLabel: 'Sales'
        };
        this.horizontalBarOptions = {
            showXAxis: true,
            showYAxis: true,
            showLegend: true,
            showGridLines: false,
            barPadding: 6,
            groupPadding: 30,
            showXAxisLabel: false,
            xAxisLabel: 'Country',
            showYAxisLabel: false,
            legendPosition: 'right'
        };
        this.lineChartOptions = {
            showXAxis: true,
            showYAxis: true,
            showLegend: true,
            showGridLines: true,
            showXAxisLabel: false,
            showYAxisLabel: true,
            legendPosition: 'right',
            autoScale: false,
            roundDomains: true
        };
        this.colorScheme = {
            domain: ['#035388', '#40c3f7', '#b3ecff', '#52606d', '#127fbf', '#9aa5b1']
        };
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId);
        this.service.getCovidGlobal().subscribe(res => {
            this.globalValues = res;
        });
        this.countriesData =
            [
                {
                    name: 'India',
                    value: 7689
                },
                {
                    name: 'USA',
                    value: 1204
                },
                {
                    name: 'China',
                    value: 67
                },
                {
                    name: 'Jordan',
                    value: 410
                },
                {
                    name: 'United Kingdom',
                    value: 5169
                }
            ];
        this.countriesData2 =
            [
                {
                    name: 'Germany',
                    series: [
                        {
                            name: 'Total Deaths',
                            value: 48770
                        },
                        {
                            name: 'Deaths Per Million',
                            value: 582
                        },
                        {
                            name: 'Cases Per Million',
                            value: 24682
                        }
                    ]
                },
                {
                    name: 'United States',
                    series: [
                        {
                            name: 'Total Deaths',
                            value: 398435
                        },
                        {
                            name: 'Deaths Per Million',
                            value: 1203
                        },
                        {
                            name: 'Cases Per Million',
                            value: 72619
                        }
                    ]
                },
                {
                    name: 'France',
                    series: [
                        {
                            name: 'Total Deaths',
                            value: 70951
                        },
                        {
                            name: 'Deaths Per Million',
                            value: 1086
                        },
                        {
                            name: 'Cases Per Million',
                            value: 44275
                        }
                    ]
                },
                {
                    name: 'United Kingdom',
                    series: [
                        {
                            name: 'Total Deaths',
                            value: 91470
                        },
                        {
                            name: 'Deaths Per Million',
                            value: 1347
                        },
                        {
                            name: 'Cases Per Million',
                            value: 51068
                        }
                    ]
                }
            ];
        this.contestData =
            [
                {
                    name: 'Agustin',
                    value: 4000
                },
                {
                    name: 'Rachel',
                    value: 2500
                },
                {
                    name: 'Max',
                    value: 2000
                },
                {
                    name: 'Nina',
                    value: 1700
                },
                {
                    name: 'Sollange',
                    value: 1200
                }
            ];
        this.lineChartData =
            [
                {
                    name: 'This week',
                    series: [
                        {
                            value: 2303,
                            name: 'Mon'
                        },
                        {
                            value: 5616,
                            name: 'Tue'
                        },
                        {
                            value: 4862,
                            name: 'Wed'
                        },
                        {
                            value: 3658,
                            name: 'Thu'
                        },
                        {
                            value: 6089,
                            name: 'Fri'
                        }
                    ]
                },
                {
                    name: 'Last week',
                    series: [
                        {
                            value: 2000,
                            name: 'Mon'
                        },
                        {
                            value: 4300,
                            name: 'Tue'
                        },
                        {
                            value: 5200,
                            name: 'Wed'
                        },
                        {
                            value: 3100,
                            name: 'Thu'
                        },
                        {
                            value: 4300,
                            name: 'Fri'
                        }
                    ]
                }
            ];
    } // end constructor
    // start of lifecycle method called after construct
    ngOnInit() {
        console.log(this.globalValues);
    }
};
RealXCharts.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: _services_dashboards_service__WEBPACK_IMPORTED_MODULE_3__["DashboardsService"] }
];
RealXCharts = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ngx-real-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./realngx.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/real-ngx/realngx.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./realngx.scss */ "./src/app/charts/real-ngx/realngx.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]))
], RealXCharts);



/***/ }),

/***/ "./src/app/charts/real-ngx/realngx.scss":
/*!**********************************************!*\
  !*** ./src/app/charts/real-ngx/realngx.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n:host {\n  --page-title-color: rgb(var(--palette-primary-rgb));\n  --callout-message-color: rgb(var(--palette-info-rgb));\n  --callout-message-background: rgb(var(--palette-info-light-rgb));\n  --card-title-color: rgb(var(--palette-grey-8-rgb));\n  --border-radius: 6px;\n  --page-padding: 60px 40px;\n  --page-spacing: 10px;\n}\n.content-wrapper {\n  padding: var(--page-padding);\n}\n.content-wrapper .page-title {\n  color: var(--page-title-color);\n  font-size: 30px;\n  margin-bottom: calc(var(--page-spacing) * 3);\n}\n.content-wrapper .callout-message-wrapper {\n  display: flex;\n  color: var(--callout-message-color);\n  background-color: var(--callout-message-background);\n  padding: calc(var(--page-spacing) * 2.5);\n  border-radius: var(--border-radius);\n  margin-bottom: calc(var(--page-spacing) * 3);\n}\n.content-wrapper .callout-message-wrapper .callout-link {\n  color: var(--callout-message-color);\n  font-weight: 700;\n}\n.content-wrapper .callout-message-wrapper .callout-icon {\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-right: calc(var(--page-spacing) * 1.5);\n}\n.content-wrapper .callout-message-wrapper .callout-icon i {\n  font-size: 40px;\n}\n.content-wrapper .callout-message-wrapper .callout-message {\n  flex-grow: 1;\n  padding-left: calc(var(--page-spacing) * 1.5);\n  border-left: 1px solid var(--callout-message-color);\n}\n.content-wrapper .chart-card {\n  margin-bottom: calc(var(--page-spacing) * 6);\n}\n.content-wrapper .chart-card-header {\n  padding: calc(var(--page-spacing) * 1.5) calc(var(--page-spacing) * 2.5);\n  font-weight: 700;\n  font-size: 20px;\n  text-align: center;\n  color: var(--card-title-color);\n}\n.content-wrapper .chart-card-body.bar-vertical {\n  min-height: 400px;\n}\n.content-wrapper .chart-card-body.bar-horizontal {\n  min-height: 300px;\n}\n.content-wrapper .chart-card-body.pie-grid {\n  min-height: 250px;\n}\n.content-wrapper .chart-card-body.line-chart {\n  min-height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bndpc2UvbWVhbi9zcmMvdGhlbWUvcGFsZXR0ZXMvc2hhcmVkLnNjc3MiLCIvVXNlcnMvc2hhd253aXNlL21lYW4vc3JjL3RoZW1lL3BhbGV0dGVzL21vZGUuc2NzcyIsIi9Vc2Vycy9zaGF3bndpc2UvbWVhbi9zcmMvYXBwL2NoYXJ0cy9yZWFsLW5neC9yZWFsbmd4LnNjc3MiLCJzcmMvYXBwL2NoYXJ0cy9yZWFsLW5neC9yZWFsbmd4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FETkE7O0NBQUE7QUNBQTs7Q0FBQTtBQU1BOztDQUFBO0FDSkE7RUFFRSxtREFBQTtFQUNBLHFEQUFBO0VBQ0EsZ0VBQUE7RUFDQSxrREFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQzJDRjtBRHhDQTtFQUNFLDRCQUFBO0FDMkNGO0FEekNFO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7QUMyQ0o7QUR4Q0U7RUFDRSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSxtREFBQTtFQUNBLHdDQUFBO0VBQ0EsbUNBQUE7RUFDQSw0Q0FBQTtBQzBDSjtBRHhDSTtFQUNFLG1DQUFBO0VBQ0EsZ0JBQUE7QUMwQ047QUR2Q0k7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkNBQUE7QUN5Q047QUR4Q007RUFDRSxlQUFBO0FDMENSO0FEdkNJO0VBQ0UsWUFBQTtFQUNBLDZDQUFBO0VBQ0EsbURBQUE7QUN5Q047QURyQ0U7RUFDRSw0Q0FBQTtBQ3VDSjtBRHBDRTtFQUNFLHdFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQ3NDSjtBRGxDSTtFQUNDLGlCQUFBO0FDb0NMO0FEbENJO0VBQ0MsaUJBQUE7QUNvQ0w7QURsQ0k7RUFDQyxpQkFBQTtBQ29DTDtBRGxDSTtFQUNDLGlCQUFBO0FDb0NMIiwiZmlsZSI6InNyYy9hcHAvY2hhcnRzL3JlYWwtbmd4L3JlYWxuZ3guc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFNoYXJlZFxuKi9cblxuQGltcG9ydCAncHJlZmVyZW5jZXMnO1xuQGltcG9ydCAnaW50ZXJmYWNlJztcbkBpbXBvcnQgJ21vZGUnO1xuXG4vLyBBbiBhYnN0cmFjdCB3YXkgdG8gcHJvdmlkZSBjb2xvcnMuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGFuIGludGVyZmFjZSB0byBib3RoIFNhc3MgdmFyaWFibGVzIGFuZCBDU1MgNCB2YXJpYWJsZXMgYmFzZWQgY29sb3IgcGFsZXR0ZXMuXG5AZnVuY3Rpb24gcGFsZXR0ZS1jb2xvcigkY29sb3ItbmFtZSwgJGFscGhhOiAxKSB7XG4gIC8vICRjb2xvci1wYWxldHRlLW1vZGUgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY2hvb3Nlbi1wYWxldHRlICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBtb2RlLnNjc3NcbiAgLy8gJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlICAgPT4gIERlZmluZWQgaW4gaW50ZXJmYWNlLnNjc3NcbiAgLy8gJGNzczQtdmFyLXByZWZpeCAgICAgICAgICAgPT4gIERlZmluZWQgaW4gcHJlZmVyZW5jZXMuc2Nzc1xuICAvLyAkY3NzNC1jb2xvci1mb3JtYXQgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG5cbiAgQGlmICgkY29sb3ItcGFsZXR0ZS1tb2RlID09ICdjc3MtNCcpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjb2xvci1wYWxldHRlLWludGVyZmFjZTtcblxuICAgICRjb2xvci12YXJpYWJsZS1pbmRleDogaW5kZXgoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlLWluZGV4KSA9PSAnbnVtYmVyJykge1xuICAgICAgJGNvbG9yLXZhcmlhYmxlLW5hbWU6IG50aCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci12YXJpYWJsZS1pbmRleCk7XG5cbiAgICAgIEBpZiAoJGFscGhhID4gMCBhbmQgJGFscGhhIDwgMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYmEodmFyKCcgKyAkY3NzNC12YXItcHJlZml4ICsgJGNvbG9yLXZhcmlhYmxlLW5hbWUgKyAnLScgKyAkY3NzNC1jb2xvci1mb3JtYXQgKycpLCAjeyRhbHBoYX0pJ307XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYih2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArICcpKSd9O1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci1uYW1lfSkgd2FzIG5vdCBmb3VuZCBvbiBDb2xvciBQYWxldHRlIGRlZmluaXRpb24uIE1ha2Ugc3VyZSBpdCdzIGRlZmluZWQgaW4gdGhlIHRoZW1lL3BhbGV0dGVzL2ludGVyZmFjZS5zY3NzIGZpbGVcIjtcbiAgICB9XG4gIH0gQGVsc2UgaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ3Nhc3MnKSB7XG4gICAgJHBhbGV0dGUtcmVmZXJlbmNlOiAkY2hvb3Nlbi1wYWxldHRlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlOiBtYXAtZ2V0KCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLW5hbWUpO1xuXG4gICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBTYXNzIGNvbG9yXG4gICAgQGlmICh0eXBlX29mKCRjb2xvci12YXJpYWJsZSkgPT0gJ2NvbG9yJykge1xuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gcmdiYSgkY29sb3ItdmFyaWFibGUsICRhbHBoYSk7XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICRjb2xvci12YXJpYWJsZTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICBAZXJyb3IgXCJBbHBoYSAoI3skYWxwaGF9KSBtdXN0IGJlIGEgbnVtYmVyXCI7XG4gICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICBAZXJyb3IgXCJDb2xvciAoI3skY29sb3ItdmFyaWFibGV9KSBpcyBub3QgYSBTYXNzIGNvbG9yXCI7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAZXJyb3IgJ05vIENvbG9yIFBhbGV0dGUgbW9kZSBzZWxlY3RlZCBpbiB0aGVtZS9wYWxldHRlcy9wcmVmZXJlbmNlcy5zY3NzJztcbiAgfVxufVxuIiwiLypcbiAgQ1NTIDQgTW9kZVxuKi9cbiRjb2xvci1wYWxldHRlLW1vZGU6ICdjc3MtNCc7XG5cblxuLypcbiAgU2FzcyBNb2RlXG4qL1xuLy8gQGltcG9ydCAnY29yZSc7XG4vL1xuLy8gJGNvbG9yLXBhbGV0dGUtbW9kZTogJ3Nhc3MnO1xuLy9cbi8vIC8vIEltcG9ydCB0aGUgZGVmaW5pdGlvbnMgb2YgdGhlIHBhbGV0dGUgeW91IHdhbnQgdG8gdXNlXG4vLyBAaW1wb3J0ICdwYWxldHRlLTEvZGVmaW5pdGlvbnMnO1xuLy8gLy8gQGltcG9ydCAncGFsZXR0ZS0yL2RlZmluaXRpb25zJztcbi8vXG4vLyAvLyBBc3NpZ24gYSBwYXJ0aWN1bGFyIENvbG9yIFBhbGV0dGUgdG8gdGhlICdjaG9vc2VuLXBhbGV0dGUnIHBvaW50ZXIuXG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlIHdpbGwgYmUgYSBTYXNzIG1hcCBwb2ludGluZyB0byBhbm90aGVyIGNvbG9yIHBhbGV0dGUgU2FzcyBtYXBcbi8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMSk7XG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlOiBidWlsZFNhc3NQYWxldHRlKCRwYWxldHRlLTIpO1xuIiwiQGltcG9ydCAnc2hhcmVkJztcblxuOmhvc3Qge1xuICAvLyBEZWZhdWx0IHZhcmlhYmxlc1xuICAtLXBhZ2UtdGl0bGUtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeScpfTtcbiAgLS1jYWxsb3V0LW1lc3NhZ2UtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignaW5mbycpfTtcbiAgLS1jYWxsb3V0LW1lc3NhZ2UtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCdpbmZvLWxpZ2h0Jyl9O1xuICAtLWNhcmQtdGl0bGUtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignZ3JleS04Jyl9O1xuICAtLWJvcmRlci1yYWRpdXM6IDZweDtcbiAgLS1wYWdlLXBhZGRpbmc6IDYwcHggNDBweDtcbiAgLS1wYWdlLXNwYWNpbmc6IDEwcHg7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLXBhZGRpbmcpO1xuXG4gIC5wYWdlLXRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tcGFnZS10aXRsZS1jb2xvcik7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDMpO1xuICB9XG5cbiAgLmNhbGxvdXQtbWVzc2FnZS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiB2YXIoLS1jYWxsb3V0LW1lc3NhZ2UtY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbGxvdXQtbWVzc2FnZS1iYWNrZ3JvdW5kKTtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDMpO1xuXG4gICAgLmNhbGxvdXQtbGluayB7XG4gICAgICBjb2xvcjogdmFyKC0tY2FsbG91dC1tZXNzYWdlLWNvbG9yKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgfVxuXG4gICAgLmNhbGxvdXQtaWNvbiB7XG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMS41KTtcbiAgICAgIGkge1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5jYWxsb3V0LW1lc3NhZ2Uge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAxLjUpO1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1jYWxsb3V0LW1lc3NhZ2UtY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIC5jaGFydC1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiA2KTtcbiAgfVxuXG4gIC5jaGFydC1jYXJkLWhlYWRlciB7XG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMS41KSBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyLjUpO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tY2FyZC10aXRsZS1jb2xvcik7XG4gIH1cblxuICAuY2hhcnQtY2FyZC1ib2R5IHtcbiAgICAmLmJhci12ZXJ0aWNhbCB7XG4gICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICAgIH1cbiAgICAmLmJhci1ob3Jpem9udGFsIHtcbiAgICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgfVxuICAgICYucGllLWdyaWQge1xuICAgICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgICB9XG4gICAgJi5saW5lLWNoYXJ0IHtcbiAgICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgfVxuICB9XG59XG4iLCIvKlxuICBTaGFyZWRcbiovXG4vKlxuICBDU1MgNCBNb2RlXG4qL1xuLypcbiAgU2FzcyBNb2RlXG4qL1xuLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbi8qXG4gIFNoYXJlZFxuKi9cbi8qXG4gIENTUyA0IE1vZGVcbiovXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vKlxuICBTaGFyZWRcbiovXG4vKlxuICBDU1MgNCBNb2RlXG4qL1xuLypcbiAgU2FzcyBNb2RlXG4qL1xuLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbjpob3N0IHtcbiAgLS1wYWdlLXRpdGxlLWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpO1xuICAtLWNhbGxvdXQtbWVzc2FnZS1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtaW5mby1yZ2IpKTtcbiAgLS1jYWxsb3V0LW1lc3NhZ2UtYmFja2dyb3VuZDogcmdiKHZhcigtLXBhbGV0dGUtaW5mby1saWdodC1yZ2IpKTtcbiAgLS1jYXJkLXRpdGxlLWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS1ncmV5LTgtcmdiKSk7XG4gIC0tYm9yZGVyLXJhZGl1czogNnB4O1xuICAtLXBhZ2UtcGFkZGluZzogNjBweCA0MHB4O1xuICAtLXBhZ2Utc3BhY2luZzogMTBweDtcbn1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtcGFkZGluZyk7XG59XG4uY29udGVudC13cmFwcGVyIC5wYWdlLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXBhZ2UtdGl0bGUtY29sb3IpO1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDMpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2FsbG91dC1tZXNzYWdlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogdmFyKC0tY2FsbG91dC1tZXNzYWdlLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FsbG91dC1tZXNzYWdlLWJhY2tncm91bmQpO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyLjUpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMyk7XG59XG4uY29udGVudC13cmFwcGVyIC5jYWxsb3V0LW1lc3NhZ2Utd3JhcHBlciAuY2FsbG91dC1saW5rIHtcbiAgY29sb3I6IHZhcigtLWNhbGxvdXQtbWVzc2FnZS1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uY29udGVudC13cmFwcGVyIC5jYWxsb3V0LW1lc3NhZ2Utd3JhcHBlciAuY2FsbG91dC1pY29uIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAxLjUpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2FsbG91dC1tZXNzYWdlLXdyYXBwZXIgLmNhbGxvdXQtaWNvbiBpIHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2FsbG91dC1tZXNzYWdlLXdyYXBwZXIgLmNhbGxvdXQtbWVzc2FnZSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAxLjUpO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWNhbGxvdXQtbWVzc2FnZS1jb2xvcik7XG59XG4uY29udGVudC13cmFwcGVyIC5jaGFydC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogNik7XG59XG4uY29udGVudC13cmFwcGVyIC5jaGFydC1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDEuNSkgY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMi41KTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1jYXJkLXRpdGxlLWNvbG9yKTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmNoYXJ0LWNhcmQtYm9keS5iYXItdmVydGljYWwge1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmNoYXJ0LWNhcmQtYm9keS5iYXItaG9yaXpvbnRhbCB7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2hhcnQtY2FyZC1ib2R5LnBpZS1ncmlkIHtcbiAgbWluLWhlaWdodDogMjUwcHg7XG59XG4uY29udGVudC13cmFwcGVyIC5jaGFydC1jYXJkLWJvZHkubGluZS1jaGFydCB7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/charts/realjs/realjs-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/charts/realjs/realjs-page.component.ts ***!
  \********************************************************/
/*! exports provided: RealTSCharts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealTSCharts", function() { return RealTSCharts; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_4__);





let RealTSCharts = class RealTSCharts {
    constructor(platformId, themeService) {
        this.platformId = platformId;
        this.themeService = themeService;
        // Line Chart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Transactions' },
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                borderColor: '#035388',
                backgroundColor: 'rgba(3,83,136,0.4)',
            },
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartPlugins = [];
        // Pie Chart
        this.pieChartOptions = {
            responsive: true,
            legend: {
                position: 'right'
            }
        };
        this.pieChartLabels = ['In Store Sales', 'Website Sales', 'Email Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        this.pieChartLegend = true;
        this.pieChartColors = [
            {
                backgroundColor: ['#035388', '#40c3f7', '#b3ecff'],
            },
        ];
        // Bar Chart
        this.barChartOptions = {
            responsive: true
        };
        this.barChartLabels = ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [];
        this.barChartData = [
            {
                data: [165, 159, 180, 181, 156, 155, 140, 200],
                label: 'Product A',
                backgroundColor: '#035388',
                borderColor: '#035388',
                hoverBackgroundColor: 'rgb(81,107,145)',
                hoverBorderColor: 'rgb(81,107,145)'
            },
            {
                data: [128, 148, 140, 139, 186, 127, 190, 230],
                label: 'Product B',
                backgroundColor: '#40c3f7',
                borderColor: '#40c3f7'
            }
        ];
        // Doughnut
        this.doughnutChartLabels = ['Mobile', 'Desktop', 'Tablet'];
        this.doughnutChartData = [250, 130, 50];
        this.doughnutChartType = 'doughnut';
        this.doughnutChartColors = [
            {
                backgroundColor: ['#035388', '#40c3f7', '#b3ecff'],
            },
        ];
        // Radar
        this.radarChartOptions = {
            responsive: true,
        };
        this.radarChartLabels = ['Coding', 'Designing', 'Testing', 'Refactoring', 'Meetings', 'Discovery'];
        this.radarChartData = [
            {
                data: [80, 59, 70, 30, 46, 15],
                label: 'Admin Template'
            },
            {
                data: [60, 48, 20, 19, 16, 50],
                label: 'Site Template'
            }
        ];
        this.radarChartType = 'radar';
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId);
        this.setTheme();
    }
    setTheme() {
        const overrides = {
            legend: {
                labels: {
                    fontColor: '#999999',
                    boxWidth: 20,
                    padding: 20
                },
            },
            scales: {
                xAxes: [{
                        ticks: { fontColor: '#999999' },
                        gridLines: { color: 'rgba(255,255,255,0.1)' }
                    }],
                yAxes: [{
                        ticks: { fontColor: '#999999' },
                        gridLines: { color: 'rgba(255,255,255,0.1)' }
                    }]
            },
            tooltips: {
                enabled: true,
                backgroundColor: '#FFF',
                titleFontColor: '#999999',
                bodyFontColor: '#999999',
                caretPadding: 4,
                xPadding: 10,
                yPadding: 10,
                borderColor: '#999999',
                borderWidth: 1
            }
        };
        chart_js__WEBPACK_IMPORTED_MODULE_4__["defaults"].global.defaultFontColor = '#999999';
        chart_js__WEBPACK_IMPORTED_MODULE_4__["defaults"].global.defaultFontFamily = 'Nunito, sans-serif';
        chart_js__WEBPACK_IMPORTED_MODULE_4__["defaults"].global.responsive = true;
        this.themeService.setColorschemesOptions(overrides);
    }
};
RealTSCharts.ctorParameters = () => [
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: ng2_charts__WEBPACK_IMPORTED_MODULE_3__["ThemeService"] }
];
RealTSCharts = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tscharts-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./realjs-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/realjs/realjs-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./realjs-page.scss */ "./src/app/charts/realjs/realjs-page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]))
], RealTSCharts);



/***/ }),

/***/ "./src/app/charts/realjs/realjs-page.scss":
/*!************************************************!*\
  !*** ./src/app/charts/realjs/realjs-page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n/*\n  Shared\n*/\n/*\n  CSS 4 Mode\n*/\n/*\n  Sass Mode\n*/\n:host {\n  --page-title-color: rgb(var(--palette-primary-rgb));\n  --callout-message-color: rgb(var(--palette-info-rgb));\n  --callout-message-background: rgb(var(--palette-info-light-rgb));\n  --card-background: rgb(var(--palette-white-rgb));\n  --card-title-color: rgb(var(--palette-grey-8-rgb));\n  --card-border-color: rgb(var(--palette-grey-2-rgb));\n  --border-radius: 6px;\n  --page-padding: 60px 40px;\n  --page-spacing: 10px;\n}\n.content-wrapper {\n  padding: var(--page-padding);\n}\n.content-wrapper .page-title {\n  color: var(--page-title-color);\n  font-size: 30px;\n  margin-bottom: calc(var(--page-spacing) * 3);\n}\n.content-wrapper .callout-message-wrapper {\n  display: flex;\n  color: var(--callout-message-color);\n  background-color: var(--callout-message-background);\n  padding: calc(var(--page-spacing) * 2.5);\n  border-radius: var(--border-radius);\n  margin-bottom: calc(var(--page-spacing) * 3);\n}\n.content-wrapper .callout-message-wrapper .callout-link {\n  color: var(--callout-message-color);\n  font-weight: 700;\n}\n.content-wrapper .callout-message-wrapper .callout-icon {\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-right: calc(var(--page-spacing) * 1.5);\n}\n.content-wrapper .callout-message-wrapper .callout-icon i {\n  font-size: 40px;\n}\n.content-wrapper .callout-message-wrapper .callout-message {\n  flex-grow: 1;\n  padding-left: calc(var(--page-spacing) * 1.5);\n  border-left: 1px solid var(--callout-message-color);\n}\n.content-wrapper .chart-card {\n  padding: 0px;\n  background-color: var(--card-background);\n  margin-bottom: calc(var(--page-spacing) * 3);\n  border-radius: var(--border-radius);\n  box-shadow: 0px 10px 20px rgba(var(--palette-grey-3-rgb), 0.15),  0px 3px 6px rgba(var(--palette-grey-3-rgb), 0.1);\n}\n.content-wrapper .chart-card-header {\n  border-bottom: 1px solid var(--card-border-color);\n  padding: calc(var(--page-spacing) * 1.5) calc(var(--page-spacing) * 2.5);\n  font-weight: 600;\n  text-align: center;\n  color: var(--card-title-color);\n}\n.content-wrapper .chart-card-body {\n  padding: calc(var(--page-spacing) * 2.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bndpc2UvbWVhbi9zcmMvdGhlbWUvcGFsZXR0ZXMvc2hhcmVkLnNjc3MiLCIvVXNlcnMvc2hhd253aXNlL21lYW4vc3JjL3RoZW1lL3BhbGV0dGVzL21vZGUuc2NzcyIsIi9Vc2Vycy9zaGF3bndpc2UvbWVhbi9zcmMvYXBwL2NoYXJ0cy9yZWFsanMvcmVhbGpzLXBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hhcnRzL3JlYWxqcy9yZWFsanMtcGFnZS5zY3NzIiwiL1VzZXJzL3NoYXdud2lzZS9tZWFuL3NyYy90aGVtZS9taXhpbnMvZWxldmF0aW9ucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBRE5BOztDQUFBO0FDQUE7O0NBQUE7QUFNQTs7Q0FBQTtBQ0pBO0VBRUUsbURBQUE7RUFDQSxxREFBQTtFQUNBLGdFQUFBO0VBQ0EsZ0RBQUE7RUFDQSxrREFBQTtFQUNBLG1EQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FDMkNGO0FEeENBO0VBQ0UsNEJBQUE7QUMyQ0Y7QUR6Q0U7RUFDRSw4QkFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtBQzJDSjtBRHhDRTtFQUNFLGFBQUE7RUFDQSxtQ0FBQTtFQUNBLG1EQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDRDQUFBO0FDMENKO0FEeENJO0VBQ0UsbUNBQUE7RUFDQSxnQkFBQTtBQzBDTjtBRHZDSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQ3lDTjtBRHhDTTtFQUNFLGVBQUE7QUMwQ1I7QUR2Q0k7RUFDRSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxtREFBQTtBQ3lDTjtBRHJDRTtFQUNFLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsbUNBQUE7RUU0QkEsa0hBQUE7QURZSjtBRHBDRTtFQUNFLGlEQUFBO0VBQ0Esd0VBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNzQ0o7QURuQ0U7RUFDRSx3Q0FBQTtBQ3FDSiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9yZWFsanMvcmVhbGpzLXBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIFNoYXJlZFxuKi9cblxuQGltcG9ydCAncHJlZmVyZW5jZXMnO1xuQGltcG9ydCAnaW50ZXJmYWNlJztcbkBpbXBvcnQgJ21vZGUnO1xuXG4vLyBBbiBhYnN0cmFjdCB3YXkgdG8gcHJvdmlkZSBjb2xvcnMuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGFuIGludGVyZmFjZSB0byBib3RoIFNhc3MgdmFyaWFibGVzIGFuZCBDU1MgNCB2YXJpYWJsZXMgYmFzZWQgY29sb3IgcGFsZXR0ZXMuXG5AZnVuY3Rpb24gcGFsZXR0ZS1jb2xvcigkY29sb3ItbmFtZSwgJGFscGhhOiAxKSB7XG4gIC8vICRjb2xvci1wYWxldHRlLW1vZGUgICAgICAgID0+ICBEZWZpbmVkIGluIG1vZGUuc2Nzc1xuICAvLyAkY2hvb3Nlbi1wYWxldHRlICAgICAgICAgICA9PiAgRGVmaW5lZCBpbiBtb2RlLnNjc3NcbiAgLy8gJGNvbG9yLXBhbGV0dGUtaW50ZXJmYWNlICAgPT4gIERlZmluZWQgaW4gaW50ZXJmYWNlLnNjc3NcbiAgLy8gJGNzczQtdmFyLXByZWZpeCAgICAgICAgICAgPT4gIERlZmluZWQgaW4gcHJlZmVyZW5jZXMuc2Nzc1xuICAvLyAkY3NzNC1jb2xvci1mb3JtYXQgICAgICAgICA9PiAgRGVmaW5lZCBpbiBwcmVmZXJlbmNlcy5zY3NzXG5cbiAgQGlmICgkY29sb3ItcGFsZXR0ZS1tb2RlID09ICdjc3MtNCcpIHtcbiAgICAkcGFsZXR0ZS1yZWZlcmVuY2U6ICRjb2xvci1wYWxldHRlLWludGVyZmFjZTtcblxuICAgICRjb2xvci12YXJpYWJsZS1pbmRleDogaW5kZXgoJHBhbGV0dGUtcmVmZXJlbmNlLCAkY29sb3ItbmFtZSk7XG5cbiAgICBAaWYgKHR5cGVfb2YoJGNvbG9yLXZhcmlhYmxlLWluZGV4KSA9PSAnbnVtYmVyJykge1xuICAgICAgJGNvbG9yLXZhcmlhYmxlLW5hbWU6IG50aCgkcGFsZXR0ZS1yZWZlcmVuY2UsICRjb2xvci12YXJpYWJsZS1pbmRleCk7XG5cbiAgICAgIEBpZiAoJGFscGhhID4gMCBhbmQgJGFscGhhIDwgMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYmEodmFyKCcgKyAkY3NzNC12YXItcHJlZml4ICsgJGNvbG9yLXZhcmlhYmxlLW5hbWUgKyAnLScgKyAkY3NzNC1jb2xvci1mb3JtYXQgKycpLCAjeyRhbHBoYX0pJ307XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICN7J3JnYih2YXIoJyArICRjc3M0LXZhci1wcmVmaXggKyAkY29sb3ItdmFyaWFibGUtbmFtZSArICctJyArICRjc3M0LWNvbG9yLWZvcm1hdCArICcpKSd9O1xuICAgICAgfSBAZWxzZSB7XG4gICAgICAgIEBlcnJvciBcIkFscGhhICgjeyRhbHBoYX0pIG11c3QgYmUgYSBudW1iZXJcIjtcbiAgICAgIH1cbiAgICB9IEBlbHNlIHtcbiAgICAgIEBlcnJvciBcIkNvbG9yICgjeyRjb2xvci1uYW1lfSkgd2FzIG5vdCBmb3VuZCBvbiBDb2xvciBQYWxldHRlIGRlZmluaXRpb24uIE1ha2Ugc3VyZSBpdCdzIGRlZmluZWQgaW4gdGhlIHRoZW1lL3BhbGV0dGVzL2ludGVyZmFjZS5zY3NzIGZpbGVcIjtcbiAgICB9XG4gIH0gQGVsc2UgaWYgKCRjb2xvci1wYWxldHRlLW1vZGUgPT0gJ3Nhc3MnKSB7XG4gICAgJHBhbGV0dGUtcmVmZXJlbmNlOiAkY2hvb3Nlbi1wYWxldHRlO1xuXG4gICAgJGNvbG9yLXZhcmlhYmxlOiBtYXAtZ2V0KCRwYWxldHRlLXJlZmVyZW5jZSwgJGNvbG9yLW5hbWUpO1xuXG4gICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBTYXNzIGNvbG9yXG4gICAgQGlmICh0eXBlX29mKCRjb2xvci12YXJpYWJsZSkgPT0gJ2NvbG9yJykge1xuICAgICAgQGlmICgkYWxwaGEgPiAwIGFuZCAkYWxwaGEgPCAxKSB7XG4gICAgICAgIEByZXR1cm4gcmdiYSgkY29sb3ItdmFyaWFibGUsICRhbHBoYSk7XG4gICAgICB9IEBlbHNlIGlmICgkYWxwaGEgPT0gMSkge1xuICAgICAgICBAcmV0dXJuICRjb2xvci12YXJpYWJsZTtcbiAgICAgIH0gQGVsc2Uge1xuICAgICAgICBAZXJyb3IgXCJBbHBoYSAoI3skYWxwaGF9KSBtdXN0IGJlIGEgbnVtYmVyXCI7XG4gICAgICB9XG4gICAgfSBAZWxzZSB7XG4gICAgICBAZXJyb3IgXCJDb2xvciAoI3skY29sb3ItdmFyaWFibGV9KSBpcyBub3QgYSBTYXNzIGNvbG9yXCI7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAZXJyb3IgJ05vIENvbG9yIFBhbGV0dGUgbW9kZSBzZWxlY3RlZCBpbiB0aGVtZS9wYWxldHRlcy9wcmVmZXJlbmNlcy5zY3NzJztcbiAgfVxufVxuIiwiLypcbiAgQ1NTIDQgTW9kZVxuKi9cbiRjb2xvci1wYWxldHRlLW1vZGU6ICdjc3MtNCc7XG5cblxuLypcbiAgU2FzcyBNb2RlXG4qL1xuLy8gQGltcG9ydCAnY29yZSc7XG4vL1xuLy8gJGNvbG9yLXBhbGV0dGUtbW9kZTogJ3Nhc3MnO1xuLy9cbi8vIC8vIEltcG9ydCB0aGUgZGVmaW5pdGlvbnMgb2YgdGhlIHBhbGV0dGUgeW91IHdhbnQgdG8gdXNlXG4vLyBAaW1wb3J0ICdwYWxldHRlLTEvZGVmaW5pdGlvbnMnO1xuLy8gLy8gQGltcG9ydCAncGFsZXR0ZS0yL2RlZmluaXRpb25zJztcbi8vXG4vLyAvLyBBc3NpZ24gYSBwYXJ0aWN1bGFyIENvbG9yIFBhbGV0dGUgdG8gdGhlICdjaG9vc2VuLXBhbGV0dGUnIHBvaW50ZXIuXG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlIHdpbGwgYmUgYSBTYXNzIG1hcCBwb2ludGluZyB0byBhbm90aGVyIGNvbG9yIHBhbGV0dGUgU2FzcyBtYXBcbi8vICRjaG9vc2VuLXBhbGV0dGU6IGJ1aWxkU2Fzc1BhbGV0dGUoJHBhbGV0dGUtMSk7XG4vLyAvLyAkY2hvb3Nlbi1wYWxldHRlOiBidWlsZFNhc3NQYWxldHRlKCRwYWxldHRlLTIpO1xuIiwiQGltcG9ydCAnc2hhcmVkJztcblxuOmhvc3Qge1xuICAvLyBEZWZhdWx0IHZhcmlhYmxlc1xuICAtLXBhZ2UtdGl0bGUtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcigncHJpbWFyeScpfTtcbiAgLS1jYWxsb3V0LW1lc3NhZ2UtY29sb3I6ICN7cGFsZXR0ZS1jb2xvcignaW5mbycpfTtcbiAgLS1jYWxsb3V0LW1lc3NhZ2UtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCdpbmZvLWxpZ2h0Jyl9O1xuICAtLWNhcmQtYmFja2dyb3VuZDogI3twYWxldHRlLWNvbG9yKCd3aGl0ZScpfTtcbiAgLS1jYXJkLXRpdGxlLWNvbG9yOiAje3BhbGV0dGUtY29sb3IoJ2dyZXktOCcpfTtcbiAgLS1jYXJkLWJvcmRlci1jb2xvcjogI3twYWxldHRlLWNvbG9yKCdncmV5LTInKX07XG4gIC0tYm9yZGVyLXJhZGl1czogNnB4O1xuICAtLXBhZ2UtcGFkZGluZzogNjBweCA0MHB4O1xuICAtLXBhZ2Utc3BhY2luZzogMTBweDtcbn1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtcGFkZGluZyk7XG5cbiAgLnBhZ2UtdGl0bGUge1xuICAgIGNvbG9yOiB2YXIoLS1wYWdlLXRpdGxlLWNvbG9yKTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMyk7XG4gIH1cblxuICAuY2FsbG91dC1tZXNzYWdlLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6IHZhcigtLWNhbGxvdXQtbWVzc2FnZS1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FsbG91dC1tZXNzYWdlLWJhY2tncm91bmQpO1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDIuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMyk7XG5cbiAgICAuY2FsbG91dC1saW5rIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1jYWxsb3V0LW1lc3NhZ2UtY29sb3IpO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG5cbiAgICAuY2FsbG91dC1pY29uIHtcbiAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAxLjUpO1xuICAgICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNhbGxvdXQtbWVzc2FnZSB7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDEuNSk7XG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWNhbGxvdXQtbWVzc2FnZS1jb2xvcik7XG4gICAgfVxuICB9XG5cbiAgLmNoYXJ0LWNhcmQge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJhY2tncm91bmQpO1xuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDMpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIEBpbmNsdWRlIGVsZXZhdGlvbih6MywgJ2dyZXktMycpO1xuICB9XG5cbiAgLmNoYXJ0LWNhcmQtaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY2FyZC1ib3JkZXItY29sb3IpO1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDEuNSkgY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMi41KTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tY2FyZC10aXRsZS1jb2xvcik7XG4gIH1cblxuICAuY2hhcnQtY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyLjUpO1xuICB9XG59XG4iLCIvKlxuICBTaGFyZWRcbiovXG4vKlxuICBDU1MgNCBNb2RlXG4qL1xuLypcbiAgU2FzcyBNb2RlXG4qL1xuLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbi8qXG4gIFNoYXJlZFxuKi9cbi8qXG4gIENTUyA0IE1vZGVcbiovXG4vKlxuICBTYXNzIE1vZGVcbiovXG4vKlxuICBTaGFyZWRcbiovXG4vKlxuICBDU1MgNCBNb2RlXG4qL1xuLypcbiAgU2FzcyBNb2RlXG4qL1xuLypcbiAgU2hhcmVkXG4qL1xuLypcbiAgQ1NTIDQgTW9kZVxuKi9cbi8qXG4gIFNhc3MgTW9kZVxuKi9cbjpob3N0IHtcbiAgLS1wYWdlLXRpdGxlLWNvbG9yOiByZ2IodmFyKC0tcGFsZXR0ZS1wcmltYXJ5LXJnYikpO1xuICAtLWNhbGxvdXQtbWVzc2FnZS1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtaW5mby1yZ2IpKTtcbiAgLS1jYWxsb3V0LW1lc3NhZ2UtYmFja2dyb3VuZDogcmdiKHZhcigtLXBhbGV0dGUtaW5mby1saWdodC1yZ2IpKTtcbiAgLS1jYXJkLWJhY2tncm91bmQ6IHJnYih2YXIoLS1wYWxldHRlLXdoaXRlLXJnYikpO1xuICAtLWNhcmQtdGl0bGUtY29sb3I6IHJnYih2YXIoLS1wYWxldHRlLWdyZXktOC1yZ2IpKTtcbiAgLS1jYXJkLWJvcmRlci1jb2xvcjogcmdiKHZhcigtLXBhbGV0dGUtZ3JleS0yLXJnYikpO1xuICAtLWJvcmRlci1yYWRpdXM6IDZweDtcbiAgLS1wYWdlLXBhZGRpbmc6IDYwcHggNDBweDtcbiAgLS1wYWdlLXNwYWNpbmc6IDEwcHg7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLXBhZGRpbmcpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAucGFnZS10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLXRpdGxlLWNvbG9yKTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAzKTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmNhbGxvdXQtbWVzc2FnZS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IHZhcigtLWNhbGxvdXQtbWVzc2FnZS1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbGxvdXQtbWVzc2FnZS1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMi41KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDMpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2FsbG91dC1tZXNzYWdlLXdyYXBwZXIgLmNhbGxvdXQtbGluayB7XG4gIGNvbG9yOiB2YXIoLS1jYWxsb3V0LW1lc3NhZ2UtY29sb3IpO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2FsbG91dC1tZXNzYWdlLXdyYXBwZXIgLmNhbGxvdXQtaWNvbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMS41KTtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmNhbGxvdXQtbWVzc2FnZS13cmFwcGVyIC5jYWxsb3V0LWljb24gaSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbi5jb250ZW50LXdyYXBwZXIgLmNhbGxvdXQtbWVzc2FnZS13cmFwcGVyIC5jYWxsb3V0LW1lc3NhZ2Uge1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMS41KTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1jYWxsb3V0LW1lc3NhZ2UtY29sb3IpO1xufVxuLmNvbnRlbnQtd3JhcHBlciAuY2hhcnQtY2FyZCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iYWNrZ3JvdW5kKTtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBib3gtc2hhZG93OiAwcHggMTBweCAyMHB4IHJnYmEodmFyKC0tcGFsZXR0ZS1ncmV5LTMtcmdiKSwgMC4xNSksICAwcHggM3B4IDZweCByZ2JhKHZhcigtLXBhbGV0dGUtZ3JleS0zLXJnYiksIDAuMSk7XG59XG4uY29udGVudC13cmFwcGVyIC5jaGFydC1jYXJkLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jYXJkLWJvcmRlci1jb2xvcik7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1zcGFjaW5nKSAqIDEuNSkgY2FsYyh2YXIoLS1wYWdlLXNwYWNpbmcpICogMi41KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tY2FyZC10aXRsZS1jb2xvcik7XG59XG4uY29udGVudC13cmFwcGVyIC5jaGFydC1jYXJkLWJvZHkge1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2Utc3BhY2luZykgKiAyLjUpO1xufSIsIkBpbXBvcnQgJ3V0aWxzJztcbkBpbXBvcnQgJy4uL3BhbGV0dGVzL3NoYXJlZCc7XG5cbiRlbGV2YXRpb25zLXNwZWNzOiAoXG4gIHoxOiAoXG4gICAgKHNoYWRvdzogMHB4IDFweCAzcHgsIG9wYWNpdHk6IDAuMTIpLFxuICAgIChzaGFkb3c6IDBweCAxcHggMnB4LCBvcGFjaXR5OiAwLjI0KVxuICApLFxuICB6MjogKFxuICAgIChzaGFkb3c6IDBweCAzcHggNnB4LCBvcGFjaXR5OiAwLjE1KSxcbiAgICAoc2hhZG93OiAwcHggMnB4IDRweCwgb3BhY2l0eTogMC4xMilcbiAgKSxcbiAgejM6IChcbiAgICAoc2hhZG93OiAwcHggMTBweCAyMHB4LCBvcGFjaXR5OiAwLjE1KSxcbiAgICAoc2hhZG93OiAwcHggM3B4IDZweCwgb3BhY2l0eTogMC4xMClcbiAgKSxcbiAgejQ6IChcbiAgICAoc2hhZG93OiAwcHggMTVweCAyNXB4LCBvcGFjaXR5OiAwLjE1KSxcbiAgICAoc2hhZG93OiAwcHggNXB4IDEwcHgsIG9wYWNpdHk6IDAuMDUpXG4gICksXG4gIHo1OiAoXG4gICAgKHNoYWRvdzogMHB4IDIwcHggNDBweCwgb3BhY2l0eTogMC4yMClcbiAgKVxuKTtcblxuLy8gQG1peGluIGVsZXZhdGlvbigkejogejEsICRjb2xvcjogI0NDQykge1xuQG1peGluIGVsZXZhdGlvbigkejogejEsICRjb2xvcjogJ2dyZXktMicpIHtcbiAgJHNoYWRvd3MtcmVmZXJlbmNlOiAkZWxldmF0aW9ucy1zcGVjcztcblxuICAvLyBDaGVjayBpZiB3ZSBoYXZlIGEgc3BlYyBmb3IgdGhlIGRlc2lyZWQgc2hhZG93XG4gIEBpZiBtYXAtaGFzLWtleSgkc2hhZG93cy1yZWZlcmVuY2UsICR6KSB7XG4gICAgLy8gQWNjdW11bGF0ZSBtdWx0aXBsZSBzaGFkb3cgdmFsdWVzIGluIHRoaXMgbGlzdFxuICAgICR6LXNoYWRvd3MtdmFsdWVzOiAoKTtcbiAgICAvLyBHZXQgc2hhZG93cyBtYXBcbiAgICAkei1zaGFkb3dzOiBtYXAtZ2V0KCRzaGFkb3dzLXJlZmVyZW5jZSwgJHopO1xuXG4gICAgLy8gQGVycm9yICR6LXNoYWRvd3M7XG5cbiAgICAvLyBNdWx0aXBsZSBzaGFkb3dzIGNvbWJpbmVkXG4gICAgQGlmICh0eXBlX29mKCR6LXNoYWRvd3MpID09ICdsaXN0Jykge1xuICAgICAgQGVhY2ggJHotc2hhZG93IGluICR6LXNoYWRvd3Mge1xuICAgICAgICBAaWYgKHR5cGVfb2YoJHotc2hhZG93KSA9PSAnbWFwJykge1xuICAgICAgICAgICRzaGFkb3c6IG1hcC1nZXQoJHotc2hhZG93LCBzaGFkb3cpO1xuICAgICAgICAgICRvcGFjaXR5OiBtYXAtZ2V0KCR6LXNoYWRvdywgb3BhY2l0eSk7XG5cbiAgICAgICAgICAvLyBAZXJyb3IgJHotc2hhZG93O1xuICAgICAgICAgIC8vIEBlcnJvciAkc2hhZG93O1xuICAgICAgICAgIC8vIEBlcnJvciAkb3BhY2l0eTtcblxuICAgICAgICAgIC8vICRzaGFkb3ctdmFsdWU6ICRzaGFkb3cgKyAnICcgKyByZ2JhKCRjb2xvciwgJG9wYWNpdHkpO1xuICAgICAgICAgICRzaGFkb3ctdmFsdWU6ICRzaGFkb3cgKyAnICcgKyBwYWxldHRlLWNvbG9yKCRjb2xvciwgJG9wYWNpdHkpO1xuXG4gICAgICAgICAgLy8gQGVycm9yICRzaGFkb3ctdmFsdWU7XG5cbiAgICAgICAgICAkei1zaGFkb3dzLXZhbHVlczogYXBwZW5kKCR6LXNoYWRvd3MtdmFsdWVzLCAkc2hhZG93LXZhbHVlKTtcblxuICAgICAgICAgIC8vIEBlcnJvciAkei1zaGFkb3dzLXZhbHVlcztcbiAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgQGVycm9yICdJbnZhbGlkIHNoYWRvdyBkZWZpbml0aW9uIGZvciBhcmd1bWVudCAkei1zaGFkb3c6IGAjeyR6LXNoYWRvd31gJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKHR5cGVfb2YoJHotc2hhZG93cykgPT0gJ21hcCcpIHtcbiAgICAgIC8vIFNpbmdsZSBzaGFkb3dcbiAgICAgICRzaGFkb3c6IG1hcC1nZXQoJHotc2hhZG93cywgc2hhZG93KTtcbiAgICAgICRvcGFjaXR5OiBtYXAtZ2V0KCR6LXNoYWRvd3MsIG9wYWNpdHkpO1xuXG4gICAgICAvLyBAZXJyb3IgJHotc2hhZG93O1xuICAgICAgLy8gQGVycm9yICRzaGFkb3c7XG4gICAgICAvLyBAZXJyb3IgJG9wYWNpdHk7XG5cbiAgICAgIC8vICRzaGFkb3ctdmFsdWU6ICRzaGFkb3cgKyAnICcgKyByZ2JhKCRjb2xvciwgJG9wYWNpdHkpO1xuICAgICAgJHNoYWRvdy12YWx1ZTogJHNoYWRvdyArICcgJyArIHBhbGV0dGUtY29sb3IoJGNvbG9yLCAkb3BhY2l0eSk7XG5cbiAgICAgIC8vIEBlcnJvciAkc2hhZG93LXZhbHVlO1xuXG4gICAgICAkei1zaGFkb3dzLXZhbHVlczogYXBwZW5kKCR6LXNoYWRvd3MtdmFsdWVzLCAkc2hhZG93LXZhbHVlKTtcblxuICAgICAgLy8gQGVycm9yICR6LXNoYWRvd3MtdmFsdWVzO1xuICAgIH0gQGVsc2Uge1xuICAgICAgQGVycm9yICdJbnZhbGlkIHNoYWRvdyB2YWx1ZXMgZm9yIGFyZ3VtZW50ICR6LXNoYWRvd3M6IGAjeyR6LXNoYWRvd3N9YC4gSXRcXCdzIG5laXRoZXIgYSBtYXAgb3IgYSBsaXN0JztcbiAgICB9XG5cbiAgICAvLyBAZXJyb3IgI3t0by1zdHJpbmcoJHotc2hhZG93cy12YWx1ZXMsICcsICcpfTtcblxuICAgIGJveC1zaGFkb3c6ICN7dG8tc3RyaW5nKCR6LXNoYWRvd3MtdmFsdWVzLCAnLCAnKX07XG4gIH0gQGVsc2Uge1xuICAgIEBlcnJvciAnTm8gcmVmZXJlbmNlIGZvdW5kIGZvciBhcmd1bWVudCAkejogYCN7JHp9YCBpbiBzaGFkb3dzIHNwZWNzLic7XG4gIH1cbn1cbiJdfQ== */");

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
//# sourceMappingURL=charts-charts-module-es2015.js.map