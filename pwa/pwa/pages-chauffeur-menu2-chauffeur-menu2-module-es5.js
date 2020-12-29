(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chauffeur-menu2-chauffeur-menu2-module"], {
    /***/
    "LecY":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/chauffeur-menu2/chauffeur-menu2.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ChauffeurMenu2PageModule */

    /***/
    function LecY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChauffeurMenu2PageModule", function () {
        return ChauffeurMenu2PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _chauffeur_menu2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chauffeur-menu2-routing.module */
      "h9Xn");
      /* harmony import */


      var _chauffeur_menu2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./chauffeur-menu2.page */
      "NzWo");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var ChauffeurMenu2PageModule = function ChauffeurMenu2PageModule() {
        _classCallCheck(this, ChauffeurMenu2PageModule);
      };

      ChauffeurMenu2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _chauffeur_menu2_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChauffeurMenu2PageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
        declarations: [_chauffeur_menu2_page__WEBPACK_IMPORTED_MODULE_6__["ChauffeurMenu2Page"]]
      })], ChauffeurMenu2PageModule);
      /***/
    },

    /***/
    "NzWo":
    /*!***************************************************************!*\
      !*** ./src/app/pages/chauffeur-menu2/chauffeur-menu2.page.ts ***!
      \***************************************************************/

    /*! exports provided: ChauffeurMenu2Page */

    /***/
    function NzWo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChauffeurMenu2Page", function () {
        return ChauffeurMenu2Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chauffeur_menu2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chauffeur-menu2.page.html */
      "nBdo");
      /* harmony import */


      var _chauffeur_menu2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chauffeur-menu2.page.scss */
      "RRDe");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var ChauffeurMenu2Page = /*#__PURE__*/function () {
        function ChauffeurMenu2Page(translate) {
          _classCallCheck(this, ChauffeurMenu2Page);

          this.translate = translate;
        }

        _createClass(ChauffeurMenu2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ChauffeurMenu2Page;
      }();

      ChauffeurMenu2Page.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }];
      };

      ChauffeurMenu2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chauffeur-menu2',
        template: _raw_loader_chauffeur_menu2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chauffeur_menu2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ChauffeurMenu2Page);
      /***/
    },

    /***/
    "RRDe":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/chauffeur-menu2/chauffeur-menu2.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function RRDe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".logo {\n  background: #fff;\n  width: 70%;\n  margin: 0 auto;\n  border-bottom-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n  text-align: center;\n}\n\n.container {\n  position: absolute;\n  width: 80%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.icon-container {\n  padding: 3%;\n  background: #cce4e2;\n  border-radius: 6px;\n}\n\n.icon-container ion-icon {\n  height: 30px;\n  width: 30px;\n}\n\n.choose {\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  color: var(--ion-color-primary);\n  font-family: Futurabook !important;\n  font-size: 16px;\n}\n\n.title-container {\n  padding: 2%;\n  display: flex;\n  border-bottom: 1px solid #007871;\n}\n\n.img-container {\n  color: #007871;\n  text-align: center;\n  background: #cce4e2;\n  margin: 4% 0;\n  display: flex;\n}\n\n.img-container div {\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.custom-footer {\n  color: #fff;\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  top: 94%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 12px;\n}\n\n@media only screen and (min-width: 1500px) {\n  .logo {\n    width: 15vw;\n  }\n\n  .choose {\n    font-size: 30px;\n    font-family: Futurabook !important;\n  }\n\n  b {\n    font-size: 20px;\n  }\n\n  .icon-container {\n    padding: 1%;\n  }\n\n  ion-icon {\n    width: 60px;\n    height: 60px;\n  }\n\n  .custom-footer {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoYXVmZmV1ci1tZW51Mi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBREk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUdSOztBQUFBO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7QUFHSjs7QUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7QUFHSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFJSjs7QUFGQTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFNSjs7QUFGRTtFQUNFO0lBQ0UsV0FBQTtFQUtKOztFQUhFO0lBQ0ksZUFBQTtJQUNBLGtDQUFBO0VBTU47O0VBSEU7SUFDSSxlQUFBO0VBTU47O0VBSkU7SUFDSSxXQUFBO0VBT047O0VBTEU7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQVFOOztFQU5FO0lBQ0ksZUFBQTtFQVNOO0FBQ0YiLCJmaWxlIjoiY2hhdWZmZXVyLW1lbnUyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTZweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDgwJTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDMlO1xuICAgIGJhY2tncm91bmQ6ICNjY2U0ZTI7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICB9XG59XG4uY2hvb3NlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LWZhbWlseTpGdXR1cmFib29rICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udGl0bGUtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDA3ODcxO1xufVxuLmltZy1jb250YWluZXIge1xuICAgIGNvbG9yOiAjMDA3ODcxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjY2NlNGUyO1xuICAgIG1hcmdpbjogNCUgMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmltZy1jb250YWluZXIgZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uY3VzdG9tLWZvb3RlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDk0JTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIFxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTUwMHB4KSB7XG4gICAgLmxvZ28ge1xuICAgICAgd2lkdGg6IDE1dnc7XG4gICAgfVxuICAgIC5jaG9vc2Uge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OkZ1dHVyYWJvb2sgIWltcG9ydGFudDtcblxuICAgIH1cbiAgICBiIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAuaWNvbi1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAxJTtcbiAgICAgIH1cbiAgICBpb24taWNvbiB7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgfVxuICAgIC5jdXN0b20tZm9vdGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "h9Xn":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/chauffeur-menu2/chauffeur-menu2-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ChauffeurMenu2PageRoutingModule */

    /***/
    function h9Xn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChauffeurMenu2PageRoutingModule", function () {
        return ChauffeurMenu2PageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _chauffeur_menu2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chauffeur-menu2.page */
      "NzWo");

      var routes = [{
        path: '',
        component: _chauffeur_menu2_page__WEBPACK_IMPORTED_MODULE_3__["ChauffeurMenu2Page"]
      }];

      var ChauffeurMenu2PageRoutingModule = function ChauffeurMenu2PageRoutingModule() {
        _classCallCheck(this, ChauffeurMenu2PageRoutingModule);
      };

      ChauffeurMenu2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChauffeurMenu2PageRoutingModule);
      /***/
    },

    /***/
    "nBdo":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chauffeur-menu2/chauffeur-menu2.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nBdo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div class=\"logo\">\n    <img src=\"assets/img/icon-home.png\" alt=\"\">\n  </div>\n  <div class=\"container\">\n    <ion-card>\n      <ion-card-header>\n        <div class=\"title-container\" routerLink=\"/home\">\n          <div class=\"icon-container\">\n            <ion-icon name=\"home-outline\" color=\"primary\"></ion-icon>\n          </div>\n          <div class=\"choose\"><span>CHOOSE</span></div>\n        </div>\n\n      </ion-card-header>\n      <ion-card-content>\n        <div  class=\"img-container\">\n          <img src=\"assets/img/raport.png\" alt=\"\">\n          <div>\n            <p><b style=\"font-family:Futurabold !important;\">{{'formulaire' | translate}}</b></p>\n          </div>\n        </div>\n\n      <a href=\"https://moa.douane.gouv.fr/enveloppe/en/enveloppe\" style=\"text-decoration:none;\">\n        <div class=\"img-container\">\n          <img src=\"assets/img/doc.png\" alt=\"\">\n          <div>\n            <p><b style=\"font-family:Futurabold !important;\">{{'envelop' | translate}}</b></p>\n          </div>\n        </div>\n      </a>\n    \n      </ion-card-content>\n    </ion-card>\n  </div>\n  <div class=\"custom-footer\">\n\n    <p>\n      CopyRight: SPED-Boulogne Calais -Version 2019.12-17\n    </p>\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-chauffeur-menu2-chauffeur-menu2-module-es5.js.map