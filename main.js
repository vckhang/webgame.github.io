(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header> \n<app-menu></app-menu>\n<div class=\"container\">\n<router-outlet></router-outlet>\n</div>\n<app-footer></app-footer> "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Khang vương';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");
/* harmony import */ var _service_baiviet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/baiviet.service */ "./src/app/service/baiviet.service.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _module_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module/pipe */ "./src/app/module/pipe.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _test1_test1_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./test1/test1.component */ "./src/app/test1/test1.component.ts");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./input/input.component */ "./src/app/input/input.component.ts");
/* harmony import */ var _output_output_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./output/output.component */ "./src/app/output/output.component.ts");
/* harmony import */ var _block_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./block/menu/menu.component */ "./src/app/block/menu/menu.component.ts");
/* harmony import */ var _routes_listten_listten_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routes/listten/listten.component */ "./src/app/routes/listten/listten.component.ts");
/* harmony import */ var _lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lienhe/lienhe.component */ "./src/app/lienhe/lienhe.component.ts");
/* harmony import */ var _baiviet_baiviet_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./baiviet/baiviet.component */ "./src/app/baiviet/baiviet.component.ts");
/* harmony import */ var _block_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./block/header/header.component */ "./src/app/block/header/header.component.ts");
/* harmony import */ var _page_trangchu_trangchu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./page/trangchu/trangchu.component */ "./src/app/page/trangchu/trangchu.component.ts");
/* harmony import */ var _page_trangloai_trangloai_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./page/trangloai/trangloai.component */ "./src/app/page/trangloai/trangloai.component.ts");
/* harmony import */ var _block_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./block/sidebar/sidebar.component */ "./src/app/block/sidebar/sidebar.component.ts");
/* harmony import */ var _page_trangchitiet_trangchitiet_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./page/trangchitiet/trangchitiet.component */ "./src/app/page/trangchitiet/trangchitiet.component.ts");
/* harmony import */ var _block_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./block/footer/footer.component */ "./src/app/block/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _test1_test1_component__WEBPACK_IMPORTED_MODULE_10__["Test1Component"],
                _input_input_component__WEBPACK_IMPORTED_MODULE_11__["InputComponent"],
                _output_output_component__WEBPACK_IMPORTED_MODULE_12__["OutputComponent"],
                _block_menu_menu_component__WEBPACK_IMPORTED_MODULE_13__["MenuComponent"],
                _routes_listten_listten_component__WEBPACK_IMPORTED_MODULE_14__["ListtenComponent"],
                _lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_15__["LienheComponent"],
                _baiviet_baiviet_component__WEBPACK_IMPORTED_MODULE_16__["BaivietComponent"],
                _block_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
                _page_trangchu_trangchu_component__WEBPACK_IMPORTED_MODULE_18__["TrangchuComponent"],
                _page_trangloai_trangloai_component__WEBPACK_IMPORTED_MODULE_19__["TrangloaiComponent"],
                _block_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__["SidebarComponent"],
                _page_trangchitiet_trangchitiet_component__WEBPACK_IMPORTED_MODULE_21__["TrangchitietComponent"],
                _module_pipe__WEBPACK_IMPORTED_MODULE_7__["PipeModule"],
                _block_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
            ],
            providers: [_service_baiviet_service__WEBPACK_IMPORTED_MODULE_5__["service"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes_listten_listten_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/listten/listten.component */ "./src/app/routes/listten/listten.component.ts");
/* harmony import */ var _lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lienhe/lienhe.component */ "./src/app/lienhe/lienhe.component.ts");
/* harmony import */ var _baiviet_baiviet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./baiviet/baiviet.component */ "./src/app/baiviet/baiviet.component.ts");
/* harmony import */ var _page_trangchu_trangchu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/trangchu/trangchu.component */ "./src/app/page/trangchu/trangchu.component.ts");
/* harmony import */ var _page_trangloai_trangloai_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/trangloai/trangloai.component */ "./src/app/page/trangloai/trangloai.component.ts");
/* harmony import */ var _page_trangchitiet_trangchitiet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page/trangchitiet/trangchitiet.component */ "./src/app/page/trangchitiet/trangchitiet.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { Test1Component } from './test1/test1.component';





var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot([
                    {
                        component: _baiviet_baiviet_component__WEBPACK_IMPORTED_MODULE_4__["BaivietComponent"],
                        path: 'bai-viet'
                    },
                    {
                        component: _lienhe_lienhe_component__WEBPACK_IMPORTED_MODULE_3__["LienheComponent"],
                        path: 'lien-he'
                    },
                    {
                        component: _routes_listten_listten_component__WEBPACK_IMPORTED_MODULE_2__["ListtenComponent"],
                        path: 'list-ten/:ten'
                    },
                    {
                        component: _routes_listten_listten_component__WEBPACK_IMPORTED_MODULE_2__["ListtenComponent"],
                        path: 'list-ten'
                    },
                    {
                        component: _page_trangloai_trangloai_component__WEBPACK_IMPORTED_MODULE_6__["TrangloaiComponent"],
                        path: "category/:title"
                    },
                    {
                        component: _page_trangchitiet_trangchitiet_component__WEBPACK_IMPORTED_MODULE_7__["TrangchitietComponent"],
                        path: ':post'
                    },
                    {
                        component: _page_trangchu_trangchu_component__WEBPACK_IMPORTED_MODULE_5__["TrangchuComponent"],
                        path: "*"
                    }
                ])
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/baiviet/baiviet.component.css":
/*!***********************************************!*\
  !*** ./src/app/baiviet/baiviet.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/baiviet/baiviet.component.html":
/*!************************************************!*\
  !*** ./src/app/baiviet/baiviet.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let row of baiviet.baiviethdt\" >\n  {{row.name}}\n</div>\n<div (mouseover)=\"hover=true\" (mouseleave)=\"hover=false\">\n  <span [ngStyle]=\"{backgroundColor: hover==true  ? 'lightgrey' : 'grey' }\">hello {{ hover }}</span>\n  </div>\n  <ngx-slick-carousel class=\"carousel\" \n  #slickModal=\"slick-carousel\" \n  [initSlidesLength]=\"slides.length\"\n  [config]=\"slideConfig\" \n  (init)=\"slickInit($event)\"\n  (breakpoint)=\"breakpoint($event)\"\n  (afterChange)=\"afterChange($event)\"\n  (beforeChange)=\"beforeChange($event)\">\n<div ngxSlickItem *ngFor=\"let slide of slides\" class=\"slide\">\n    {{slide.name}}\n</div>\n</ngx-slick-carousel>\n<button (click)=\"addSlide()\">Add</button>\n    <button (click)=\"removeSlide()\">Remove</button>\n    <button (click)=\"slickModal.slickGoTo(2)\">slickGoto 2</button>\n    <button (click)=\"slickModal.unslick()\">unslick</button>"

/***/ }),

/***/ "./src/app/baiviet/baiviet.component.ts":
/*!**********************************************!*\
  !*** ./src/app/baiviet/baiviet.component.ts ***!
  \**********************************************/
/*! exports provided: BaivietComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaivietComponent", function() { return BaivietComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_baiviet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/baiviet.service */ "./src/app/service/baiviet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BaivietComponent = /** @class */ (function () {
    function BaivietComponent(baiviet) {
        this.baiviet = baiviet;
        this.name = "tets";
        this.slides = [
            { name: "khang" },
            { name: "Luan" },
            { name: "Phát" },
            { name: "Hiếu" }
        ];
        this.slideConfig = { "slidesToShow": 2, "slidesToScroll": 1 };
    }
    //baiviet_arr  = this.baiviet.getbaiviet();
    BaivietComponent.prototype.ngOnInit = function () {
        //this.baiviet.getbaiviet();    
    };
    BaivietComponent.prototype.addSlide = function () {
        this.slides.push({ name: "Béo" });
    };
    BaivietComponent.prototype.removeSlide = function () {
        this.slides.length = this.slides.length - 1;
    };
    BaivietComponent.prototype.slickInit = function (e) {
        console.log('slick initialized');
    };
    BaivietComponent.prototype.breakpoint = function (e) {
        console.log('breakpoint');
    };
    BaivietComponent.prototype.afterChange = function (e) {
        console.log('afterChange');
    };
    BaivietComponent.prototype.beforeChange = function (e) {
        console.log('beforeChange');
    };
    BaivietComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-baiviet',
            template: __webpack_require__(/*! ./baiviet.component.html */ "./src/app/baiviet/baiviet.component.html"),
            styles: [__webpack_require__(/*! ./baiviet.component.css */ "./src/app/baiviet/baiviet.component.css")],
        }),
        __metadata("design:paramtypes", [_service_baiviet_service__WEBPACK_IMPORTED_MODULE_1__["service"]])
    ], BaivietComponent);
    return BaivietComponent;
}());



