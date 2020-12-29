(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chauffeur-menu-chauffeur-menu-module"],{

/***/ "9HO1":
/*!***********************************************************************!*\
  !*** ./src/app/pages/chauffeur-menu/chauffeur-menu-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ChauffeurMenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChauffeurMenuPageRoutingModule", function() { return ChauffeurMenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chauffeur_menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chauffeur-menu.page */ "dmMP");




const routes = [
    {
        path: '',
        component: _chauffeur_menu_page__WEBPACK_IMPORTED_MODULE_3__["ChauffeurMenuPage"]
    }
];
let ChauffeurMenuPageRoutingModule = class ChauffeurMenuPageRoutingModule {
};
ChauffeurMenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChauffeurMenuPageRoutingModule);



/***/ }),

/***/ "JlO6":
/*!***************************************************************!*\
  !*** ./src/app/pages/chauffeur-menu/chauffeur-menu.module.ts ***!
  \***************************************************************/
/*! exports provided: ChauffeurMenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChauffeurMenuPageModule", function() { return ChauffeurMenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _chauffeur_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chauffeur-menu-routing.module */ "9HO1");
/* harmony import */ var _chauffeur_menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chauffeur-menu.page */ "dmMP");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








let ChauffeurMenuPageModule = class ChauffeurMenuPageModule {
};
ChauffeurMenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _chauffeur_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChauffeurMenuPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_chauffeur_menu_page__WEBPACK_IMPORTED_MODULE_6__["ChauffeurMenuPage"]]
    })
], ChauffeurMenuPageModule);



/***/ }),

/***/ "dmMP":
/*!*************************************************************!*\
  !*** ./src/app/pages/chauffeur-menu/chauffeur-menu.page.ts ***!
  \*************************************************************/
/*! exports provided: ChauffeurMenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChauffeurMenuPage", function() { return ChauffeurMenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chauffeur_menu_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chauffeur-menu.page.html */ "nna+");
/* harmony import */ var _chauffeur_menu_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chauffeur-menu.page.scss */ "hpQU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





let ChauffeurMenuPage = class ChauffeurMenuPage {
    constructor(translate) {
        this.translate = translate;
    }
    ngOnInit() { }
};
ChauffeurMenuPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
ChauffeurMenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chauffeur-menu',
        template: _raw_loader_chauffeur_menu_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chauffeur_menu_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChauffeurMenuPage);



/***/ }),

