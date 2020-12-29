(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-directions-directions-module"],{

/***/ "/qC+":
/*!*****************************************************!*\
  !*** ./src/app/pages/directions/directions.page.ts ***!
  \*****************************************************/
/*! exports provided: DirectionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionsPage", function() { return DirectionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_directions_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./directions.page.html */ "dFnS");
/* harmony import */ var _directions_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directions.page.scss */ "VKOQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





let DirectionsPage = class DirectionsPage {
    constructor(translate) {
        this.translate = translate;
    }
    ngOnInit() {
        this.lng = localStorage.getItem('lng');
        console.log(this.lng);
    }
};
DirectionsPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
DirectionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-directions',
        template: _raw_loader_directions_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_directions_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DirectionsPage);



/***/ }),

/***/ "1JOO":
/*!*******************************************************!*\
  !*** ./src/app/pages/directions/directions.module.ts ***!
  \*******************************************************/
/*! exports provided: DirectionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionsPageModule", function() { return DirectionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _directions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directions-routing.module */ "AYrY");
/* harmony import */ var _directions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directions.page */ "/qC+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








let DirectionsPageModule = class DirectionsPageModule {
};
DirectionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _directions_routing_module__WEBPACK_IMPORTED_MODULE_5__["DirectionsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
        ],
        declarations: [_directions_page__WEBPACK_IMPORTED_MODULE_6__["DirectionsPage"]]
    })
], DirectionsPageModule);



/***/ }),

/***/ "AYrY":
/*!***************************************************************!*\
  !*** ./src/app/pages/directions/directions-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DirectionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionsPageRoutingModule", function() { return DirectionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _directions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directions.page */ "/qC+");




const routes = [
    {
        path: '',
        component: _directions_page__WEBPACK_IMPORTED_MODULE_3__["DirectionsPage"]
    }
];
let DirectionsPageRoutingModule = class DirectionsPageRoutingModule {
};
DirectionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DirectionsPageRoutingModule);



/***/ }),