/***/ }),

/***/ "./src/app/block/footer/footer.component.css":
/*!***************************************************!*\
  !*** ./src/app/block/footer/footer.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n\tpadding-top: 5%;\r\n\tmargin-top: 2%;\r\n\tbackground: #222222;\r\n}\r\nfooter .col-1 {\r\n\tpadding-right: 4%;\r\n}\r\nfooter .col-1 p {\r\n\tcolor: #f68f1e;\r\n\ttext-align: justify;\r\n\tpadding: 1% 0;\r\n\tfont-size: 130%;\r\n\tline-height: 30px;\r\n}\r\nfooter .col-2 {\r\n\tpadding: 0 6%\r\n}\r\nfooter .col-3 {\r\n\tpadding-left: 4%\r\n}\r\nfooter .col-3 .social div {\r\n\tbackground-color: rgba(255,255,255,0.03);\r\n\tborder: 1px solid rgba(255,255,255,0.03);\r\n\twidth: 12%;\r\n\ttext-align: center;\r\n\tpadding: 4% 0;\r\n\tmargin: 5% 0%;\r\n\tmargin-right: 3%;\r\n\tdisplay: table;\r\n\tfloat: left\r\n}\r\nfooter .thanhhr {\r\n\tmargin: 3% 0\r\n}\r\nfooter .maucam {\r\n\tmargin-top: 2%\r\n}\r\nfooter .maucam a {\r\n\tcolor: #f68f1e;\r\n\tfont-weight: 100;\r\n\tline-height: 25px;\r\n\ttext-align: justify;\r\n\tfont-size: 15px;\r\n\tpadding: 0pxt;\r\n\tmargin: 1.5% 1%;\r\n\tmargin-left: 0;\r\n\tdisplay: inline-block;\r\n}\r\nfooter .col-5 .title {\r\n\tpadding-top: 7%;\r\n}\r\nfooter .col-5 {\r\n\tpadding-left: 4%;\r\n}\r\n.footer-bottom {\r\n\tcolor: #f68f1e;\r\n\tfont-weight: bold;\r\n\tbackground: #000;\r\n\tmargin-top: 2%;\r\n\tpadding: 1% 0;\r\n}"

/***/ }),

/***/ "./src/app/block/footer/footer.component.html":
/*!****************************************************!*\
  !*** ./src/app/block/footer/footer.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"w1170\">\n    <Div class=\"row-1\"> \n      <!-- col 1 -->\n      <aside class=\"width35 left col-1\"> <img src=\"assets/image/logo-footer.png\" />\n        <p>Kệ thông tin Game2T chia sẻ thông tin và thủ thuật chơi game & công nghệ & eSport - cách chơi, cách lên đồ LMHT, cùng nhau chia sẻ</p>\n      </aside>\n      <!-- col 2 -->\n      <aside class=\"width30 left center col-2\"> <img src=\"assets/image/Game2T-QR.png\" /> </aside>\n      <!-- col 3 -->\n      <aside class=\"width35 left col-3\"> <img src=\"assets/image/theo-game2t.png\" />\n        <div class=\"social\">\n          <div><a href=\"https://www.facebook.com/LMHTgame2T\" target=\"_blank\" title=\"facebook\" rel=\"nofollow\"> <img src=\"assets/image/icon-fb.png\" /></a></div>\n          <div><a href=\"https://plus.google.com/+Game2tech\" target=\"_blank\" title=\"Google+\" rel=\"nofollow\"><img src=\"assets/image/icon-gplus.png\" /></a></div>\n          <div><a href=\"https://youtube.com/c/Game2tech\" target=\"_blank\" title=\"Youtube\" rel=\"nofollow\"><img src=\"assets/image/icon-youtube.png\" /></a></div>\n        </div>\n      </aside>\n      <div class=\"clear\"></div>\n      <div class=\"center thanhhr\"><img src=\"assets/image/thanh-tr-ng.png\" /></div>\n      <!-- col 4 -->\n      <aside class=\"width65 left\"> <img src=\"assets/image/tu-khoa.png\" />\n        <div class=\"maucam\"> <a href=\"http://game2t.com/?s=len+do+lmht\">\n          <h5 style=\"color:#f68f1e; border: thin solid;padding: 5px;\">len do lmht</h5>\n          </a> <a href=\"http://game2t.com/?s=cach+len+do\">\n          <h5 style=\"color:#f68f1e; border: thin solid;padding: 5px;\">cach len do</h5>\n          </a> <a href=\"http://game2t.com/?s=hinh+lmht\">\n          <h5 style=\"color:#f68f1e;  border: thin solid;padding: 5px;\">hinh lmht</h5>\n          </a> <a href=\"http://game2t.com/?s=video+lmht\">\n          <h5 style=\"color:#f68f1e;  border: thin solid;padding: 5px;\">video lmht</h5>\n          </a> <a href=\"http://game2t.com/?s=cach+choi+lmht\">\n          <h5 style=\"color:#f68f1e;  border: thin solid;padding: 5px;\">cach choi lmht</h5>\n          </a> <a href=\"&#10;http://game2t.com/tag/bang-ngoc/\">\n          <h5 style=\"color:#f68f1e;  border: thin solid;padding: 5px;\">bang ngoc</h5>\n          </a> <a href=\"http://game2t.com/tag/bang-bo-tro/\">\n          <h5 style=\"color:#f68f1e;  border: thin solid;padding: 5px;\">bang bo tro</h5>\n          </a> <a href=\"http://game2t.com/?s=len+do+mua+2016\">\n          <h5 style=\"color:#f68f1e; border: thin solid;padding: 5px;\">len do mua 2016</h5>\n          </a> <a href=\"http://game2t.com/?s=cach+len+do+2016\">\n          <h5 style=\"color:#f68f1e; border: thin solid;padding: 5px;\">cach len do 2016</h5>\n          </a> \n          <!---------> \n          <a href=\"http://game2t.com/tag/bang-bo-tro-ad/\">\n          <h5 style=\"color:#f68f1e; border: thin solid;padding: 5px;\">bang bo tro ad</h5>\n          </a> <a href=\"http://game2t.com/tag/bang-bo-tro-ap/\">\n          <h5 style=\"color:#f68f1e; border: thin solid;padding: 5px;\">bang bo tro ap</h5>\n          </a> <a href=\"http://game2t.com/tag/bang-bo-tro-ho-tro/\">\n          <h5 style=\"color:#f68f1e; border: thin solid;padding: 5px;\">bang bo tro ho tro</h5>\n          </a> <a href=\"http://game2t.com/tag/bang-bo-tro-jungle/\">\n          <h5 style=\"color:#f68f1e; border: thin solid;padding: 5px;\">bang bo tro jungle</h5>\n          </a> <a href=\"http://game2t.com/tag/bang-bo-tro-mid/\">\n          <h5 style=\"color:#f68f1e; border: thin solid;padding: 5px;\">bang bo tro mid</h5>\n          </a> <a href=\"http://game2t.com/tag/bang-bo-tro-phep/\">\n          <h5 style=\"color:#f68f1e; border: thin solid;padding: 5px;\">bang bo tro phep</h5>\n          </a> <a href=\"http://game2t.com/tag/bang-bo-tro-rung/\">\n          <h5 style=\"color:#f68f1e; border: thin solid;padding: 5px;\">bang bo tro rung</h5>\n          </a> <a href=\"http://game2t.com/tag/bang-bo-tro-sp/\">\n          <h5 style=\"color:#f68f1e; border: thin solid;padding: 5px;\">bang bo tro sp</h5>\n          </a> <a href=\"http://game2t.com/tag/bang-bo-tro-tank/\">\n          <h5 style=\"color:#f68f1e; border: thin solid;padding: 5px;\">bang bo tro tank</h5>\n          </a> <a href=\"http://game2t.com/tag/bang-bo-tro-top/\">\n          <h5 style=\"color:#f68f1e; border: thin solid;padding: 5px;\">bang bo tro top</h5>\n          </a> <a href=\"http://game2t.com/bang-ngoc-ad-xa-thu-2016-chuan-khong-can-chinh-trong-lmht/\">\n          <h5 style=\"color:#f68f1e; border: thin solid;padding: 5px;\">bang ngoc ad</h5>\n          </a> <a href=\"http://game2t.com/tag/bang-ngoc-ap/\">\n          <h5 style=\"color:#f68f1e; border: thin solid;padding: 5px;\">bang ngoc ap</h5>\n          </a> <a href=\"http://game2t.com/bang-ngoc-sp-ho-tro-2016/\">\n          <h5 style=\"color:#f68f1e; border: thin solid;padding: 5px;\">bang ngoc ho tro</h5>\n          </a> <a href=\"http://game2t.com/tag/bang-ngoc-jungle/\">\n          <h5 style=\"color:#f68f1e; border: thin solid;padding: 5px;\">bang ngoc jungle</h5>\n          </a> <a href=\"http://game2t.com/tag/bang-ngoc-mid/\">\n          <h5 style=\"color:#f68f1e; border: thin solid;padding: 5px;\">bang ngoc mid</h5>\n          </a> <a href=\"http://game2t.com/tag/bang-ngoc-phep/\">\n          <h5 style=\"color:#f68f1e; border: thin solid;padding: 5px;\">bang ngoc phep</h5>\n          </a> <a href=\"http://game2t.com/tag/bang-ngoc-rung/\">\n          <h5 style=\"color:#f68f1e; border: thin solid;padding: 5px;\">bang ngoc rung</h5>\n          </a> <a href=\"http://game2t.com/bang-ngoc-sp-ho-tro-2016/\">\n          <h5 style=\"color:#f68f1e; border: thin solid;padding: 5px;\">bang ngoc sp</h5>\n          </a> <a href=\"http://game2t.com/tag/bang-ngoc-tank/\">\n          <h5 style=\"color:#f68f1e; border: thin solid;padding: 5px;\">bang ngoc tank</h5>\n          </a> <a href=\"http://game2t.com/tag/bang-ngoc-top/\">\n          <h5 style=\"color:#f68f1e; border: thin solid;padding: 5px;\">bang ngoc top</h5>\n          </a> </div>\n      </aside>\n      <!-- col 5 -->\n      <aside class=\"width35 col-5 left\">\n        <div class=\"title\"><img src=\"assets/image/lien-ket.png\" /></div>\n       \n      </aside>\n      <div class=\"clear\"></div>\n    </Div>\n  </div>\n  <div class=\"footer-bottom\">\n    <div class=\"w1170\"> &copy; copyright 2017 - Game2T </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/block/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/block/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/block/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/block/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/block/header/header.component.css":
/*!***************************************************!*\
  !*** ./src/app/block/header/header.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/block/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/block/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"w1170 canhgiuadiv\">\n      <div class=\"width30 col-left\"><a routerLink=\"/\"><img src=\"assets/image/logo.jpg\" /></a></div>\n      <div class=\"width70 col-right\"><img src=\"assets/image/120.jpg\"  /></div>\n    </div>\n  </header>\n"

/***/ }),

