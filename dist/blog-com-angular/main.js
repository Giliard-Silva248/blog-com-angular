"use strict";
(self["webpackChunkblog_com_angular"] = self["webpackChunkblog_com_angular"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pages_content_content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/content/content.component */ 8912);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: '',
  component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
}, {
  path: 'content/:id',
  component: _pages_content_content_component__WEBPACK_IMPORTED_MODULE_0__.ContentComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/menu-bar/menu-bar.component */ 7525);



class AppComponent {
  constructor() {
    this.title = 'blog-com-angular';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 3,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-menu-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_0__.MenuBarComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu-bar/menu-bar.component */ 7525);
/* harmony import */ var _components_menu_title_menu_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu-title/menu-title.component */ 9342);
/* harmony import */ var _components_big_card_big_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/big-card/big-card.component */ 2679);
/* harmony import */ var _components_small_card_small_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/small-card/small-card.component */ 7198);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ 5245);
/* harmony import */ var _pages_content_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/content/content.component */ 8912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);










class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_2__.MenuBarComponent, _components_menu_title_menu_title_component__WEBPACK_IMPORTED_MODULE_3__.MenuTitleComponent, _components_big_card_big_card_component__WEBPACK_IMPORTED_MODULE_4__.BigCardComponent, _components_small_card_small_card_component__WEBPACK_IMPORTED_MODULE_5__.SmallCardComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent, _pages_content_content_component__WEBPACK_IMPORTED_MODULE_7__.ContentComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 2679:
/*!***********************************************************!*\
  !*** ./src/app/components/big-card/big-card.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BigCardComponent": () => (/* binding */ BigCardComponent)
