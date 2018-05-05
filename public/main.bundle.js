webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<form #citForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n  <label for=\"citation\">Enter the citation</label>\n  <input type=\"text\" id=\"citation\" name=\"citation\" required [(ngModel)]=\"citation\">\n  <input type=\"submit\">\n</form>\n<div *ngIf=\"record\">\n  <app-record [record]=\"record\"></app-record>\n</div>\n<div *ngIf=\"noRecord\">\n  <h2>No record found</h2>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fetch_records_service__ = __webpack_require__("./src/app/fetch-records.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(fetchRecords) {
        this.fetchRecords = fetchRecords;
        this.citation = '2008 ALL SCR 241';
        this.noRecord = false;
    }
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        this.fetchRecords.getRecord(this.citation).map(function (res) { return res; }).
            subscribe(function (record) {
            _this.record = record;
            if (!_this.record)
                _this.noRecord = true;
            console.log(_this.record);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__fetch_records_service__["a" /* FetchRecordsService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fetch_records_service__ = __webpack_require__("./src/app/fetch-records.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__record_record_component__ = __webpack_require__("./src/app/record/record.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__record_record_component__["a" /* RecordComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__fetch_records_service__["a" /* FetchRecordsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/fetch-records.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchRecordsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FetchRecordsService = /** @class */ (function () {
    function FetchRecordsService(http) {
        this.http = http;
        this.Url = 'http://localhost:3000/api/';
    }
    FetchRecordsService.prototype.getRecord = function (citation) {
        citation = encodeURIComponent(citation.trim());
        return this.http.get(this.Url + citation);
    };
    FetchRecordsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FetchRecordsService);
    return FetchRecordsService;
}());



/***/ }),

/***/ "./src/app/record.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Record; });
var Record = /** @class */ (function () {
    function Record() {
    }
    return Record;
}());



/***/ }),