/***/ "./src/app/block/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/block/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/block/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/block/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/block/menu/menu.component.css":
/*!***********************************************!*\
  !*** ./src/app/block/menu/menu.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*============\r\n \tnav\r\n==============*/\r\n.menu_pc{position:relative; background:#222222;}\r\n.menu_pc.menutruoc { position: fixed;top: 0; left: 0;width: 100%;z-index: 9999999999; margin: 0;}\r\n.menu_pc .w1170 .list_ngang .logo-truot{width:0; padding:0;}\r\n.menu_pc .w1170 .list_ngang .logo-truot img{max-width:100%}\r\n.menu_pc .w1170 .list_ngang li{text-transform:uppercase; padding:1.5% 1.2%;  font-weight:bold;}\r\n.menu_pc .w1170 .list_ngang li a{color:#f68f1e;}\r\n.menu_pc .w1170 .list_ngang li:hover ul{display:block}\r\n.menu_pc .w1170 .list_ngang ul{position:absolute; left:0; top:100%; display:none;\twidth:100%;    height: auto;     border: 1px solid #eaeaea;    box-shadow: 0 2px 6px rgba(0,0,0,0.1);\tlist-style-type:none;\tz-index:2;\tbackground:#fff;}\r\n.menu_pc .w1170 .list_ngang ul li{padding:0 !important}\r\n.menu_pc .w1170 .list_ngang ul li .col-left{background:#fafafa; padding-top:1%; max-height:230px;min-height:230px; overflow:auto; border:thin solid #fafafa; border-right:thin solid #eaeaea }\r\n.menu_pc .w1170 .list_ngang ul li .col-left div{ padding:4% 7%}\r\n.menu_pc .w1170 .list_ngang ul li .col-left div a{color:#222222}\r\n.menu_pc .w1170 .list_ngang ul li .col-left div:hover{background:#fff; border:thin solid #eaeaea; border-left:0;  border-right:1px solid #fff !important;}\r\n.menu_pc .w1170 .list_ngang ul li .col-left .active{background:#fff; border:thin solid #eaeaea; border-left:0;  border-right:1px solid #fff !important;}\r\n.menu_pc .w1170 .list_ngang ul li .col-right{ padding:0 1% ; max-height:230px;min-height:230px; overflow:auto;}\r\n.menu_pc .w1170 .list_ngang ul li .col-right .item{float:left; padding:0 1%; margin:2% 0;}\r\n.menu_pc .w1170 .list_ngang ul li .col-right .item .title{padding:5% 0;}\r\n.menu_pc .w1170 .list_ngang ul li .col-right .item .title a{color:#333}\r\n.menu_pc .w1170 .list_ngang ul li .col-right .item .title a:hover,nav .w1170 .list_ngang ul li .col-right .item:hover .title a{color:#f68f1e}\r\n.menu_pc .w1170 .list_ngang ul li .col-right .item .image{max-height:105px; min-height:105px; overflow:hidden}\r\n.menu_pc .w1170 .list_ngang ul li .col-right .data_menu {display:none}\r\n.menu_pc .w1170 .list_ngang ul li .col-right .data_menu.active{display:block}\r\n.menu_pc .w1170 .list_ngang li.right:hover .khung-timkiem{display:block}\r\n.menu_pc .w1170 .list_ngang li.right{    padding: 1.2% 0%;}\r\n.khung-timkiem{position:absolute; right:0; top:100%;box-shadow: 0 2px 6px rgba(0,0,0,0.2);     padding: 1%;\r\n    background: #fff; z-index:1; width:30%; display:none;}\r\n.khung-timkiem::before {\r\n    position: absolute;\r\n    top: -9px;\r\n    right: 19px;\r\n    display: block;\r\n    content: '';\r\n    width: 0;\r\n    height: 0;\r\n    border-style: solid;\r\n    border-width: 0 5.5px 6px 5.5px;\r\n    border-color: transparent transparent #f68f1e transparent;\r\n}\r\n.khung-timkiem:after {\r\n    position: absolute;\r\n    top: -3px;\r\n    display: block;\r\n    content: '';\r\n    right: 0;\r\n    left: 0;\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    height: 3px;\r\n    background-color: #f68f1e;\r\n}\r\n.khung-timkiem input[type=text]{ padding:2% 2%; width:70%}\r\n.khung-timkiem input[type=button]{background:#222222;  cursor:pointer; color:#fff; padding:2% 0%; box-sizing:border-box;border:thin solid #222222}"

/***/ }),