/* harmony export */ });
/* harmony import */ var src_app_data_dataFake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data/dataFake */ 6255);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class BigCardComponent {
  constructor(route) {
    this.route = route;
    this.photoCover = "";
    this.cardTitle = "";
    this.cardDescription = "";
    this.creditoBigCard = "";
    this.id = "0";
  }
  ngOnInit() {
    this.route.paramMap.subscribe(value => this.id = value.get("id"));
    this.setValuesToComponent(this.id);
  }
  setValuesToComponent(id) {
    const result = src_app_data_dataFake__WEBPACK_IMPORTED_MODULE_0__.dataFake.filter(article => article.id == id)[0];
    this.creditoBigCard = result.creditoCard;
    this.cardTitle = result.title;
    this.cardDescription = result.description;
    this.photoCover = result.photoCover;
  }
  static #_ = this.ɵfac = function BigCardComponent_Factory(t) {
    return new (t || BigCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BigCardComponent,
    selectors: [["app-big-card"]],
    inputs: {
      photoCover: "photoCover",
      cardTitle: "cardTitle",
      cardDescription: "cardDescription",
      creditoBigCard: "creditoBigCard"
    },
    decls: 12,
    vars: 4,
    consts: [[1, "container-big-card"], [1, "big-card-photo"], ["alt", "img-placeholder", 3, "src"], [1, "big-card-title"], [1, "creditos"], [1, "big-card-description"]],
    template: function BigCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5)(10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.photoCover, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cardTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.creditoBigCard);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cardDescription);
      }
    },
    styles: [".container-big-card[_ngcontent-%COMP%]{\r\n  max-width: 500px;\r\n  height: 500px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n  margin: 5px;\r\n}\r\n\r\n.big-card-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  border-radius: 15px;\r\n}\r\n\r\n.big-card-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  margin-top: 15px;\r\n  font-size: 20px;\r\n  padding: 5px;\r\n}\r\n.creditos[_ngcontent-%COMP%]{\r\n  padding: 0 5px;\r\n}\r\n.big-card-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  color: #748CAB;\r\n  margin-top: 10px;\r\n  padding: 5px;\r\n}\n/*# sourceURL=webpack://./src/app/components/big-card/big-card.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9iaWctY2FyZC9iaWctY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhaW5lci1iaWctY2FyZHtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uYmlnLWNhcmQtcGhvdG8gaW1ne1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5iaWctY2FyZC10aXRsZSBoMntcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmNyZWRpdG9ze1xyXG4gIHBhZGRpbmc6IDAgNXB4O1xyXG59XHJcbi5iaWctY2FyZC1kZXNjcmlwdGlvbiBwe1xyXG4gIGNvbG9yOiAjNzQ4Q0FCO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7525:
/*!***********************************************************!*\
  !*** ./src/app/components/menu-bar/menu-bar.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuBarComponent": () => (/* binding */ MenuBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


const _c0 = function () {
  return [""];
};
class MenuBarComponent {
  clickMenu() {
    const menu = document.querySelector(".menuLista");
    if (menu.style.display == 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  }
  static #_ = this.ɵfac = function MenuBarComponent_Factory(t) {
    return new (t || MenuBarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MenuBarComponent,
    selectors: [["app-menu-bar"]],
    decls: 15,
    vars: 2,
    consts: [[1, "conteiner-menu-bar"], [1, "ul1"], ["href", "https://www.linkedin.com/in/giliard-h-da-silva-72a331169/", "target", "_blank"], ["href", "https://github.com/Giliard-Silva248", "target", "_blank"], ["href", "https://www.instagram.com/giliard.hs/", "target", "_blank"], [1, "ul2"], [3, "routerLink"]],
    template: function MenuBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "ul", 1)(2, "li")(3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "LINKEDIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li")(6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "GITHUB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li")(9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "INSTAGRAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 5)(12, "li")(13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: [".conteiner-menu-bar[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  padding: 15px;\r\n  background-color: #0D1321;\r\n}\r\n.ul1[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  background-color: #0D1321;\r\n}\r\n.ul2[_ngcontent-%COMP%]{\r\n  background-color: #0D1321;\r\n}\r\n.ul1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  padding: 5px;\r\n  margin: 0 15px;\r\n  background-color: #0D1321;\r\n}\r\n.ul2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  padding: 5px;\r\n  margin: 0 15px;\r\n  background-color: #0D1321;\r\n  border: 1px solid #F0EBD8;\r\n  border-radius: 15px;\r\n}\r\na[_ngcontent-%COMP%]{\r\n  background-color: #0D1321;\r\n  color: #F0EBD8;\r\n}\n/*# sourceURL=webpack://./src/app/components/menu-bar/menu-bar.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tZW51LWJhci9tZW51LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRlaW5lci1tZW51LWJhcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQxMzIxO1xyXG59XHJcbi51bDF7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQxMzIxO1xyXG59XHJcbi51bDJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBEMTMyMTtcclxufVxyXG4udWwxIGxpe1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW46IDAgMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQxMzIxO1xyXG59XHJcbi51bDIgbGl7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbjogMCAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwRDEzMjE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI0YwRUJEODtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbmF7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBEMTMyMTtcclxuICBjb2xvcjogI0YwRUJEODtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */", "@media(max-width: 700px){\r\n  .conteiner-menu-bar[_ngcontent-%COMP%]{\r\n    flex-direction: row-reverse;\r\n    padding: 15px 0px;\r\n    background-color: #0D1321;\r\n  }\r\n  .ul1[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    background-color: #0D1321;\r\n    align-items: center;\r\n  }\r\n  .ul2[_ngcontent-%COMP%]{\r\n    background-color: #0D1321;\r\n  }\r\n  .ul1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    padding: 2px;\r\n    margin: 0 5px;\r\n    background-color: #0D1321;\r\n  }\r\n  .ul2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    padding: 5px;\r\n    margin: 0 10px;\r\n    background-color: #0D1321;\r\n    border: 1px solid #F0EBD8;\r\n\r\n  }\r\n  a[_ngcontent-%COMP%]{\r\n    background-color: #0D1321;\r\n    color: #F0EBD8;\r\n  }\r\n}\r\n@media(max-width: 335px){\r\n  .conteiner-menu-bar[_ngcontent-%COMP%]{\r\n    flex-direction: column;\r\n    padding: 15px 0px;\r\n    background-color: #0D1321;\r\n  }\r\n  .ul1[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    background-color: #0D1321;\r\n    align-items: center;\r\n    justify-content: center;\r\n  }\r\n  .ul2[_ngcontent-%COMP%]{\r\n    background-color: #0D1321;\r\n    text-align: center;\r\n    width: 100%;\r\n    margin: 5px 0;\r\n  }\r\n  .ul1[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    padding: 2px;\r\n    margin: 0 5px;\r\n    background-color: #0D1321;\r\n  }\r\n  .ul2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    padding: 5px;\r\n    margin: 0 10px;\r\n    background-color: #0D1321;\r\n    border: 1px solid #F0EBD8;\r\n\r\n  }\r\n  a[_ngcontent-%COMP%]{\r\n    background-color: #0D1321;\r\n    color: #F0EBD8;\r\n  }\r\n}\n/*# sourceURL=webpack://./src/app/components/menu-bar/menu-bar.responsive.component%20.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tZW51LWJhci9tZW51LWJhci5yZXNwb25zaXZlLmNvbXBvbmVudCUyMC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIseUJBQXlCOztFQUUzQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLGNBQWM7RUFDaEI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLHlCQUF5QjtJQUN6Qix5QkFBeUI7O0VBRTNCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsY0FBYztFQUNoQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhKG1heC13aWR0aDogNzAwcHgpe1xyXG4gIC5jb250ZWluZXItbWVudS1iYXJ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRDEzMjE7XHJcbiAgfVxyXG4gIC51bDF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBEMTMyMTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC51bDJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQxMzIxO1xyXG4gIH1cclxuICAudWwxIGxpe1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRDEzMjE7XHJcbiAgfVxyXG4gIC51bDIgbGl7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRDEzMjE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBFQkQ4O1xyXG5cclxuICB9XHJcbiAgYXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRDEzMjE7XHJcbiAgICBjb2xvcjogI0YwRUJEODtcclxuICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogMzM1cHgpe1xyXG4gIC5jb250ZWluZXItbWVudS1iYXJ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMTVweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQxMzIxO1xyXG4gIH1cclxuICAudWwxe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRDEzMjE7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC51bDJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQxMzIxO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDVweCAwO1xyXG4gIH1cclxuICAudWwxIGxpe1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRDEzMjE7XHJcbiAgfVxyXG4gIC51bDIgbGl7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRDEzMjE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjBFQkQ4O1xyXG5cclxuICB9XHJcbiAgYXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRDEzMjE7XHJcbiAgICBjb2xvcjogI0YwRUJEODtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9342:
/*!***************************************************************!*\
  !*** ./src/app/components/menu-title/menu-title.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuTitleComponent": () => (/* binding */ MenuTitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class MenuTitleComponent {
  static #_ = this.ɵfac = function MenuTitleComponent_Factory(t) {
    return new (t || MenuTitleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MenuTitleComponent,
    selectors: [["app-menu-title"]],
    decls: 5,
    vars: 0,
    consts: [[1, "container-menu-title"]],
    template: function MenuTitleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "SEU BLOG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: [".container-menu-title[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%]{\r\n\r\n  font-size: 100px;\r\n  text-align: center;\r\n  font-weight: bolder;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n@media(max-width: 350px){\r\n  .container-menu-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-size: 3rem;\r\n  }\r\n}\n/*# sourceURL=webpack://./src/app/components/menu-title/menu-title.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tZW51LXRpdGxlL21lbnUtdGl0bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDREQUE0RDtBQUM5RDs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uY29udGFpbmVyLW1lbnUtdGl0bGUgPiBoMXtcclxuXHJcbiAgZm9udC1zaXplOiAxMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDM1MHB4KXtcclxuICAuY29udGFpbmVyLW1lbnUtdGl0bGUgaDF7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7198:
/*!***************************************************************!*\
  !*** ./src/app/components/small-card/small-card.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmallCardComponent": () => (/* binding */ SmallCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SmallCardComponent {
  constructor() {
    this.photoCoverSmall = "";
    this.titleDescriptionSmall = "";
    this.creditonSmall = "";
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function SmallCardComponent_Factory(t) {
    return new (t || SmallCardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SmallCardComponent,
    selectors: [["app-small-card"]],
    inputs: {
      photoCoverSmall: "photoCoverSmall",
      titleDescriptionSmall: "titleDescriptionSmall",
      creditonSmall: "creditonSmall"
    },
    decls: 6,
    vars: 3,
    consts: [[1, "container-small-card"], ["alt", "", 3, "src"]],
    template: function SmallCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.photoCoverSmall, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.titleDescriptionSmall, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.creditonSmall);
      }
    },
    styles: [".container-small-card[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  max-width: 500px;\r\n  height: 125px;\r\n\r\n  border-radius: 25px;\r\n  margin: 1rem;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  max-width: 100px;\r\n  height: 100px;\r\n  margin: 15px;\r\n  border-radius: 15px;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n  font-size: 17px;\r\n  margin: 15px;\r\n}\r\np[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  margin-top: 10px;\r\n  color: #748CAB;\r\n}\r\n\r\n@media(max-width: 380px){\r\n  .container-small-card[_ngcontent-%COMP%] {\r\n    height: 250px;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n  }\r\n  img[_ngcontent-%COMP%]{\r\n    max-width: 450px;\r\n    height: 120px;\r\n    border-radius: 15px;\r\n  }\r\n  h3[_ngcontent-%COMP%]{\r\n    margin: 25px 0;\r\n    font-size: .9rem;\r\n  }\r\n  p[_ngcontent-%COMP%]{\r\n\r\n    font-size: 11px;\r\n  }\r\n}\n/*# sourceURL=webpack://./src/app/components/small-card/small-card.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zbWFsbC1jYXJkL3NtYWxsLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsYUFBYTs7RUFFYixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjtFQUNBOztJQUVFLGVBQWU7RUFDakI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGFpbmVyLXNtYWxsLWNhcmR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiAxMjVweDtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcbmltZ3tcclxuICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbmgze1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBtYXJnaW46IDE1cHg7XHJcbn1cclxucHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGNvbG9yOiAjNzQ4Q0FCO1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiAzODBweCl7XHJcbiAgLmNvbnRhaW5lci1zbWFsbC1jYXJkIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuICBpbWd7XHJcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG4gIGgze1xyXG4gICAgbWFyZ2luOiAyNXB4IDA7XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG4gIH1cclxuICBwe1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6255:
/*!**********************************!*\
  !*** ./src/app/data/dataFake.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataFake": () => (/* binding */ dataFake)
/* harmony export */ });
const dataFake = [{
  "id": "1",
  "title": 'Sony diz que Battlefield "não consegue alcançar" Call of Duty',
  "creditoCard": `POR RAPHAEL GIANNOTTI 23/11/2022 18:20`,
  "description": `Defesa da empresa contra compra da Activision Blizzard pela Microsoft revela o total de vendas das duas franquias.
    Uma das maiores preocupações da Sony com a compra da Activision Blizzard pela Microsoft é como fica a franquia Call of Duty no PlayStation. O órgão responsável por avaliar a negociação no Reino Unido divulgou os argumentos da Sony contra a compra. No documento, a empresa japonesa deixa claro que não existe outra franquia que consiga competir com Call of Duty. O maior (e talvez o único) rival direto da franquia da Activision Blizzard é Battlefield, que não anda nada bem com o último título lançado, Battlefield 2042. Segundo a Sony, a franquia da Electronic Arts vendeu 88.7 milhões de cópias, número que não chega nem aos pés das mais de 400 milhões de unidades vendidas de Call of Duty.`,
  "photoCover": "https://adrenaline.com.br/uploads/chamadas/battlefield-20422.jpg"
}, {
  "id": "2",
  "title": 'Activision Blizzard promete lutar duramente para garantir sua compra pela Microsoft',
  "creditoCard": `POR FELIPE GUGELMIN 25/11/2022 08:54`,
  "description": `A empresa não vai aguardar de maneira passiva enquanto reguladores decidem se vão aprovar a aquisição. Anunciada em janeiro deste ano, a compra da Activision Blizzard pela Microsoft não está andando tão bem quanto as empresas esperavam. Após a CMA do Reino Unido aprofundar suas investigações sobre a aquisição, a FTC norte-americana deu sinais de que pode tentar bloqueá-la totalmente — algo que a Activision promete que não vai tolerar de forma passiva.

    Em uma mensagem publicada no Twitter, a vice-presidente executiva de assuntos corporativos e CCO da companhia, Lulu Cheng Meservey, comentou as “especulações” recentes sobre o acordo. Segundo ela, são absurdas quaisquer afirmações que indiquem que a compra pode gerar um efeito anticompetitivo no mercado de games.`,
  "photoCover": "https://adrenaline.com.br/uploads/chamadas/Activision_Blizzard_lutar_garantir_compra_Microsoft.jpg"
}, {
  "id": "3",
  "title": 'Call of Duty: Modern Warfare 2 estará grátis em dezembro',
  "creditoCard": `POR FILIPE CARBONE 24/11/2022 21:15
   `,
  "description": `. Um dos lançamentos de maior sucesso deste ano, Call of Duty: Modern Warfare 2 estará gratuito para ser jogado em dezembro. A Activision Blizzard revelou nesta semana que os jogadores que desejam descobrir um pouco mais do jogo terão a oportunidade de testá-lo se investir um real sequer. De acordo com ele, os jogadores terão a oportunidade de testar o multiplayer gratuito entre os dias 15 a 19 de dezembro. Contudo, a Activisino Blizzard ainda não se pronunciou sobre o fim de semana gratuito. Dessa forma, todas as informações que se têm até agora vieram por meio de um vazamento que ainda não foi oficializado.`,
  "photoCover": "https://adrenaline.com.br/uploads/chamadas/modern_warfare_2.jpg"
}, {
  "id": "4",
  "title": '25% dos jogadores de God of War Ragnarök já finalizaram o game',
  "creditoCard": `POR FELIPE GUGELMIN 24/11/2022 15:10`,
  "description": `Lançado oficialmente no dia 9 de novembro, God of War Ragnarök é conhecido por ser um jogo bastante extenso. No entanto, dados da PSN mostram que 25% dos jogadores que iniciaram o game no PlayStation 4 ou PlayStation 5 já chegaram ao final de sua história principal — mas poucos fizeram tudo o que o jogo tem a oferecer.

    Embora pareça baixa, a taxa finalização é considerada acima da média, especialmente dado que a maioria dos games comprados pelos consumidores nunca são finalizados. Segundo informações computadas pelo site Push Square, no entanto, somente 3,9% daqueles que compraram o título obtiveram seu Troféu de Platina. Além de trazer uma história principal extensa, God of War Ragnarök também está repleto de missões secundárias e itens colecionáveis. Embora cumprir todas as tarefas disponíveis não seja um processo particularmente desafiante, ele pode ser bastante trabalhoso e envolve revisitar várias regiões pelas quais os jogadores passam durante a aventura.`,
  "photoCover": "https://adrenaline.com.br/uploads/chamadas/25_jogadores_God_of_War_Ragnarok_finalizaram_game.jpg"
}];

/***/ }),

/***/ 8912:
/*!****************************************************!*\
  !*** ./src/app/pages/content/content.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentComponent": () => (/* binding */ ContentComponent)
/* harmony export */ });
/* harmony import */ var src_app_data_dataFake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data/dataFake */ 6255);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class ContentComponent {
  constructor(route) {
    this.route = route;
    this.photoCoverContent = "";
    this.titleContent = "";
    this.descriptionContent = "";
    this.creditoBCard = "";
    this.id = "0";
  }
  ngOnInit() {
    this.route.paramMap.subscribe(value => this.id = value.get("id"));
    this.setValuesToComponent(this.id);
  }
  setValuesToComponent(id) {
    const result = src_app_data_dataFake__WEBPACK_IMPORTED_MODULE_0__.dataFake.filter(article => article.id == id)[0];
    this.creditoBCard = result.creditoCard;
    this.titleContent = result.title;
    this.descriptionContent = result.description;
    this.photoCoverContent = result.photoCover;
  }
  static #_ = this.ɵfac = function ContentComponent_Factory(t) {
    return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ContentComponent,
    selectors: [["app-content"]],
    inputs: {
      photoCoverContent: "photoCoverContent",
      titleContent: "titleContent",
      descriptionContent: "descriptionContent",
      creditoBCard: "creditoBCard"
    },
    decls: 14,
    vars: 4,
    consts: [[1, "container-content"], [1, "conteinar-txt"], [1, "content-cover"], ["alt", "", 3, "src"], [1, "content-title"], [1, "credito"], [1, "content-description"]],
    template: function ContentComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6)(12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.photoCoverContent, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.titleContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.creditoBCard);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.descriptionContent);
      }
    },
    styles: [".container-content[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n  max-width: 1500px;\r\n\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 5rem;\r\n\r\n}\r\n.conteinar-txt[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\nhr[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  margin: 35px 0;\r\n}\r\n.content-cover[_ngcontent-%COMP%]{\r\n  margin: 30px 0 0 0;\r\n\r\n}\r\n\r\n.content-title[_ngcontent-%COMP%]{\r\n  margin: 30px;\r\n\r\n}\r\n.credito[_ngcontent-%COMP%]{\r\n  margin-top: 30px;\r\n}\r\n.content-description[_ngcontent-%COMP%]{\r\n  margin: 15px;\r\n  text-indent: 10px;\r\n  text-align: justify;\r\n}\n/*# sourceURL=webpack://./src/app/pages/content/content.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjs7O0VBR2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQjs7QUFFbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjtBQUNBO0VBQ0Usa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLFlBQVk7O0FBRWQ7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhaW5lci1jb250ZW50e1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXgtd2lkdGg6IDE1MDBweDtcclxuXHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDVyZW07XHJcblxyXG59XHJcbi5jb250ZWluYXItdHh0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuaW1ne1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbmhye1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luOiAzNXB4IDA7XHJcbn1cclxuLmNvbnRlbnQtY292ZXJ7XHJcbiAgbWFyZ2luOiAzMHB4IDAgMCAwO1xyXG5cclxufVxyXG5cclxuLmNvbnRlbnQtdGl0bGV7XHJcbiAgbWFyZ2luOiAzMHB4O1xyXG5cclxufVxyXG4uY3JlZGl0b3tcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5jb250ZW50LWRlc2NyaXB0aW9ue1xyXG4gIG1hcmdpbjogMTVweDtcclxuICB0ZXh0LWluZGVudDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_menu_title_menu_title_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/menu-title/menu-title.component */ 9342);
/* harmony import */ var _components_big_card_big_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/big-card/big-card.component */ 2679);
/* harmony import */ var _components_small_card_small_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/small-card/small-card.component */ 7198);




