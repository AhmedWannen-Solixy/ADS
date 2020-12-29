(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-languages-languages-module"],{

/***/ "+8HC":
/*!*****************************************************!*\
  !*** ./src/app/pages/languages/languages.module.ts ***!
  \*****************************************************/
/*! exports provided: LanguagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesPageModule", function() { return LanguagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _languages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./languages-routing.module */ "l3ba");
/* harmony import */ var _languages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./languages.page */ "rO+y");







let LanguagesPageModule = class LanguagesPageModule {
};
LanguagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _languages_routing_module__WEBPACK_IMPORTED_MODULE_5__["LanguagesPageRoutingModule"]
        ],
        declarations: [_languages_page__WEBPACK_IMPORTED_MODULE_6__["LanguagesPage"]]
    })
], LanguagesPageModule);



/***/ }),

/***/ "Mfxn":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/languages/languages.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content scrollY=\"false\" [fullscreen]=\"true\">\n  <div class=\"logo\">\n    <img src=\"assets/img/icon-home.png\" alt=\"\" />\n  </div>\n  <div class=\"container\">\n    <ion-card>\n      <ion-card-header>\n        <div class=\"title-container\" routerLink=\"/home\">\n          <div class=\"icon-container\">\n            <ion-icon name=\"home-outline\" color=\"primary\"></ion-icon>\n          </div>\n          <div class=\"choose\"><span>CHOOSE</span></div>\n        </div>\n      </ion-card-header>\n\n\n      <ion-card-content>\n        <div class=\"card-content\">\n\n\n          <div class=\"flag\" (click)=\"pickFlag('fr')\">\n            <img  class=\"flag-img\" src=\"assets/flags/france.svg\" />\n          </div>\n          <div class=\"flag\" (click)=\"pickFlag('en')\">\n            <img class=\"flag-img\" src=\"assets/flags/262-united-kingdom.svg\" />\n          </div>\n\n          <div class=\"flag\" (click)=\"pickFlag('gr')\">\n            <img class=\"flag-img\" src=\"assets/flags/066-germany.svg\" />\n          </div>\n          <div class=\"flag\" (click)=\"pickFlag('sp')\">\n            <img class=\"flag-img\" src=\"assets/flags/044-spain.svg\" />\n          </div>\n\n          <div class=\"flag\" (click)=\"pickFlag('lit')\">\n            <img  class=\"flag-img\"src=\"assets/flags/025-lithuania.svg\" />\n          </div>\n\n          <div class=\"flag\" (click)=\"pickFlag('hun')\">\n            <img class=\"flag-img\" src=\"assets/flags/053-hungary.svg\" />\n          </div>\n\n          <div class=\"flag\" (click)=\"pickFlag('pol')\">\n            <img class=\"flag-img\" src=\"assets/flags/108-poland.svg\" />\n          </div>\n          <div class=\"flag\" (click)=\"pickFlag('rom')\">\n            <img class=\"flag-img\" src=\"assets/flags/050-romania.svg\" />\n          </div>\n\n          <div class=\"flag\" (click)=\"pickFlag('cz')\">\n            <img class=\"flag-img\" src=\"assets/flags/061-czech-republic.svg\" />\n          </div>\n\n          <div class=\"flag\" (click)=\"pickFlag('bul')\">\n            <img class=\"flag-img\" src=\"assets/flags/135-bulgaria.svg\" />\n          </div>\n\n          <div class=\"flag\" (click)=\"pickFlag('tr')\">\n            <img class=\"flag-img\" src=\"assets/flags/119-turkey.svg\" />\n          </div>\n\n          <div class=\"flag\" (click)=\"pickFlag('rs')\">\n            <img class=\"flag-img\" src=\"assets/flags/228-russia.svg\" />\n          </div>\n\n          <div class=\"flag\" (click)=\"pickFlag('it')\">\n            <img  class=\"flag-img\" src=\"assets/flags/011-italy.svg\" />\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div class=\"copy-rght\"></div>\n  <div class=\"custom-footer\">\n    <p>CopyRight: SPED-Boulogne Calais -Version 2019.12-17</p>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "gl0j":
/*!*****************************************************!*\
  !*** ./src/app/pages/languages/languages.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\n  position: absolute;\n  width: 80%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  height: 60%;\n}\n\n.crd-header {\n  padding-bottom: 1px;\n}\n\n.logo {\n  background: #fff;\n  width: 70%;\n  margin: 0 auto;\n  border-bottom-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n  text-align: center;\n}\n\n.title-container {\n  padding: 3%;\n  display: flex;\n  border-bottom: 1px solid #007871;\n}\n\n.icon-container {\n  padding: 3%;\n  background: #cce4e2;\n  border-radius: 6px;\n}\n\n.icon-container ion-icon {\n  height: 30px;\n  width: 30px;\n}\n\n.choose {\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  color: var(--ion-color-primary);\n  font-family: Futurabook !important;\n  font-size: 16px;\n}\n\n.custom-footer {\n  color: #fff;\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  top: 94%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 12px;\n}\n\n.card-content {\n  height: 50vh;\n  overflow-y: scroll;\n}\n\n.flag {\n  padding-left: 10%;\n  padding-right: 10%;\n  width: 50%;\n  float: left;\n}\n\n.flag-img {\n  border: 1px solid rgba(221, 221, 221, 0.884);\n  border-radius: 4px;\n  padding-right: 2px;\n  padding-left: 1px;\n}\n\n/* Solid border */\n\nhr.solid {\n  border-top: 1px solid #007871;\n  margin-left: 8px;\n  margin-right: 8px;\n}\n\n.btn {\n  position: absolute;\n  top: 39%;\n  right: 61px;\n  width: 47px;\n  color: cadetblue;\n  transform: translateY(-50%);\n  background-color: #cce4e2;\n}\n\n.icon {\n  position: absolute;\n}\n\n@media only screen and (min-width: 1500px) {\n  .logo {\n    width: 15vw;\n  }\n\n  .title-container {\n    padding: 1%;\n    font-size: 30px;\n  }\n\n  .choose,\n.custom-footer,\nb {\n    font-size: 30px;\n  }\n\n  .flag {\n    padding: 1%;\n    width: 22vh;\n    float: left;\n  }\n\n  .icon-container {\n    padding: 1%;\n  }\n  .icon-container ion-icon {\n    width: 60px;\n    height: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xhbmd1YWdlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFIRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBS0o7O0FBRkE7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtBQUtGOztBQUhBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFNRjs7QUFIQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQU1GOztBQUhBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBTUY7O0FBSEE7RUFDRSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQU1GOztBQUhBLGlCQUFBOztBQUNBO0VBQ0UsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBTUY7O0FBSEE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQU1GOztBQUhBO0VBQ0Usa0JBQUE7QUFNRjs7QUFIQTtFQUNFO0lBQ0UsV0FBQTtFQU1GOztFQUpBO0lBQ0UsV0FBQTtJQUNBLGVBQUE7RUFPRjs7RUFMQTs7O0lBR0UsZUFBQTtFQVFGOztFQUxBO0lBQ0UsV0FBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0VBUUY7O0VBTkE7SUFDRSxXQUFBO0VBU0Y7RUFSRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VBVUo7QUFDRiIsImZpbGUiOiJsYW5ndWFnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDgwJTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MCU7XG59XG4uY3JkLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XG59XG5cbi5sb2dvIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE2cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGl0bGUtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMyU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDA3ODcxO1xufVxuLmljb24tY29udGFpbmVyIHtcbiAgcGFkZGluZzogMyU7XG4gIGJhY2tncm91bmQ6ICNjY2U0ZTI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgaW9uLWljb24ge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgfVxufVxuLmNob29zZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1mYW1pbHk6RnV0dXJhYm9vayAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uY3VzdG9tLWZvb3RlciB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogOTQlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jYXJkLWNvbnRlbnQge1xuICBoZWlnaHQ6IDUwdmg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmZsYWcge1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgcGFkZGluZy1yaWdodDogMTAlO1xuICB3aWR0aDogNTAlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmZsYWctaW1nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjEsIDIyMSwgMjIxLCAwLjg4NCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDFweDtcbn1cblxuLyogU29saWQgYm9yZGVyICovXG5oci5zb2xpZCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDA3ODcxO1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzOSU7XG4gIHJpZ2h0OiA2MXB4O1xuICB3aWR0aDogNDdweDtcbiAgY29sb3I6IGNhZGV0Ymx1ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NlNGUyO1xufVxuXG4uaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTAwcHgpIHtcbiAgLmxvZ28ge1xuICAgIHdpZHRoOiAxNXZ3O1xuICB9XG4gIC50aXRsZS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDElO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuICAuY2hvb3NlLFxuICAuY3VzdG9tLWZvb3RlcixcbiAgYiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIFxuICB9XG4gIC5mbGFnIHtcbiAgICBwYWRkaW5nOiAxJTtcbiAgICB3aWR0aDogMjJ2aDtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICAuaWNvbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDElO1xuICAgIGlvbi1pY29ue1xuICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "l3ba":
/*!*************************************************************!*\
  !*** ./src/app/pages/languages/languages-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: LanguagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesPageRoutingModule", function() { return LanguagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _languages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./languages.page */ "rO+y");




const routes = [
    {
        path: '',
        component: _languages_page__WEBPACK_IMPORTED_MODULE_3__["LanguagesPage"]
    }
];
let LanguagesPageRoutingModule = class LanguagesPageRoutingModule {
};
LanguagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LanguagesPageRoutingModule);



/***/ }),

/***/ "rO+y":
/*!***************************************************!*\
  !*** ./src/app/pages/languages/languages.page.ts ***!
  \***************************************************/
/*! exports provided: LanguagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesPage", function() { return LanguagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_languages_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./languages.page.html */ "Mfxn");
/* harmony import */ var _languages_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./languages.page.scss */ "gl0j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");






let LanguagesPage = class LanguagesPage {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
    }
    ngOnInit() { }
    pickFlag(flag) {
        this.translate.setDefaultLang(flag);
        localStorage.setItem("lng", flag);
        this.router.navigateByUrl("/directions");
    }
};
LanguagesPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LanguagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-languages",
        template: _raw_loader_languages_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_languages_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LanguagesPage);



/***/ })

}]);
//# sourceMappingURL=pages-languages-languages-module-es2015.js.map