/***/ "./src/app/block/menu/menu.component.html":
/*!************************************************!*\
  !*** ./src/app/block/menu/menu.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"menu_pc\">\n\t<div class=\"w1170\">\n\t\t<ul class=\"list_ngang\">\n\t\t\t<li class=\"logo-truot\">\n\t\t\t\t<a href=\".\">\n\t\t\t\t\t<img src=\"assets/image/logo-truot.png\" class=\"ver-middle\" />\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t<li *ngFor=\"let menu of baiviet_service.menuallhdt\" \n\t\t\t\tid=\"menu{{menu.term_id}}\" (mouseover)=\"hover_menu(menu.term_id)\" >\n\t\t\t<!-- \" -->\n\t\t\t\t<a routerLink=\"category/{{menu.slug}}\">{{menu.name}}</a>\t\t\t\t\n\t\t\t\t <ul *ngIf=\"(menu.submenu).length > 0\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div class=\"width20 col-left left\">\n\t\t\t\t\t\t\t<Div *ngFor=\"let submenu of menu.submenu let i = index\" \n\t\t\t\t\t\t\t[class.first-submenu]=\"first\" class=\"id_{{submenu.term_id}} {{(i==0)?'active' : '' }}\"\n\t\t\t\t\t\t\tid=\"{{submenu.term_id}}\"\n\t\t\t\t\t\t\t(mouseover)=\"hover_menucon(submenu.term_id)\"  \n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<a routerLink=\"category/{{submenu.slug}}\"  >{{submenu.name}}</a>\n\t\t\t\t\t\t\t</Div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\" width80 col-right left\"  >\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t <Div *ngFor=\"let post of baiviet_service.posts\" class=\"item width25\">\n\t\t\t\t\t\t\t\t<div class=\"image\"><a><img src=\"{{post.thumb}}\" /></a></div>\n\t\t\t\t\t\t\t</Div>  \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a routerLink=\"lien-he\">Liên hệ </a>\n\t\t\t</li>\n\t\t\t<li class=\"right\">\n\t\t\t\t<img src=\"assets/image/search.png\" />\n\t\t\t\t<div class=\"khung-timkiem\">\n\t\t\t\t\t<input type=\"text\" name=\"tim\" class=\"timkiem\" />\n\t\t\t\t\t<input type=\"button\" value=\"Tìm kiếm\" onclick=\"timkiem()\" />\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<div class=\"clear\"></div>\n\t\t</ul>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/block/menu/menu.component.ts":
/*!**********************************************!*\
  !*** ./src/app/block/menu/menu.component.ts ***!
  \**********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_baiviet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/baiviet.service */ "./src/app/service/baiviet.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = /** @class */ (function () {
    function MenuComponent(baiviet_service) {
        this.baiviet_service = baiviet_service;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.baiviet_service.getallmenu();
        this.script();
    };
    MenuComponent.prototype.hover_menu = function (id) {
        var atr_id = jquery__WEBPACK_IMPORTED_MODULE_2__("#menu" + id).find(".active").attr('id');
        this.baiviet_service.getbaiviet("&id_category=" + atr_id + "&batdau=0&ketthuc=4");
    };
    MenuComponent.prototype.hover_menucon = function (id) {
        this.baiviet_service.getbaiviet("&id_category=" + id + "&batdau=0&ketthuc=4");
        //console.log(this.baiviet_service.posts);        
        jquery__WEBPACK_IMPORTED_MODULE_2__(".id_" + id).parent().children().removeClass('active');
        jquery__WEBPACK_IMPORTED_MODULE_2__(".id_" + id).addClass("active");
    };
    MenuComponent.prototype.script = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__(window).scroll(function () {
            var aTop = jquery__WEBPACK_IMPORTED_MODULE_2__('.menu_pc').height();
            if (jquery__WEBPACK_IMPORTED_MODULE_2__(this).scrollTop() >= aTop + 100) {
                jquery__WEBPACK_IMPORTED_MODULE_2__(".menu_pc").addClass("menutruoc");
                jquery__WEBPACK_IMPORTED_MODULE_2__(".menu_pc .w1170 .list_ngang .logo-truot").css({ "width": "auto", "padding-right": "2%" });
            }
            else if (jquery__WEBPACK_IMPORTED_MODULE_2__(this).scrollTop() < aTop + 100) {
                jquery__WEBPACK_IMPORTED_MODULE_2__(".menu_pc").removeClass("menutruoc");
                jquery__WEBPACK_IMPORTED_MODULE_2__(".menu_pc .w1170 .list_ngang .logo-truot").css({ "width": "0", "padding-right": "0" });
            }
        });
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/block/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/block/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_service_baiviet_service__WEBPACK_IMPORTED_MODULE_1__["service"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/block/sidebar/sidebar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/block/sidebar/sidebar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-1{margin-bottom:20px;}"

/***/ }),

/***/ "./src/app/block/sidebar/sidebar.component.html":
/*!******************************************************!*\
  !*** ./src/app/block/sidebar/sidebar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"khung-sidebar\">\n\n  <div class=\"cate danhmucesport\">\n    <!--====top bài viết all========-->\n    <div class=\"item-1\">\n      <div class=\"row-1\">\n        <div class=\"tieude_cate\">\n          <a href=\"\" title=\"\" rel=\"bookmark\">Top Bài Viết</a>\n        </div>\n      </div>\n      <div class=\"row-2 baiviet\">\n        <div *ngFor=\"let row of toppost ; let i = index ; let last = last\">\n\n          <div *ngIf=\"i==0\" class=\"col-row-2-1\">\n            <a routerLink=\"{{row.post_name}}\" rel=\"bookmark\" title=\"{{row.post_title}}\">\n              <img src=\"{{row.thumb}}\" alt title=\"{{row.post_title}}\" />\n            </a>\n            <div class=\"meta-des\">\n              <h3>\n                <a routerLink=\"/{{row.post_name}}\" rel=\"bookmark\" title=\"{{row.post_title}}\">{{row.post_title}}</a>\n                <span class=\"td-post-date\">\n                  <span> - {{row.post_date}}</span>\n                </span>\n              </h3>\n            </div>\n          </div>\n\n\n          <div *ngIf=\"i>0\" class=\"item baiviet col-row-2-2\">\n            <div class=\"col-item-left left\">\n              <a routerLink=\"{{row.post_name}}\" rel=\"bookmark\" title=\"{{row.post_title}}\">\n                <img src=\"{{row.thumb}}\" alt title=\"{{row.post_title}}\" />\n              </a>\n            </div>\n            <div class=\"col-item-right left\">\n              <h3 class=\"tieudenho\">\n                <a routerLink=\"/{{row.post_name}}\" rel=\"bookmark\" title=\"{{row.post_title}}\">{{row.post_title}}</a>\n              </h3>\n              <div class=\"td-module-meta-info\">\n                <span class=\"td-post-date\">{{row.post_date}}</span>\n              </div>\n            </div>\n            <div class=\"clear\"></div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <!--Fan page-->\n    <div class=\"fb-page\" data-href=\"https://www.facebook.com/LMHTgame2T/\" data-small-header=\"false\" data-adapt-container-width=\"true\" data-hide-cover=\"false\" data-show-facepile=\"true\"><blockquote cite=\"https://www.facebook.com/LMHTgame2T/\" class=\"fb-xfbml-parse-ignore\"><a href=\"https://www.facebook.com/LMHTgame2T/\">Kệ thông tin Game2T</a></blockquote></div>\n    <!--====top bài viết video========-->\n    <div class=\"item-1\">\n      <div class=\"row-1\">\n        <div class=\"tieude_cate\">\n          <a href=\"\" title=\"\" rel=\"bookmark\">Video xem nhiều nhất </a>\n        </div>\n      </div>\n      <div class=\"row-2 baiviet\">\n        <div *ngFor=\"let row of toppost_video ; let i = index ; let last = last\">\n\n          <div *ngIf=\"i==0\" class=\"col-row-2-1\">\n            <a routerLink=\"/{{row.post_name}}\" rel=\"bookmark\" title=\"{{row.post_title}}\">\n              <img src=\"{{row.thumb}}\" alt title=\"{{row.post_title}}\" />\n            </a>\n            <div class=\"meta-des\">\n              <h3>\n                <a routerLink=\"/{{row.post_name}}\" rel=\"bookmark\" title=\"{{row.post_title}}\">{{row.post_title}}</a>\n                <span class=\"td-post-date\">\n                  <span> - {{row.post_date}}</span>\n                </span>\n              </h3>\n            </div>\n          </div>\n\n\n          <div *ngIf=\"i>0\" class=\"item baiviet col-row-2-2\">\n            <div class=\"col-item-left left\">\n              <a routerLink=\"/{{row.post_name}}\" rel=\"bookmark\" title=\"{{row.post_title}}\">\n                <img src=\"{{row.thumb}}\" alt title=\"{{row.post_title}}\" />\n              </a>\n            </div>\n            <div class=\"col-item-right left\">\n              <h3 class=\"tieudenho\">\n                <a routerLink=\"/{{row.post_name}}\" rel=\"bookmark\" title=\"{{row.post_title}}\">{{row.post_title}}</a>\n              </h3>\n              <div class=\"td-module-meta-info\">\n                <span class=\"td-post-date\">{{row.post_date}}</span>\n              </div>\n            </div>\n            <div class=\"clear\"></div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/block/sidebar/sidebar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/block/sidebar/sidebar.component.ts ***!
  \****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_baiviet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/baiviet.service */ "./src/app/service/baiviet.service.ts");