class HomeComponent {
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 15,
    vars: 0,
    consts: [["href", "https://adrenaline.com.br/noticias", "target", "_blank", "rel", "noopener noreferrer"], [1, "cr"], [1, "container-articles"], [1, "articles-main"], ["href", "content/1"], ["photoCover", "https://adrenaline.com.br/uploads/chamadas/battlefield-20422.jpg", "cardTitle", "Sony diz que Battlefield 'n\u00E3o consegue alcan\u00E7ar' Call of Duty", "cardDescription", "Defesa da empresa contra compra da Activision Blizzard pela Microsoft revela o total de vendas das duas franquias..", "creditoBigCard", "POR RAPHAEL GIANNOTTI 23/11/2022 18:20"], [1, "articles-others"], ["href", "content/2"], ["photoCoverSmall", "https://adrenaline.com.br/uploads/chamadas/Activision_Blizzard_lutar_garantir_compra_Microsoft.jpg", "titleDescriptionSmall", "Activision Blizzard promete lutar duramente para garantir sua compra pela Microsoft", "creditonSmall", "POR FELIPE GUGELMIN 25/11/2022 08:54"], ["href", "content/3"], ["photoCoverSmall", "https://adrenaline.com.br/uploads/chamadas/modern_warfare_2.jpg", "titleDescriptionSmall", "Call of Duty: Modern Warfare 2 estar\u00E1 gr\u00E1tis em dezembro", "creditonSmall", "POR FILIPE CARBONE 24/11/2022 21:15"], ["href", "content/4"], ["photoCoverSmall", "https://adrenaline.com.br/uploads/chamadas/25_jogadores_God_of_War_Ragnarok_finalizaram_game.jpg", "titleDescriptionSmall", "25% dos jogadores de God of War Ragnar\u00F6k j\u00E1 finalizaram o game", "creditonSmall", "POR FELIPE GUGELMIN 24/11/2022 15:10"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-menu-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 0)(2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Fonte: https://adrenaline.com.br/noticias");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-big-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6)(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "app-small-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "app-small-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "app-small-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
    },
    dependencies: [_components_menu_title_menu_title_component__WEBPACK_IMPORTED_MODULE_0__.MenuTitleComponent, _components_big_card_big_card_component__WEBPACK_IMPORTED_MODULE_1__.BigCardComponent, _components_small_card_small_card_component__WEBPACK_IMPORTED_MODULE_2__.SmallCardComponent],
    styles: [".container-articles[_ngcontent-%COMP%]{\r\n  margin: auto;\r\n  max-width: 1500px;\r\n  display: flex;\r\n  justify-content: space-around;\r\n\r\n  align-items: center;\r\n\r\n  flex-wrap: wrap;\r\n\r\n  background-color: #F0EBD8;\r\n\r\n}\r\n\r\n.cr[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n  color: #748CAB;\r\n\r\n}\n/*# sourceURL=webpack://./src/app/pages/home/home.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsNkJBQTZCOztFQUU3QixtQkFBbUI7O0VBRW5CLGVBQWU7O0VBRWYseUJBQXlCOztBQUUzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjOztBQUVoQiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY29udGFpbmVyLWFydGljbGVze1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXgtd2lkdGg6IDE1MDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEVCRDg7XHJcblxyXG59XHJcblxyXG4uY3J7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNzQ4Q0FCO1xyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map