/***/ "hpQU":
/*!***************************************************************!*\
  !*** ./src/app/pages/chauffeur-menu/chauffeur-menu.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  background: #fff;\n  width: 70%;\n  margin: 0 auto;\n  border-bottom-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n  text-align: center;\n}\n\n.container {\n  position: absolute;\n  width: 80%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.icon-container {\n  padding: 3%;\n  background: #cce4e2;\n  border-radius: 6px;\n}\n\n.icon-container ion-icon {\n  height: 30px;\n  width: 30px;\n}\n\n.choose {\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  color: var(--ion-color-primary);\n  font-family: Futurabook !important;\n  font-size: 16px;\n}\n\n.title-container {\n  padding: 2%;\n  display: flex;\n  border-bottom: 1px solid #007871;\n}\n\n.img-container {\n  color: #007871;\n  text-align: center;\n  background: #cce4e2;\n  margin: 4% 0;\n  display: flex;\n}\n\n.img-container div {\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.custom-footer {\n  color: #fff;\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  top: 94%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 12px;\n}\n\n@media only screen and (min-width: 1500px) {\n  .logo {\n    width: 15vw;\n  }\n\n  .browser-container {\n    display: flex;\n    width: 100%;\n    padding-bottom: 10vh;\n  }\n  .browser-container a {\n    width: 28%;\n    margin: 0 auto;\n  }\n\n  .choose {\n    font-size: 30px;\n    font-family: Futurabook !important;\n  }\n\n  b {\n    font-size: 20px;\n  }\n\n  ion-icon {\n    width: 60px;\n    height: 60px;\n  }\n\n  .custom-footer {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoYXVmZmV1ci1tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFESTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBR1I7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUhBO0VBQ0k7SUFDSSxXQUFBO0VBTU47O0VBSkU7SUFDSSxhQUFBO0lBQ0EsV0FBQTtJQUNBLG9CQUFBO0VBT047RUFMTTtJQUNJLFVBQUE7SUFDQSxjQUFBO0VBT1Y7O0VBSkU7SUFDSSxlQUFBO0lBQ0Esa0NBQUE7RUFPTjs7RUFKRTtJQUNJLGVBQUE7RUFPTjs7RUFMRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VBUU47O0VBTkU7SUFDSSxlQUFBO0VBU047QUFDRiIsImZpbGUiOiJjaGF1ZmZldXItbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE2cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmljb24tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBiYWNrZ3JvdW5kOiAjY2NlNGUyO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgfVxufVxuLmNob29zZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZm9udC1mYW1pbHk6RnV0dXJhYm9vayAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnRpdGxlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMiU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwNzg3MTtcbn1cbi5pbWctY29udGFpbmVyIHtcbiAgICBjb2xvcjogIzAwNzg3MTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2NjZTRlMjtcbiAgICBtYXJnaW46IDQlIDA7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5pbWctY29udGFpbmVyIGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmN1c3RvbS1mb290ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiA5NCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNTAwcHgpIHtcbiAgICAubG9nbyB7XG4gICAgICAgIHdpZHRoOiAxNXZ3O1xuICAgIH1cbiAgICAuYnJvd3Nlci1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwdmg7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICB3aWR0aDogMjglO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNob29zZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6RnV0dXJhYm9vayAhaW1wb3J0YW50O1xuXG4gICAgfVxuICAgIGIge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICB9XG4gICAgLmN1c3RvbS1mb290ZXIge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "nna+":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chauffeur-menu/chauffeur-menu.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"logo\">\n    <img src=\"assets/img/icon-home.png\" alt=\"\">\n  </div>\n  <div class=\"container\">\n    <ion-card>\n      <ion-card-header>\n        <div class=\"title-container\" routerLink=\"/home\">\n          <div class=\"icon-container\">\n            <ion-icon name=\"home-outline\" color=\"primary\"></ion-icon>\n          </div>\n          <div class=\"choose\"><span>CHOOSE</span></div>\n        </div>\n\n      </ion-card-header>\n      <ion-card-content>\n        <div class=\"browser-container\">\n          <a href=\"https://customs.calais-port.fr/\" style=\"text-decoration:none;\">\n            <div class=\"img-container\" >\n              <img src=\"assets/img/officer.png\" alt=\"\">\n              <div>\n                <p><b style=\"font-family:Futurabold !important;\">{{'status' | translate}}</b></p>\n              </div>\n            </div>\n          </a>\n\n          <a href=\"https://customs.calais-port.fr/o3/\" style=\"text-decoration:none;\">\n            <div class=\"img-container\">\n              <img src=\"assets/img/save-me.png\" alt=\"\">\n              <div>\n                <p><b style=\"font-family:Futurabold !important;\">{{'saveMe' | translate}}</b></p>\n              </div>\n            </div>\n          </a>\n          <a href=\"https://customs.calais-port.fr/o3/\" style=\"text-decoration:none;\">\n            <div class=\"img-container\">\n              <img src=\"assets/img/animal.png\" alt=\"\">\n              <div>\n                <p><b style=\"font-family:Futurabold !important;\">{{'transport' | translate}}</b></p>\n              </div>\n            </div>\n          </a>\n        </div>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div class=\"custom-footer\">\n\n    <p>\n      CopyRight: SPED-Boulogne Calais -Version 2019.12-17\n    </p>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-chauffeur-menu-chauffeur-menu-module-es2015.js.map