/* harmony import */ var sticky_sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sticky-sidebar */ "./node_modules/sticky-sidebar/src/sticky-sidebar.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(service) {
        this.service = service;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.gettoppost();
        this.gettoppost_video();
        window.FB.XFBML.parse();
    };
    SidebarComponent.prototype.ngOnChanges = function (changes) {
        var name = changes.thongtin;
        this.giatrisau = name.currentValue;
        if (this.giatrisau > 0) {
            this.runjs();
        }
    };
    SidebarComponent.prototype.gettoppost = function () {
        var _this = this;
        this.service.gettop_post("").then(function (resJson) { _this.toppost = resJson; });
    };
    SidebarComponent.prototype.gettoppost_video = function () {
        var _this = this;
        this.service.gettop_post(6).then(function (resJson) { _this.toppost_video = resJson; });
    };
    SidebarComponent.prototype.runjs = function () {
        setTimeout(function () {
            var sidebar = new StickySidebar('.content > .w1170 > .col-right', {
                containerSelector: '.content',
                innerWrapperSelector: '.khung-sidebar',
                topSpacing: 50,
                bottomSpacing: 50
            });
        }, 3000);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('thongtin'),
        __metadata("design:type", Number)
    ], SidebarComponent.prototype, "thongtin", void 0);
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/block/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/block/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_service_baiviet_service__WEBPACK_IMPORTED_MODULE_1__["service"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/input/input.component.css":
/*!*******************************************!*\
  !*** ./src/app/input/input.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/input/input.component.html":
/*!********************************************!*\
  !*** ./src/app/input/input.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n <a routerLink=\"{{ho+'-'+ten}}\"> {{ho +\" \"+ ten}}</a>\n</p>\n"

/***/ }),

/***/ "./src/app/input/input.component.ts":
/*!******************************************!*\
  !*** ./src/app/input/input.component.ts ***!
  \******************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputComponent = /** @class */ (function () {
    function InputComponent() {
    }
    InputComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputComponent.prototype, "ten", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputComponent.prototype, "ho", void 0);
    InputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input',
            template: __webpack_require__(/*! ./input.component.html */ "./src/app/input/input.component.html"),
            styles: [__webpack_require__(/*! ./input.component.css */ "./src/app/input/input.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./src/app/lienhe/lienhe.component.css":
/*!*********************************************!*\
  !*** ./src/app/lienhe/lienhe.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/lienhe/lienhe.component.html":
/*!**********************************************!*\
  !*** ./src/app/lienhe/lienhe.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{title.lien-he}}\n<form (ngSubmit)=\"onSubmit(formlienhe)\" #formlienhe=\"ngForm\" class=\"clickthu\" >\n    <div><input name=\"hoten\" [(ngModel)]=\"hoten\"   #name=\"ngModel\"  placeholder=\"nhập họ và tên vào\" required >\n        <span *ngIf=\"name.errors && name.errors.required\">\n            (*)\n      </span></div>\n    <div><input name=\"tuoi\" type=\"number\" [(ngModel)]=\"tuoi\" placeholder=\"mời nhập tuổi\" ></div>\n    <div><input name=\"email\" #txtemail = \"ngModel\" [(ngModel)]=\"email\" placeholder=\"mời nhập email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" required ><span *ngIf=\"txtemail.errors && txtemail.errors.required\" >\n        (*)\n   </span></div>\n    <!-- pattern => định dạng  1 chuoi nao đó (example : email ) -->\n  <div  *ngIf=\"txtemail.errors && txtemail.errors.pattern\">\n    Email khong chinh xac\n</div>\n    <div><input name=\"ngaythangnamsinh\" [(ngModel)]=\"ngaythangnamsinh\" type=\"date\" ></div>\n    <div><textarea rows=\"3\" placeholder=\"ghi chú \" name=\"ghichu\" [(ngModel)]=\"ghichu\"></textarea></div>\n    <div><button  [disabled]=\"!formlienhe.valid\">Gửi</button></div> \n    \n</form>\n{{ name.errors | json }}\n{{ txtemail.errors | json }}\n"

/***/ }),

/***/ "./src/app/lienhe/lienhe.component.ts":
/*!********************************************!*\
  !*** ./src/app/lienhe/lienhe.component.ts ***!
  \********************************************/
/*! exports provided: LienheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LienheComponent", function() { return LienheComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_baiviet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/baiviet.service */ "./src/app/service/baiviet.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LienheComponent = /** @class */ (function () {
    function LienheComponent(baiviet_service, route) {
        this.baiviet_service = baiviet_service;
        this.route = route;
        this.title = this.route.snapshot.paramMap.getAll;
    }
    LienheComponent.prototype.onSubmit = function (formlienhe) {
        // console.log(formlienhe);
        this.baiviet_service.guimail(formlienhe.value)
            .then(function (res) { return formlienhe.reset(); })
            .catch(function (err) { return console.log(err); });
    };
    LienheComponent.prototype.ngOnInit = function () {
        this.script();
    };
    LienheComponent.prototype.script = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__(".clickthu").click(function () {
            alert("ok");
        });
    };
    LienheComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lienhe',
            template: __webpack_require__(/*! ./lienhe.component.html */ "./src/app/lienhe/lienhe.component.html"),
            styles: [__webpack_require__(/*! ./lienhe.component.css */ "./src/app/lienhe/lienhe.component.css")],
        }),
        __metadata("design:paramtypes", [_service_baiviet_service__WEBPACK_IMPORTED_MODULE_1__["service"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LienheComponent);
    return LienheComponent;
}());



/***/ }),

/***/ "./src/app/model/listname.ts":
/*!***********************************!*\
  !*** ./src/app/model/listname.ts ***!
  \***********************************/
/*! exports provided: Listname */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Listname", function() { return Listname; });
var Listname = [
    { id: 1, name: "khang" },
    { id: 2, name: "luan" },
    { id: 3, name: "loan" },
    { id: 4, name: "linh" },
    { id: 5, name: "hang" },
    { id: 6, name: "liem" },
    { id: 7, name: "nha" },
    { id: 8, name: "phat" }
];


/***/ }),

/***/ "./src/app/module/pipe.ts":
/*!********************************!*\
  !*** ./src/app/module/pipe.ts ***!
  \********************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PipeModule = /** @class */ (function () {
    function PipeModule(sanitizer) {
        this.sanitizer = sanitizer;
    }
    PipeModule.prototype.transform = function (value, type) {
        switch (type) {
            case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
            case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error("Invalid safe type specified: " + type);
        }
    };
    PipeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'safe' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], PipeModule);
    return PipeModule;
}());



/***/ }),

/***/ "./src/app/output/output.component.css":
/*!*********************************************!*\
  !*** ./src/app/output/output.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/output/output.component.html":
/*!**********************************************!*\
  !*** ./src/app/output/output.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  output works!\n</p>\n"

/***/ }),

/***/ "./src/app/output/output.component.ts":
/*!********************************************!*\
  !*** ./src/app/output/output.component.ts ***!
  \********************************************/
/*! exports provided: OutputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputComponent", function() { return OutputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OutputComponent = /** @class */ (function () {
    function OutputComponent() {
    }
    OutputComponent.prototype.ngOnInit = function () {
    };
    OutputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-output',
            template: __webpack_require__(/*! ./output.component.html */ "./src/app/output/output.component.html"),
            styles: [__webpack_require__(/*! ./output.component.css */ "./src/app/output/output.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OutputComponent);
    return OutputComponent;
}());



/***/ }),

/***/ "./src/app/page/trangchitiet/trangchitiet.component.css":
/*!**************************************************************!*\
  !*** ./src/app/page/trangchitiet/trangchitiet.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{margin-top: 2%}\r\n.content h1{color: #f68f1e;    font-size: 26px;    font-weight: bold; margin:1% 0;}\r\n.content .meta-info .author-name a{color:#000; font-weight:600;}\r\n.content .meta-info .author-name{font-weight: 400; color: #444; float:left}\r\n.content .meta-info .post-views{float:right}\r\n.content hr{border:2px solid; margin:1.5% 0}\r\n.content_chitiet img{display:block; margin:auto; width:auto ; height:auto}\r\n.content_chitiet .alignnone{display: inline-block; margin: 0 5px;}\r\n.content_chitiet .album{display: flex;}\r\n.content_chitiet p{font-size: 16px;    line-height: 26px; margin-bottom:2%; text-align: justify }\r\n.content_chitiet h2 strong,.content_chitiet h2{font-size:130%; margin:2% 0; line-height:35px;}\r\n.content_chitiet h3 strong, .content_chitiet h3{font-size:120%; margin:2% 0}\r\n.content_chitiet h4 strong, .content_chitiet h4{font-size:110%; margin:2% 0}\r\n.content_chitiet a{color:#f68f1e; font-size:100%}\r\narticle .tags .list_ngang{margin-top:4%}\r\narticle .tags .list_ngang .active{ background: #222222; border:thin solid #222222; color: #fff; font-weight:bold;}\r\narticle .tags .list_ngang li{border:thin solid #ededed; color:#111111; padding: 5px 8px; margin:1% 0; margin-right:1%; }\r\n.baivietlienquan h4{display:table; background:#222222; color:#fff; padding:1% 2%}\r\n.baivietlienquan .row-2,.baivietlienquan{margin:2% 0}\r\n.baivietlienquan .row-2 .col-row-2-1.width33{    padding-right: 2%;}\r\n"

/***/ }),

