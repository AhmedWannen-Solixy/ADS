(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rde-language-rde-language-module"],{

/***/ "+fyO":
/*!*******************************************************************!*\
  !*** ./src/app/pages/rde-language/rde-language-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RdeLanguagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RdeLanguagePageRoutingModule", function() { return RdeLanguagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _rde_language_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rde-language.page */ "ifz4");




const routes = [
    {
        path: '',
        component: _rde_language_page__WEBPACK_IMPORTED_MODULE_3__["RdeLanguagePage"]
    }
];
let RdeLanguagePageRoutingModule = class RdeLanguagePageRoutingModule {
};
RdeLanguagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RdeLanguagePageRoutingModule);



/***/ }),

/***/ "ifz4":
/*!*********************************************************!*\
  !*** ./src/app/pages/rde-language/rde-language.page.ts ***!
  \*********************************************************/
/*! exports provided: RdeLanguagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RdeLanguagePage", function() { return RdeLanguagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_rde_language_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./rde-language.page.html */ "j5BW");
/* harmony import */ var _rde_language_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rde-language.page.scss */ "wK77");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






let RdeLanguagePage = class RdeLanguagePage {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
    }
    ngOnInit() {
    }
    pickFlag(flag) {
        this.translate.setDefaultLang(flag);
        localStorage.setItem("lng", flag);
        console.log(flag);
        this.router.navigateByUrl("/rde-menu");
    }
};
RdeLanguagePage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RdeLanguagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rde-language',
        template: _raw_loader_rde_language_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rde_language_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RdeLanguagePage);



/***/ }),

/***/ "j5BW":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rde-language/rde-language.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content scrollY=\"false\" [fullscreen]=\"true\">\n  <div class=\"logo\">\n    <img src=\"assets/img/icon-home.png\" alt=\"\" />\n  </div>\n  <div class=\"container\">\n    <ion-card>\n      <ion-card-header>\n        <div class=\"title-container\" routerLink=\"/home\">\n          <div class=\"icon-container\">\n            <ion-icon name=\"home-outline\" color=\"primary\"></ion-icon>\n          </div>\n          <div class=\"choose\"><span>CHOOSE</span></div>\n        </div>\n      </ion-card-header>\n\n      <ion-card-content>\n        <div class=\"card-content\">\n\n          <div class=\"flag\" (click)=\"pickFlag('fr')\">\n            <img  class=\"flag-img\" src=\"assets/flags/france.svg\" />\n          </div>\n          <div class=\"flag\" (click)=\"pickFlag('en')\">\n            <img class=\"flag-img\" src=\"assets/flags/262-united-kingdom.svg\" />\n          </div>\n\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div class=\"copy-rght\"></div>\n  <div class=\"custom-footer\">\n    <p>CopyRight: SPED-Boulogne Calais -Version 2019.12-17</p>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "u4G0":
/*!***********************************************************!*\
  !*** ./src/app/pages/rde-language/rde-language.module.ts ***!
  \***********************************************************/
/*! exports provided: RdeLanguagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RdeLanguagePageModule", function() { return RdeLanguagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _rde_language_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rde-language-routing.module */ "+fyO");
/* harmony import */ var _rde_language_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rde-language.page */ "ifz4");







let RdeLanguagePageModule = class RdeLanguagePageModule {
};
RdeLanguagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rde_language_routing_module__WEBPACK_IMPORTED_MODULE_5__["RdeLanguagePageRoutingModule"]
        ],
        declarations: [_rde_language_page__WEBPACK_IMPORTED_MODULE_6__["RdeLanguagePage"]]
    })
], RdeLanguagePageModule);



/***/ }),

/***/ "wK77":
/*!***********************************************************!*\
  !*** ./src/app/pages/rde-language/rde-language.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  position: absolute;\n  width: 80%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  height: 60%;\n}\n\n.crd-header {\n  padding-bottom: 1px;\n}\n\n.logo {\n  background: #fff;\n  width: 70%;\n  margin: 0 auto;\n  border-bottom-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n  text-align: center;\n}\n\n.title-container {\n  padding: 3%;\n  display: flex;\n  border-bottom: 1px solid #007871;\n}\n\n.icon-container {\n  padding: 3%;\n  background: #cce4e2;\n  border-radius: 6px;\n}\n\n.icon-container ion-icon {\n  height: 30px;\n  width: 30px;\n}\n\n.choose {\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  color: var(--ion-color-primary);\n  font-family: Futurabook !important;\n  font-size: 16px;\n}\n\n.custom-footer {\n  color: #fff;\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  top: 94%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 12px;\n}\n\n.card-content {\n  height: 50vh;\n  overflow-y: scroll;\n}\n\n.flag {\n  padding-left: 10%;\n  padding-right: 10%;\n  width: 50%;\n  float: left;\n}\n\n.flag-img {\n  border: 1px solid rgba(221, 221, 221, 0.884);\n  border-radius: 4px;\n  padding-right: 2px;\n  padding-left: 1px;\n}\n\n/* Solid border */\n\nhr.solid {\n  border-top: 1px solid #007871;\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.btn {\n  position: absolute;\n  top: 39%;\n  right: 61px;\n  width: 47px;\n  color: cadetblue;\n  transform: translateY(-50%);\n  background-color: #cce4e2;\n}\n\n.icon {\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JkZS1sYW5ndWFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtBQUNKOztBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQUVKOztBQUFFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFGSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBSU47O0FBREU7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFLSjs7QUFGRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUFFO0VBRUUsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBRUo7O0FBRUU7RUFDRSw0Q0FBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNOOztBQUVFLGlCQUFBOztBQUNBO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVFO0VBQ0Usa0JBQUE7QUFDSiIsImZpbGUiOiJyZGUtbGFuZ3VhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDYwJTtcbiAgXG4gIH1cbiAgLmNyZC1oZWFkZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxcHg7XG4gIH1cbiAgXG4gIC5sb2dvIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTZweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnRpdGxlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMyU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwNzg3MTtcbiAgfVxuICAuaWNvbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDMlO1xuICAgIGJhY2tncm91bmQ6ICNjY2U0ZTI7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgIH1cbiAgfVxuICAuY2hvb3NlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LWZhbWlseTpGdXR1cmFib29rICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIC5jdXN0b20tZm9vdGVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogOTQlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgXG4gIC5jYXJkLWNvbnRlbnR7XG4gICAgaGVpZ2h0OiA1MHZoO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICB9XG4gIFxuICBcbiAgXG4gIC5mbGFnIHtcbiAgXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIFxuICB9XG4gIFxuICAuZmxhZy1pbWd7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjEsIDIyMSwgMjIxLCAwLjg4NCk7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAycHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDFweDtcbiAgfVxuICBcbiAgLyogU29saWQgYm9yZGVyICovXG4gIGhyLnNvbGlkIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwNzg3MTtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICB9XG4gIFxuICAuYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzOSU7XG4gICAgcmlnaHQ6IDYxcHg7XG4gICAgd2lkdGg6IDQ3cHg7XG4gICAgY29sb3I6IGNhZGV0Ymx1ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjZTRlMjtcbiAgfVxuICBcbiAgLmljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAiXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-rde-language-rde-language-module-es2015.js.map