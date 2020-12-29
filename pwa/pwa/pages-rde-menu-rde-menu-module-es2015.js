(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rde-menu-rde-menu-module"],{

/***/ "2Fvl":
/*!***************************************************!*\
  !*** ./src/app/pages/rde-menu/rde-menu.module.ts ***!
  \***************************************************/
/*! exports provided: RdeMenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RdeMenuPageModule", function() { return RdeMenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _rde_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rde-menu-routing.module */ "yvDa");
/* harmony import */ var _rde_menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rde-menu.page */ "Pq7a");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








let RdeMenuPageModule = class RdeMenuPageModule {
};
RdeMenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _rde_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["RdeMenuPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_rde_menu_page__WEBPACK_IMPORTED_MODULE_6__["RdeMenuPage"]]
    })
], RdeMenuPageModule);



/***/ }),

/***/ "Pq7a":
/*!*************************************************!*\
  !*** ./src/app/pages/rde-menu/rde-menu.page.ts ***!
  \*************************************************/
/*! exports provided: RdeMenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RdeMenuPage", function() { return RdeMenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_rde_menu_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./rde-menu.page.html */ "jHeG");
/* harmony import */ var _rde_menu_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rde-menu.page.scss */ "mkqu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");





let RdeMenuPage = class RdeMenuPage {
    constructor(translate) {
        this.translate = translate;
    }
    ngOnInit() {
    }
};
RdeMenuPage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
RdeMenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-rde-menu',
        template: _raw_loader_rde_menu_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_rde_menu_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RdeMenuPage);



/***/ }),

/***/ "jHeG":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rde-menu/rde-menu.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"logo\">\n    <img src=\"assets/img/icon-home.png\" alt=\"\">\n  </div>\n  <div class=\"container\">\n    <ion-card>\n      <ion-card-header>\n        <div class=\"title-container\" routerLink=\"/home\">\n          <div class=\"icon-container\">\n            <ion-icon name=\"home-outline\" color=\"primary\"></ion-icon>\n          </div>\n          <div class=\"choose\"><span>CHOOSE</span></div>\n        </div>\n\n      </ion-card-header>\n      <ion-card-content>\n        \n        <div class=\"card-content\">\n\n        <div class=\"img-container\">\n          <img src=\"assets/img/save-me.png\" alt=\"\">\n          <div>\n            <p><b style=\"font-family:Futurabold !important;\">{{'create' | translate}}</b></p>\n          </div>\n        </div>\n        \n        <a href=\"https://customs.calais-port.fr/outil/\" style=\"text-decoration:none;\"> \n                      <div class=\"img-container\">\n          <img src=\"assets/img/flow.png\" alt=\"\">\n          <div>\n            <p><b style=\"font-family:Futurabold !important;\">{{'organize' | translate}}</b></p>\n          </div>\n        </div>\n      </a> \n        <div class=\"img-container\">\n          <img src=\"assets/img/badge.png\" alt=\"\">\n          <div>\n            <p><b style=\"font-family:Futurabold !important;\">{{'badge' | translate}}</b></p>\n          </div>\n        </div>\n      <a href=\"https://moa.douane.gouv.fr/enveloppe/en/enveloppe\" style=\"text-decoration:none;\">\n        <div class=\"img-container\">\n          <img src=\"assets/img/doc.png\" alt=\"\">\n          <div>\n            <p><b style=\"font-family:Futurabold !important;\">{{'envelop' | translate}}</b></p>\n          </div>\n        </div>\n      </a>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div class=\"custom-footer\">\n\n    <p>\n      CopyRight: SPED-Boulogne Calais -Version 2019.12-17\n    </p>\n  </div>\n</ion-content>");

/***/ }),

/***/ "mkqu":
/*!***************************************************!*\
  !*** ./src/app/pages/rde-menu/rde-menu.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo {\n  background: #fff;\n  width: 70%;\n  margin: 0 auto;\n  border-bottom-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n  text-align: center;\n}\n\n.container {\n  position: absolute;\n  width: 80%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.icon-container {\n  padding: 3%;\n  background: #cce4e2;\n  border-radius: 6px;\n}\n\n.icon-container ion-icon {\n  height: 30px;\n  width: 30px;\n}\n\n.choose {\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  color: var(--ion-color-primary);\n  font-family: Futurabook !important;\n  font-size: 16px;\n}\n\n.title-container {\n  padding: 2%;\n  display: flex;\n  border-bottom: 1px solid #007871;\n}\n\n.img-container {\n  color: #007871;\n  text-align: center;\n  background: #cce4e2;\n  margin: 4% 0;\n  display: flex;\n}\n\n.img-container div {\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.custom-footer {\n  color: #fff;\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  top: 94%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 12px;\n}\n\n.card-content {\n  height: 50vh;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JkZS1tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFESTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBR1I7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUhFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBTUoiLCJmaWxlIjoicmRlLW1lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNnB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogODAlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29uLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMyU7XG4gICAgYmFja2dyb3VuZDogI2NjZTRlMjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgIH1cbn1cbi5jaG9vc2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGZvbnQtZmFtaWx5OkZ1dHVyYWJvb2sgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi50aXRsZS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDc4NzE7XG59XG4uaW1nLWNvbnRhaW5lciB7XG4gICAgY29sb3I6ICMwMDc4NzE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNjY2U0ZTI7XG4gICAgbWFyZ2luOiA0JSAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uaW1nLWNvbnRhaW5lciBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5jdXN0b20tZm9vdGVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogOTQlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAuY2FyZC1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9XG4gICJdfQ== */");

/***/ }),

/***/ "yvDa":
/*!***********************************************************!*\
  !*** ./src/app/pages/rde-menu/rde-menu-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RdeMenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RdeMenuPageRoutingModule", function() { return RdeMenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _rde_menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rde-menu.page */ "Pq7a");




const routes = [
    {
        path: '',
        component: _rde_menu_page__WEBPACK_IMPORTED_MODULE_3__["RdeMenuPage"]
    }
];
let RdeMenuPageRoutingModule = class RdeMenuPageRoutingModule {
};
RdeMenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RdeMenuPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-rde-menu-rde-menu-module-es2015.js.map