/***/ "./src/app/page/trangchitiet/trangchitiet.component.html":
/*!***************************************************************!*\
  !*** ./src/app/page/trangchitiet/trangchitiet.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"w1170\">\n    <div class=\"col-left width70 left\">\n      <div class=\"td-crumb-container\">\n        <div class=\"entry-crumbs\" itemscope=\"\" itemtype=\"http://schema.org/BreadcrumbList\">\n          <span class=\"td-bred-first\"><a routerLink=\".\">Trang chủ</a></span>\n\n          <span itemscope=\"\" *ngFor=\"let bc of breadcrumb\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\">\n            &raquo; <a title=\"Xem tất cả {{bc.name}}\" class=\"entry-crumb\" itemscope=\"\" itemprop=\"item\" itemtype=\"http://schema.org/Thing\"\n              routerLink=\"/category/{{bc.slug}}\">\n              <span itemprop=\"name\"> {{bc.name}}</span> </a>\n            <meta itemprop=\"position\" content=\"1\">\n          </span>\n          &raquo; <span class=\"td-bred-no-url-last\">{{title}}</span>\n\n        </div>\n      </div>\n      <article>\n        <h1>{{post_title}}</h1>\n        <div class=\"meta-info\">\n          <div class=\"author-name\">Bởi\n            <a href=\"#\">{{display_name}}</a>\n            -\n            <span class=\"post-date\">\n              {{post_date | date :'dd/MM/yyyy' }}\n            </span>\n          </div>\n          <div class=\"post-views\"><img src=\"assets/image/view.png\" /> <span> {{count_view}}</span></div>\n          <div class=\"clear\"></div>\n        </div>\n        <hr>\n        <div class=\"content_chitiet\">\n          <div [innerHTML]=\"post_content | safe: 'html' \"></div>\n        </div>\n      </article>\n    </div>\n    <div class=\"col-right width30 right \">\n      <app-sidebar [thongtin]='check_slidebar'></app-sidebar>\n    </div>\n    <div class=\"clear\"></div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/page/trangchitiet/trangchitiet.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/page/trangchitiet/trangchitiet.component.ts ***!
  \*************************************************************/
/*! exports provided: TrangchitietComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangchitietComponent", function() { return TrangchitietComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_baiviet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/baiviet.service */ "./src/app/service/baiviet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();


var TrangchitietComponent = /** @class */ (function () {
    function TrangchitietComponent(activatedroute, service) {
        this.activatedroute = activatedroute;
        this.service = service;
        this.pageNum = 1;
        this.title = "";
        this.idcatepost = 0;
        this.check_slidebar = 1;
    }
    TrangchitietComponent.prototype.ngOnInit = function () {
        this.getslug();
    };
    TrangchitietComponent.prototype.getslug = function () {
        var _this = this;
        this.activatedroute.paramMap.subscribe(function (params) {
            $('html,body').animate({
                scrollTop: $(".content").offset().top - 100
            }, 100);
            _this.slug = params.get("post");
            _this.pageNum = 1;
            _this.Breadcrumb();
            _this.get_content();
        });
    };
    TrangchitietComponent.prototype.Breadcrumb = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.service.get_idcate_ofpost(this.slug)];
                    case 1:
                        _a.idcatepost = _d.sent();
                        _b = this;
                        return [4 /*yield*/, this.service.get_parent_ofid(this.idcatepost)];
                    case 2:
                        _b.parent = _d.sent();
                        this.check_slidebar = this.parent;
                        this.service.get_breadcrumb(this.parent)
                            .then(function (resJson) { _this.breadcrumb = resJson; });
                        _c = this;
                        return [4 /*yield*/, this.service.get_title_post(this.slug)];
                    case 3:
                        _c.title = _d.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TrangchitietComponent.prototype.get_content = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var abc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.get_PostDetails(this.slug)
                            .then(function (resJson) {
                            _this.display_name = resJson.display_name;
                            _this.post_date = resJson.post_date;
                            _this.post_content = resJson.post_content;
                            _this.post_title = resJson.post_title;
                            _this.count_view = resJson.count_view;
                        })];
                    case 1:
                        _a.sent();
                        abc = this.post_content.match(/^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/gim);
                        if (abc.length > 0) {
                            abc.forEach(function (keys) {
                                var chuoiyoutube = keys.replace("https://www.youtube.com/watch?v=", "");
                                _this.post_content = _this.post_content.replace(keys, '<p><iframe style="width:100%" height="350" src="https://www.youtube.com/embed/' + chuoiyoutube + '" frameborder="0" allowfullscreen></iframe><p>');
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TrangchitietComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trangchitiet',
            template: __webpack_require__(/*! ./trangchitiet.component.html */ "./src/app/page/trangchitiet/trangchitiet.component.html"),
            styles: [__webpack_require__(/*! ./trangchitiet.component.css */ "./src/app/page/trangchitiet/trangchitiet.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_baiviet_service__WEBPACK_IMPORTED_MODULE_2__["service"]])
    ], TrangchitietComponent);
    return TrangchitietComponent;
}());



/***/ }),

/***/ "./src/app/page/trangchu/trangchu.component.css":
/*!******************************************************!*\
  !*** ./src/app/page/trangchu/trangchu.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page/trangchu/trangchu.component.html":
/*!*******************************************************!*\
  !*** ./src/app/page/trangchu/trangchu.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button (click)=\"append()\">Append</button>\n<button (click)=\"prepend()\">Prepend</button>\n<div [innerHTML]=\"myHtml\" class=\"ok\"></div> -->"

/***/ }),

/***/ "./src/app/page/trangchu/trangchu.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/page/trangchu/trangchu.component.ts ***!
  \*****************************************************/
/*! exports provided: TrangchuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangchuComponent", function() { return TrangchuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrangchuComponent = /** @class */ (function () {
    function TrangchuComponent() {
        this.myHtml = '<div><i>basic initial HTML</i></div>';
        this.appendedHtml = '<div><b>this appended html</b></div>';
        this.prenpendHtml = '<div><b>this prepended html</b></div>';
    }
    TrangchuComponent.prototype.ngOnInit = function () {
    };
    TrangchuComponent.prototype.append = function () {
        this.myHtml = this.myHtml + this.appendedHtml;
    };
    TrangchuComponent.prototype.prepend = function () {
        this.myHtml = this.prenpendHtml + this.myHtml;
    };
    TrangchuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trangchu',
            template: __webpack_require__(/*! ./trangchu.component.html */ "./src/app/page/trangchu/trangchu.component.html"),
            styles: [__webpack_require__(/*! ./trangchu.component.css */ "./src/app/page/trangchu/trangchu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TrangchuComponent);
    return TrangchuComponent;
}());



/***/ }),

/***/ "./src/app/page/trangloai/trangloai.component.css":
/*!********************************************************!*\
  !*** ./src/app/page/trangloai/trangloai.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{margin-top: 2%}\r\n.content .col-left .item{margin-bottom:3%;}\r\n.content .col-left .item .col-item-left{width:284px;}\r\n.content .col-left .item .col-item-right{width:calc(100% - 284px); padding-left:2%; box-sizing:border-box;}\r\n.content .col-left .item .col-item-right h3 a{font-size:130%; line-height:30px; font-weight:700}\r\n.td-crumb-container .td-bred-first a,.entry-crumb{background: #f68f1e;\r\n    color: #fff;\r\n    padding: 2px;\r\n    font-weight: bold;}\r\n.td-crumb-container\t.td-bred-no-url-last ,.entry-crumbs{color:#f68f1e; font-weight:bold;}"

/***/ }),