/***/ "./src/app/record/record.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/record/record.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Record Found</h1>\n<button (click)=\"toggle()\">Toggle Details</button>\n<button (click)=\"Edit()\">Edit</button>\n<div *ngIf=\"showDetails\">\n<h2>Tribunal</h2>\n<hr>\n<p>{{record.tribunal}}</p>\n<h2>Judge Name</h2>\n<hr>\n<p>{{record.Judge_name}}</p>\n<h2>Cited No</h2>\n<hr>\n<p>{{record.citedNo}}</p>\n<h2>Cases Cited</h2>\n<hr>\n<p>{{record.cases_cited}}</p>\n<h2>Citation</h2>\n<hr>\n<p>{{record.Citation}}</p>\n<h2>Case No</h2>\n<hr>\n<p>{{record.Case_No}}</p>\n<h2>Adv Respondent</h2>\n<hr>\n<p>{{record.Adv_respondent}}</p>\n<h2>Petitioner</h2>\n<hr>\n<p>{{record.Petitioner}}</p>\n<h2>Judgement</h2>\n<hr>\n<p>{{record.judgement}}</p>\n<h2>Date</h2>\n<hr>\n<p>{{record.Date}}</p>\n<h2>Respondent</h2>\n<hr>\n<p>{{record.Respondent}}</p>\n<h2>File URL</h2>\n<hr>\n<p>{{record.fileurl}}</p>\n<h2>HeadNote Keywords</h2>\n<hr>\n<p>{{record.HeadNote_keywords}}</p>\n<h2>Decision</h2>\n<hr>\n<p>{{record.decision}}</p>\n<h2>Adv Petitioner</h2>\n<hr>\n<p>{{record.Adv_petitioner}}</p>\n</div>\n<div *ngIf=\"edit\">\n  <br><br>\n  <h2>Form</h2>\n  <hr>\n  <form (ngSubmit)=\"onSubmit()\">\n    <label for=\"tribunal\">Tribunal</label>\n    <input type=\"text\" name=\"tribunal\" id=\"tribunal\" [(ngModel)]=\"updatedRecord.tribunal\">\n    <br><br>\n    <label for=\"Judge_name\">Judge Name</label>\n    <input type=\"text\" name=\"Judge_name\" id=\"Judge_name\" [(ngModel)]=\"updatedRecord.Judge_name\">\n    <br><br>\n    <label for=\"Court\">Court</label>\n    <input type=\"text\" name=\"Court\" id=\"Court\" [(ngModel)]=\"updatedRecord.Court\">\n    <br><br>\n    <label for=\"citedNo\">Cited No</label>\n    <input type=\"number\" name=\"citedNo\" id=\"citedNo\" [(ngModel)]=\"updatedRecord.citedNo\">\n    <br><br>\n    <label for=\"cases_cited\">Cases Cited</label>\n    <input type=\"text\" name=\"cases_cited\" id=\"cases_cited\" [(ngModel)]=\"updatedRecord.cases_cited\">\n    <br><br>\n    <label for=\"Citation\">Citation</label>\n    <input type=\"text\" name=\"Citation\" id=\"Citation\" [(ngModel)]=\"updatedRecord.Citation\">\n    <br><br>\n    <label for=\"Case_No\">Case No</label>\n    <input type=\"text\" name=\"Case_No\" id=\"Case_No\" [(ngModel)]=\"updatedRecord.Case_No\">\n    <br><br>\n    <label for=\"Adv_respondent\">Adv Respondent</label>\n    <input type=\"text\" name=\"Adv_respondent\" id=\"Adv_respondent\" [(ngModel)]=\"updatedRecord.Adv_respondent\">\n    <br><br>\n    <label for=\"Petitioner\">Petitioner</label>\n    <input type=\"text\" name=\"Petitioner\" id=\"Petitioner\" [(ngModel)]=\"updatedRecord.Petitioner\">\n    <br><br>\n    <label for=\"judgment\">Judgement</label>\n    <input type=\"text\" name=\"judgment\" id=\"judgment\" [(ngModel)]=\"updatedRecord.judgement\">\n    <br><br>\n    <label for=\"Date\">Date</label>\n    <input type=\"text\" name=\"Date\" id=\"Date\" [(ngModel)]=\"updatedRecord.Date\">\n    <br><br>\n    <label for=\"Respondent\">Respondent</label>\n    <input type=\"text\" name=\"Respondent\" id=\"Respondent\" [(ngModel)]=\"updatedRecord.Respondent\">\n    <br><br>\n    <label for=\"fileurl\">File Url</label>\n    <input type=\"text\" name=\"fileurl\" id=\"fileurl\" [(ngModel)]=\"updatedRecord.fileurl\">\n    <br><br>\n    <label for=\"HeadNote_keywords\">Headnote Keywords</label>\n    <input type=\"text\" name=\"HeadNote_keywords\" id=\"HeadNote_keywords\" [(ngModel)]=\"updatedRecord.HeadNote_keywords\">\n    <br><br>\n    <label for=\"decision\">Decision</label>\n    <input type=\"text\" name=\"decision\" id=\"decision\" [(ngModel)]=\"updatedRecord.decision\">\n    <br><br>\n    <label for=\"Adv_petitioner\">Adv Petitioner</label>\n    <input type=\"text\" name=\"Adv_petitioner\" id=\"Adv_petitioner\" [(ngModel)]=\"updatedRecord.Adv_petitioner\">\n    <br><br>\n    <input type=\"submit\" name=\"submit\">\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/record/record.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__record__ = __webpack_require__("./src/app/record.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecordComponent = /** @class */ (function () {
    function RecordComponent() {
        this.showDetails = false;
        this.edit = false;
    }
    RecordComponent.prototype.ngOnInit = function () {
        this.updatedRecord = this.record;
    };
    RecordComponent.prototype.toggle = function () {
        this.showDetails = !this.showDetails;
        this.edit = false;
    };
    RecordComponent.prototype.Edit = function () {
        this.showDetails = false;
        this.edit = true;
    };
    RecordComponent.prototype.onSubmit = function () {
        this.edit = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__record__["a" /* Record */])
    ], RecordComponent.prototype, "record", void 0);
    RecordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-record',
            template: __webpack_require__("./src/app/record/record.component.html"),
            styles: [__webpack_require__("./src/app/record/record.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecordComponent);
    return RecordComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map