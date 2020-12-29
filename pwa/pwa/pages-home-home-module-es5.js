(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
    /***/
    "/rnz":
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function rnz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".container {\n  position: absolute;\n  width: 80%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n\n.logo {\n  background: #fff;\n  width: 70%;\n  margin: 0 auto;\n  border-bottom-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n  text-align: center;\n}\n\n.custom-footer {\n  color: #fff;\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  top: 94%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 12px;\n}\n\n.img-container {\n  color: #007871;\n  text-align: center;\n  background: #cce4e2;\n  margin: 10% 0;\n  padding: 3%;\n}\n\n.list-img {\n  width: 40%;\n  height: 40%;\n  filter: invert(34%) sepia(58%) saturate(464%) hue-rotate(119deg) brightness(107%) contrast(136%);\n}\n\n.list-img2 {\n  width: 40%;\n  height: 40%;\n  filter: invert(3%) sepia(124%) saturate(398%) hue-rotate(119deg) brightness(87%) contrast(88%);\n}\n\nspan {\n  color: var(--ion-color-primary);\n}\n\n.title {\n  padding-top: 2%;\n  border-top: 1px solid #007871;\n}\n\n@media only screen and (min-width: 1500px) {\n  .logo {\n    width: 15vw;\n  }\n\n  .ipad-container {\n    display: flex;\n    padding-bottom: 6vh;\n  }\n\n  .img-container {\n    width: 40%;\n    margin: 0 auto;\n  }\n\n  .container {\n    width: 50vw;\n  }\n\n  .custom-footer {\n    font-size: 20px;\n  }\n\n  .title,\nb {\n    font-size: 30px;\n  }\n\n  .list-img {\n    width: 9vw;\n    height: 4vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUdGOztBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUdGOztBQURBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFFQSxnR0FBQTtBQUdGOztBQURBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFFQSw4RkFBQTtBQUdGOztBQURBO0VBQ0UsK0JBQUE7QUFJRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtBQUlGOztBQUNBO0VBQ0U7SUFDRSxXQUFBO0VBRUY7O0VBQUE7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7RUFHRjs7RUFEQTtJQUNFLFVBQUE7SUFDQSxjQUFBO0VBSUY7O0VBRkE7SUFDRSxXQUFBO0VBS0Y7O0VBSEE7SUFDRSxlQUFBO0VBTUY7O0VBSkE7O0lBRUUsZUFBQTtFQU9GOztFQUxBO0lBQ0UsVUFBQTtJQUNBLFdBQUE7RUFRRjtBQUNGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDgwJTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2dvIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE2cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY3VzdG9tLWZvb3RlciB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogOTQlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5pbWctY29udGFpbmVyIHtcbiAgY29sb3I6ICMwMDc4NzE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2NjZTRlMjtcbiAgbWFyZ2luOiAxMCUgMDtcbiAgcGFkZGluZzogMyU7XG59XG4ubGlzdC1pbWcge1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDQwJTtcblxuICBmaWx0ZXI6IGludmVydCgzNCUpIHNlcGlhKDU4JSkgc2F0dXJhdGUoNDY0JSkgaHVlLXJvdGF0ZSgxMTlkZWcpIGJyaWdodG5lc3MoMTA3JSkgY29udHJhc3QoMTM2JSk7XG59XG4ubGlzdC1pbWcyIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiA0MCU7XG5cbiAgZmlsdGVyOiBpbnZlcnQoMyUpIHNlcGlhKDEyNCUpIHNhdHVyYXRlKDM5OCUpIGh1ZS1yb3RhdGUoMTE5ZGVnKSBicmlnaHRuZXNzKDg3JSkgY29udHJhc3QoODglKTtcbn1cbnNwYW4ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4udGl0bGUge1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDA3ODcxO1xuICBcblxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1MDBweCkge1xuICAubG9nbyB7XG4gICAgd2lkdGg6IDE1dnc7XG4gIH1cbiAgLmlwYWQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctYm90dG9tOiA2dmg7XG4gIH1cbiAgLmltZy1jb250YWluZXIge1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDUwdnc7XG4gIH1cbiAgLmN1c3RvbS1mb290ZXIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuICAudGl0bGUsXG4gIGIge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuICAubGlzdC1pbWcge1xuICAgIHdpZHRoOiA5dnc7XG4gICAgaGVpZ2h0OiA0dnc7XG4gIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "99Un":
    /*!*******************************************!*\
      !*** ./src/app/pages/home/home.module.ts ***!
      \*******************************************/

    /*! exports provided: HomePageModule */

    /***/
    function Un(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "hsj+");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "9oos");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "9oos":
    /*!***************************************************!*\
      !*** ./src/app/pages/home/home-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function oos(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
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


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "hsj+");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "eUf4":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function eUf4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n  <div class=\"logo\">\n    <img src=\"assets/img/icon-home.png\" alt=\"\">\n  </div>\n  <div class=\"container\">\n    <ion-card>\n      <ion-card-header>\n        <ion-label color=\"primary\">\n          <b style=\"font-family:Futurabold !important;\"> Bienvenue sur l'application\n            e-border Calais port</b>\n        </ion-label>\n\n      </ion-card-header>\n      <ion-card-content>\n        <div class=\"title\">\n        </div>\n        <div class=\"ipad-container\">\n          <div class=\"img-container\"  routerLink=\"/languages\">\n            <div>\n              <img src=\"assets/icon/truck.svg\" class=\"list-img\">\n            </div>\n  \n            <ion-label><b style=\"font-family:Futurabold !important;\">CHAUFFEURS / DRIVERS</b></ion-label>\n          </div>\n          <div class=\"img-container\" (click)=\"onRDE()\" routerLink=\"/rde-menu\">\n            <div>\n              <img src=\"assets/icon/gears.png\" class=\"list-img2\">\n            </div>\n            <ion-label><b style=\"font-family:Futurabold !important;\"> RDE / COMMIS</b></ion-label>\n          </div>\n        </div>\n      \n      </ion-card-content>\n\n    </ion-card>\n  </div>\n \n  <div class=\"custom-footer\">\n\n    <p>\n      CopyRight: SPED-Boulogne Calais -Version 2019.12-17\n    </p>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "hsj+":
    /*!*****************************************!*\
      !*** ./src/app/pages/home/home.page.ts ***!
      \*****************************************/

    /*! exports provided: HomePage */

    /***/
    function hsj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./home.page.html */
      "eUf4");
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home.page.scss */
      "/rnz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(translate) {
          _classCallCheck(this, HomePage);

          this.translate = translate; //  this.translate.setDefaultLang('fr');
        }

        _createClass(HomePage, [{
          key: "onRDE",
          value: function onRDE() {
            this.translate.setDefaultLang('fr');
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-home-home-module-es5.js.map