/***/ "./src/app/page/trangloai/trangloai.component.html":
/*!*********************************************************!*\
  !*** ./src/app/page/trangloai/trangloai.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"w1170\">\n   \n      <div class=\"td-crumb-container\">\n          <div class=\"entry-crumbs\" itemscope=\"\" itemtype=\"http://schema.org/BreadcrumbList\">\n          <span class=\"td-bred-first\"><a routerLink=\".\">Trang chủ</a></span> \n        \n          <span itemscope=\"\" *ngFor=\"let bc of breadcrumb\" itemprop=\"itemListElement\" itemtype=\"http://schema.org/ListItem\">\n            &raquo; <a title=\"Xem tất cả {{bc.name}}\" class=\"entry-crumb\" itemscope=\"\" itemprop=\"item\" itemtype=\"http://schema.org/Thing\"\n             routerLink=\"/category/{{bc.slug}}\">\n            <span itemprop=\"name\"> {{bc.name}}</span>    </a>    \n            <meta itemprop=\"position\" content=\"1\">\n          </span> \n          &raquo; <span class=\"td-bred-no-url-last\">{{title}}</span>\n                      \n          </div>\n    </div>\n   <h1>{{title}}</h1>\n    <div class=\"col-left width70 left\">\n      <div class=\"item baiviet\" *ngFor=\"let baiviet of Post_TrangLoai  | paginate: { id: 'foo', itemsPerPage: offset, currentPage: pageNum, totalItems: total }\">\n        <div class=\"col-item-left left\">\n          <a routerLink=\"/{{baiviet.post_name}}\">\n            <img src=\"{{baiviet.thumb}}\">\n          </a>\n        </div>\n        <div class=\"col-item-right left\">\n          <h3>\n            <a routerLink=\"/{{baiviet.post_name}}\"> {{baiviet.post_title}} </a>\n          </h3>\n\n          <div class=\"td-module-meta-info\">\n            <span class=\"td-post-author-name\">\n              <a routerLink=\"/author/{{baiviet.user_nicename}}\">{{baiviet.display_name}}</a>\n              <span>-</span>\n            </span>\n            <span class=\"td-post-date\">\n              <div>{{baiviet.post_date}}</div>\n            </span>\n          </div>\n          <div class=\"td-excerpt\">\n            {{baiviet.noidungngan}}\n          </div>\n\n        </div>\n        <div class=\"clear\"></div>\n      </div>\n      <pagination-controls  id=\"foo\" (pageChange)=\"pageChanged($event)\"></pagination-controls>\n    </div>\n    <div class=\"col-right width30 right \">\n      <app-sidebar [thongtin]='check_slidebar'></app-sidebar>\n    </div>\n    <div class=\"clear\"></div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/page/trangloai/trangloai.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/page/trangloai/trangloai.component.ts ***!
  \*******************************************************/
/*! exports provided: TrangloaiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrangloaiComponent", function() { return TrangloaiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_baiviet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/baiviet.service */ "./src/app/service/baiviet.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var TrangloaiComponent = /** @class */ (function () {
    function TrangloaiComponent(route, servide) {
        this.route = route;
        this.servide = servide;
        this.pageNum = 1;
        this.offset = 20;
        this.http_api = "http://game2t.com/api/index.php?";
        this.slug_title = "";
        this.idparent2 = 2;
        this.title = "";
        this.check_slidebar = 0;
    }
    TrangloaiComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__('html,body').animate({
            scrollTop: jquery__WEBPACK_IMPORTED_MODULE_3__(".content").offset().top - 100
        }, 100);
        this.gettitle();
        //this.get_parent();
    };
    TrangloaiComponent.prototype.script = function () {
        alert("ok");
    };
    // async getdata_title2()
    // {
    //   this.idparent2 = await this.gettitle2();
    //   console.log(this.idparent2);
    // } 
    TrangloaiComponent.prototype.gettitle = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            jquery__WEBPACK_IMPORTED_MODULE_3__('html,body').animate({
                scrollTop: jquery__WEBPACK_IMPORTED_MODULE_3__(".content").offset().top - 100
            }, 100);
            _this.slug_title = params.get("title");
            _this.pageNum = 1;
            _this.get_content();
            _this.Breadcrumb();
        });
    };
    TrangloaiComponent.prototype.Breadcrumb = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.servide.get_parent(this.slug_title)];
                    case 1:
                        _a.parent = _c.sent();
                        if (this.parent != 0) {
                            this.servide.get_breadcrumb(this.parent)
                                .then(function (resJson) { _this.breadcrumb = resJson; });
                        }
                        else {
                            this.breadcrumb = [];
                        }
                        _b = this;
                        return [4 /*yield*/, this.servide.get_title(this.slug_title)];
                    case 2:
                        _b.title = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // console.log(this.pageNum);
    TrangloaiComponent.prototype.get_content = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, all_child, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        //console.log(this.pageNum_chinh+ " - " + this.batdau);
                        _a = this;
                        return [4 /*yield*/, this.servide.get_term_id(this.slug_title)];
                    case 1:
                        //console.log(this.pageNum_chinh+ " - " + this.batdau);
                        _a.idcate = _c.sent();
                        return [4 /*yield*/, this.servide.get_all_child_con(this.idcate)];
                    case 2:
                        all_child = _c.sent();
                        (all_child == '') ? all_child = this.idcate : all_child = all_child + "," + this.idcate;
                        // console.log(all_child);
                        this.pageNum_chinh = this.pageNum - 1;
                        this.batdau = this.pageNum_chinh * this.offset;
                        //console.log(this.all_child.split(','));
                        //console.log("&id_category=-1&batdau="+this.batdau+"&ketthuc="+this.offset+"&array_id=array()&danhmuc=category&array_category="+this.all_child);
                        this.servide.getbaiviet_trangloai("&id_category=-1&batdau=" + this.batdau + "&ketthuc=" + this.offset + "&array_id=&danhmuc=category&array_category=" + all_child)
                            .then(function (resJson) { _this.Post_TrangLoai = resJson; });
                        _b = this;
                        return [4 /*yield*/, this.servide.get_post_count(all_child)];
                    case 3:
                        _b.total = _c.sent();
                        this.check_slidebar = this.total;
                        return [2 /*return*/];
                }
            });
        });
    };
    TrangloaiComponent.prototype.pageChanged = function (event) {
        jquery__WEBPACK_IMPORTED_MODULE_3__('html,body').animate({
            scrollTop: jquery__WEBPACK_IMPORTED_MODULE_3__(".content").offset().top - 100
        }, 100);
        this.pageNum = event;
        this.get_content();
    };
    TrangloaiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trangloai',
            template: __webpack_require__(/*! ./trangloai.component.html */ "./src/app/page/trangloai/trangloai.component.html"),
            styles: [__webpack_require__(/*! ./trangloai.component.css */ "./src/app/page/trangloai/trangloai.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_baiviet_service__WEBPACK_IMPORTED_MODULE_2__["service"]])
    ], TrangloaiComponent);
    return TrangloaiComponent;
}());



/***/ }),

/***/ "./src/app/routes/listten/listten.component.css":
/*!******************************************************!*\
  !*** ./src/app/routes/listten/listten.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/listten/listten.component.html":
/*!*******************************************************!*\
  !*** ./src/app/routes/listten/listten.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <ng-container *ngFor=\"let item of arr_test\">\n \t \t<app-input [ten] = \"item.firstName\" [ho] = \"item.lastName\" ></app-input>\n </ng-container>\n {{ten}}"

/***/ }),

/***/ "./src/app/routes/listten/listten.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/routes/listten/listten.component.ts ***!
  \*****************************************************/
/*! exports provided: ListtenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListtenComponent", function() { return ListtenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListtenComponent = /** @class */ (function () {
    function ListtenComponent(route) {
        this.route = route;
        this.arr_test = [];
        this.ten = this.route.snapshot.paramMap.get("ten");
    }
    ListtenComponent.prototype.ngOnInit = function () {
        // console.log(this.ten);
        if (this.ten == null) {
            this.get_kocoten();
        }
    };
    ListtenComponent.prototype.get_kocoten = function () {
        this.arr_test = [
            { "firstName": "John", "lastName": "Doe" },
            { "firstName": "Anna", "lastName": "Smith" },
            { "firstName": "Peter", "lastName": "Jones" }
        ];
    };
    ListtenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listten',
            template: __webpack_require__(/*! ./listten.component.html */ "./src/app/routes/listten/listten.component.html"),
            styles: [__webpack_require__(/*! ./listten.component.css */ "./src/app/routes/listten/listten.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ListtenComponent);
    return ListtenComponent;
}());



/***/ }),

/***/ "./src/app/service/baiviet.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/baiviet.service.ts ***!
  \********************************************/