/***/ "VKOQ":
/*!*******************************************************!*\
  !*** ./src/app/pages/directions/directions.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  background: #fff;\n  width: 70%;\n  margin: 0 auto;\n  border-bottom-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n  text-align: center;\n}\n\n.container {\n  position: absolute;\n  width: 80%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.img-container {\n  color: #007871;\n  text-align: center;\n  background: #cce4e2;\n  margin: 10% 0;\n  padding: 3%;\n}\n\n.icon-container {\n  padding: 3%;\n  background: #cce4e2;\n  border-radius: 6px;\n}\n\n.icon-container ion-icon {\n  height: 30px;\n  width: 30px;\n}\n\n.choose {\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  color: var(--ion-color-primary);\n  font-size: 16px;\n  font-family: Futurabook !important;\n}\n\n.title-container {\n  padding: 3%;\n  display: flex;\n  border-bottom: 1px solid #007871;\n}\n\n.custom-footer {\n  color: #fff;\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  top: 94%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 12px;\n}\n\n@media only screen and (min-width: 1500px) {\n  .logo {\n    width: 15vw;\n  }\n\n  .title-container {\n    padding: 1%;\n    font-size: 30px;\n  }\n\n  .custom-footer {\n    font-size: 20px;\n  }\n\n  .choose, b {\n    font-size: 30px;\n    font-family: Futurabook !important;\n  }\n\n  .img-container img {\n    width: 10vw;\n  }\n\n  .container {\n    width: 28vw;\n  }\n\n  .icon-container {\n    padding: 1%;\n  }\n\n  ion-icon {\n    width: 60px;\n    height: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RpcmVjdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUdGOztBQUZFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFJSjs7QUFEQTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0FBSUY7O0FBREE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FBSUY7O0FBREE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUlGOztBQURBO0VBQ0U7SUFDRSxXQUFBO0VBSUY7O0VBRkE7SUFDRSxXQUFBO0lBQ0EsZUFBQTtFQUtGOztFQUhBO0lBQ0UsZUFBQTtFQU1GOztFQUpBO0lBQ0UsZUFBQTtJQUNBLGtDQUFBO0VBT0Y7O0VBSkE7SUFDRSxXQUFBO0VBT0Y7O0VBTEE7SUFDRSxXQUFBO0VBUUY7O0VBTkE7SUFDRSxXQUFBO0VBU0Y7O0VBUEE7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQVVGO0FBQ0YiLCJmaWxlIjoiZGlyZWN0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDgwJTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbWctY29udGFpbmVyIHtcbiAgY29sb3I6ICMwMDc4NzE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2NjZTRlMjtcbiAgbWFyZ2luOiAxMCUgMDtcbiAgcGFkZGluZzogMyU7XG59XG5cbi5pY29uLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDMlO1xuICBiYWNrZ3JvdW5kOiAjY2NlNGUyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGlvbi1pY29uIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gIH1cbn1cbi5jaG9vc2Uge1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6RnV0dXJhYm9vayAhaW1wb3J0YW50O1xufVxuXG4udGl0bGUtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMyU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDA3ODcxO1xufVxuXG4uY3VzdG9tLWZvb3RlciB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogOTQlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTUwMHB4KSB7XG4gIC5sb2dvIHtcbiAgICB3aWR0aDogMTV2dztcbiAgfVxuICAudGl0bGUtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxJTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbiAgLmN1c3RvbS1mb290ZXIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbiAgLmNob29zZSwgIGIge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LWZhbWlseTpGdXR1cmFib29rICFpbXBvcnRhbnQ7XG5cbiAgfVxuICAuaW1nLWNvbnRhaW5lciBpbWcge1xuICAgIHdpZHRoOiAxMHZ3O1xuICB9XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAyOHZ3O1xuICB9XG4gIC5pY29uLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMSU7XG4gIH1cbiAgaW9uLWljb24ge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "dFnS":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/directions/directions.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"logo\">\n    <img src=\"assets/img/icon-home.png\" alt=\"\">\n  </div>\n  <div class=\"container\">\n    <ion-card>\n      <ion-card-header>\n        <div class=\"title-container\" routerLink=\"/home\">\n          <div class=\"icon-container\">\n            <ion-icon name=\"home-outline\" color=\"primary\"></ion-icon>\n          </div>\n          <div class=\"choose\"><span>CHOOSE</span></div>\n        </div>\n\n      </ion-card-header>\n      <ion-card-content>\n\n\n        <div class=\"img-container\" routerLink=\"/chauffeur-menu2\">\n          <ion-row>\n            <ion-col size=\"4\"><img src=\"assets/flags/eu.png\" alt=\"\"></ion-col>\n            <ion-col size=\"4\"></ion-col>\n            <ion-col size=\"4\"><img src=\"assets/flags/en.jpg\" alt=\"\"></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col><b style=\"font-family:Futurabold !important;\">CALAIS</b></ion-col>\n            <ion-col>\n              <ion-icon name=\"arrow-forward-outline\" color=\"primary\"></ion-icon>\n            </ion-col>\n            <ion-col><b style=\"font-family:Futurabold !important;\">DOVER</b></ion-col>\n          </ion-row>\n\n\n        </div>\n        <div class=\"img-container\" routerLink=\"/chauffeur-menu\">\n          <ion-row>\n            <ion-col><img src=\"assets/flags/en.jpg\" alt=\"\"></ion-col>\n            <ion-col></ion-col>\n            <ion-col><img src=\"assets/flags/eu.png\" alt=\"\"></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col><b style=\"font-family:Futurabold !important;\">DOVER</b></ion-col>\n            <ion-col>\n              <ion-icon name=\"arrow-forward-outline\" color=\"primary\"></ion-icon>\n            </ion-col>\n            <ion-col><b style=\"font-family:Futurabold !important;\">CALAIS</b></ion-col>\n          </ion-row>\n        </div>\n      </ion-card-content>\n\n    </ion-card>\n  </div>\n  <div class=\"custom-footer\">\n\n    <p>\n      CopyRight: SPED-Boulogne Calais -Version 2019.12-17\n    </p>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-directions-directions-module-es2015.js.map