/*! exports provided: service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "service", function() { return service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var service = /** @class */ (function () {
    function service(http) {
        this.http = http;
        this.http_api = "http://game2t.com/api/index.php?";
    }
    service.prototype.getbaiviet = function (data) {
        var _this = this;
        return this.http.get(this.http_api + 'function=get_post' + data)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { _this.posts = resJson; })
            .catch(function (err) { return console.log(err); });
    };
    service.prototype.getbaiviet_trangloai = function (data) {
        return this.http.get(this.http_api + 'function=get_post' + data)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (err) { return console.log(err); });
    };
    service.prototype.getmenu_cha = function () {
        var _this = this;
        return this.http.get(this.http_api + 'function=getmenu_cha')
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { _this.baiviethdt = resJson; })
            .catch(function (err) { return console.log(err); });
    };
    service.prototype.getmenu_con = function (parent) {
        var _this = this;
        return this.http.get(this.http_api + 'function=getmenu_con&parent=' + parent)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { _this.menuconhdt = resJson; })
            .catch(function (err) { return console.log(err); });
    };
    service.prototype.getallmenu = function () {
        var _this = this;
        return this.http.get(this.http_api + 'function=getallmenu')
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { _this.menuallhdt = resJson; })
            .catch(function (err) { return console.log(err); });
        // 
    };
    service.prototype.guimail = function (data) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ method: _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestMethod"].Post, headers: headers });
        return this.http.post(this.http_api + 'function=guimail', JSON.stringify(data), requestOptions)
            .toPromise()
            .then(function (res) { return res.text(); })
            .then(function (resJson) { return console.log(resJson); });
    };
    service.prototype.get_term_id = function (TieuDe) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.http_api + 'function=get_term_id&slug=' + TieuDe).toPromise()];
                    case 1:
                        i = _a.sent();
                        return [2 /*return*/, i.json().term_id];
                }
            });
        });
    };
    service.prototype.get_all_child_con = function (idcate) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.http_api + 'function=get_all_child_con&id=' + idcate).toPromise()];
                    case 1:
                        i = _a.sent();
                        return [2 /*return*/, i.json().categories];
                }
            });
        });
    };
    service.prototype.get_post_count = function (all_child) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.http_api + 'function=get_post_count&id_category=-1&batdau=-1&ketthuc=-1&array_id=&danhmuc=category&array_category=' + all_child).toPromise()];
                    case 1:
                        i = _a.sent();
                        return [2 /*return*/, i.json().tong];
                }
            });
        });
    };
    service.prototype.get_parent = function (slug) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.http_api + 'function=get_parent&slug=' + slug).toPromise()];
                    case 1:
                        i = _a.sent();
                        return [2 /*return*/, i.json().parent];
                }
            });
        });
    };
    service.prototype.get_parent_ofid = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.http_api + 'function=get_parent_ofid&id=' + id).toPromise()];
                    case 1:
                        i = _a.sent();
                        return [2 /*return*/, i.json().parent];
                }
            });
        });
    };
    service.prototype.get_breadcrumb = function (parent) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.get(this.http_api + 'function=get_breadcrumb&parent=' + parent)
                        .toPromise()
                        .then(function (res) { return res.json(); })
                        .catch(function (err) { return console.log(err); })];
            });
        });
    };
    service.prototype.get_title = function (slug) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.http_api + 'function=get_title&slug=' + slug).toPromise()];
                    case 1:
                        i = _a.sent();
                        return [2 /*return*/, i.json().name];
                }
            });
        });
    };
    service.prototype.get_title_post = function (slug) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.http_api + 'function=get_title_post&slug=' + slug).toPromise()];
                    case 1:
                        i = _a.sent();
                        return [2 /*return*/, i.json().post_title];
                }
            });
        });
    };
    service.prototype.gettop_post = function (id_cate) {
        return this.http.get(this.http_api + 'function=gettop_post&id_cate=' + id_cate)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (err) { return console.log(err); });
    };
    service.prototype.get_idcate_ofpost = function (slug) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.http_api + 'function=get_idcate_ofpost&slug=' + slug).toPromise()];
                    case 1:
                        i = _a.sent();
                        return [2 /*return*/, i.json().term_taxonomy_id];
                }
            });
        });
    };
    service.prototype.get_PostDetails = function (slug) {
        return this.http.get(this.http_api + 'function=get_PostDetails&slug=' + slug)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (err) { return console.log(err); });
    };
    service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], service);
    return service;
}());



/***/ }),

/***/ "./src/app/test1/test1.component.css":
/*!*******************************************!*\
  !*** ./src/app/test1/test1.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tieude{text-align: left; font-weight: bold; font-size: 150%; color: red}\r\n.Listname{ margin: 0; padding: 0; list-style: none }\r\n.Listname li{float: left; margin-top: 10px}\r\n.Listname li div{background: red; margin:2%; padding: 2%; color: #fff;}\r\n.Listname li div button{margin: 5% 0}\r\n.Listname li div span{ text-transform: uppercase;}\r\n.Listname:after{content: ''; display: block; clear: both;}"

/***/ }),

/***/ "./src/app/test1/test1.component.html":
/*!********************************************!*\
  !*** ./src/app/test1/test1.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p [hidden]=\"anhien\" >\n {{title2 | uppercase }}\n</p>\n<div class=\"tieude\">====================Event ngModel==========================</div>\n<div>Nội dung input : <b [style.color] = \"inputvalue.name.length % 2 ===0 ? 'red' : 'blue'\"> {{ inputvalue.name }} </b> // style binding</div>\n<div>Nội dung input 2 {{txtinputtest.value}} // Template reference variable #txtinputtest</div>\n\n<input [(ngModel)]=\"inputvalue.name\" placeholder=\"name\" #txtinputtest>\n\n<div class=\"tieude\">====================Event==========================</div>\n<img [hidden]=\"anhien\" src=\"https://dakhoa.phongkhamdakhoathaibinhduong.vn/img/logo.jpg\" >\n<input type=\"button\" (click)=\"anhienfunction()\" name=\"\" [value]=\"anhien===false ? 'Ẩn' : 'Hiện'\" />\n\n\n<div class=\"tieude\">====================Vòng lặp for ngFor==========================</div>\n<select [(ngModel)]=\"filter\">\n\t<option value=\"xemtatca\">Xem tất cả</option>\n\t<option *ngFor=\"let inputvalue of inpputvalue2\" value=\"{{inputvalue.name}}\">{{inputvalue.name}} </option>\n</select>\n<div *ngIf=\"editactive\" [hidden]=\"editfrom\">\n\t<input [(ngModel)]=\"editactive.name\"> \n\t<button (click)=\"save()\">ok</button>\n</div>\n<input [(ngModel)]=\"addten\" [hidden] = \"anfromaddten\" class=\"txtaddten\" > \n\n<button (click)=\"themten()\">{{textvaluethem}}</button>\n<ul class=\"Listname\">\n  <li *ngFor=\"let inputvalue of inpputvalue2\" >\n  \t<div *ngIf=\"filter=='xemtatca' || filter == inputvalue.name\">\n    <span  class=\"badge\">{{inputvalue.name}}</span> \n    <button (click)='xoaten(inputvalue.name)'>Xóa</button> <br>\n    <button (click)='editten(inputvalue)'>edit</button>\n</div>\n </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/test1/test1.component.ts":
/*!******************************************!*\
  !*** ./src/app/test1/test1.component.ts ***!
  \******************************************/
/*! exports provided: Test1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test1Component", function() { return Test1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_listname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/listname */ "./src/app/model/listname.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*declare var jquery:any;
declare var $ :any;*/
var Test1Component = /** @class */ (function () {
    function Test1Component() {
        this.title2 = "chào mừng tất cả";
        this.anhien = false;
        this.addten = '';
        this.anfromaddten = true;
        this.filter = "xemtatca";
        this.editactive = {
            id: 0,
            name: ""
        };
        this.editfrom = true;
        this.textvaluethem = 'Click để hiện from';
        this.inputvalue = {
            id: 0,
            name: ""
        };
        this.inpputvalue2 = _model_listname__WEBPACK_IMPORTED_MODULE_1__["Listname"];
    }
    Test1Component.prototype.anhienfunction = function () {
        this.anhien = !this.anhien;
    };
    Test1Component.prototype.themten = function () {
        if (this.textvaluethem == "update") {
            alert("ok");
        }
        else {
            if (this.anfromaddten == false) {
                if (this.addten == "") {
                    alert("Mời bạn nhập tên cần thêm");
                    return false;
                }
                this.inpputvalue2.push({
                    id: this.inpputvalue2.length + 1,
                    name: this.addten
                });
                this.textvaluethem = 'Click để hiện from';
                this.addten = '';
            }
            else {
                this.textvaluethem = 'Thêm Tên';
            }
            this.anfromaddten = !this.anfromaddten;
        }
    };
    Test1Component.prototype.xoaten = function (name) {
        var index = this.inpputvalue2.findIndex(function (e) { return e.name === name; });
        this.inpputvalue2.splice(index, 1);
    };
    Test1Component.prototype.editten = function (inputvalue) {
        this.editactive = inputvalue;
        this.editfrom = false;
    };
    Test1Component.prototype.save = function () {
        this.editfrom = true;
    };
    Test1Component.prototype.ngOnInit = function () {
    };
    Test1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test1',
            template: __webpack_require__(/*! ./test1.component.html */ "./src/app/test1/test1.component.html"),
            styles: [__webpack_require__(/*! ./test1.component.css */ "./src/app/test1/test1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Test1Component);
    return Test1Component;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Administrator\Desktop\angular-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
