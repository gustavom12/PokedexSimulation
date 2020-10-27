(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_MainComponent_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MainComponent/app.component */ "./src/app/components/MainComponent/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_poke_id_poke_id_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/poke-id/poke-id.component */ "./src/app/components/poke-id/poke-id.component.ts");
/* harmony import */ var _modules_routes_routes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/routes/routes.module */ "./src/app/modules/routes/routes.module.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _pipes_orderby_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/orderby.pipe */ "./src/app/pipes/orderby.pipe.ts");
/* harmony import */ var _pipes_mini_change_id_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/mini-change-id.pipe */ "./src/app/pipes/mini-change-id.pipe.ts");
/* harmony import */ var _directives_pokemon_type_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/pokemon-type.directive */ "./src/app/directives/pokemon-type.directive.ts");
/* harmony import */ var _directives_poketype_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/poketype.directive */ "./src/app/directives/poketype.directive.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_components_MainComponent_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _modules_routes_routes_module__WEBPACK_IMPORTED_MODULE_6__["RouteModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_MainComponent_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _components_poke_id_poke_id_component__WEBPACK_IMPORTED_MODULE_5__["PokeIdComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _pipes_orderby_pipe__WEBPACK_IMPORTED_MODULE_9__["OrderbyPipe"],
        _pipes_mini_change_id_pipe__WEBPACK_IMPORTED_MODULE_10__["MiniChangeIdPipe"],
        _directives_pokemon_type_directive__WEBPACK_IMPORTED_MODULE_11__["PokemonTypeDirective"],
        _directives_poketype_directive__WEBPACK_IMPORTED_MODULE_12__["PoketypeDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _modules_routes_routes_module__WEBPACK_IMPORTED_MODULE_6__["RouteModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _components_MainComponent_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _components_poke_id_poke_id_component__WEBPACK_IMPORTED_MODULE_5__["PokeIdComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    _pipes_orderby_pipe__WEBPACK_IMPORTED_MODULE_9__["OrderbyPipe"],
                    _pipes_mini_change_id_pipe__WEBPACK_IMPORTED_MODULE_10__["MiniChangeIdPipe"],
                    _directives_pokemon_type_directive__WEBPACK_IMPORTED_MODULE_11__["PokemonTypeDirective"],
                    _directives_poketype_directive__WEBPACK_IMPORTED_MODULE_12__["PoketypeDirective"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _modules_routes_routes_module__WEBPACK_IMPORTED_MODULE_6__["RouteModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_components_MainComponent_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/MainComponent/app.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/MainComponent/app.component.ts ***!
  \***********************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/components/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'poks';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvTWFpbkNvbXBvbmVudC9hcHAuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




//import { Observable } from "rxjs/Observable";
class HeaderComponent {
    constructor(serv) {
        this.serv = serv;
        this.pokemons = [];
    }
    ngOnInit() {
        // const url =  "https://pokeapi.co/api/v2/pokemon?limit=20&offset=200"
        // //Get 20 pokemons (name and url only)
        // this.serv.get().subscribe((res:any)=>{
        //    this.httpResponse = res
        //    res.results.forEach((el)=>{
        //       this.serv.pushArray(this.pokemons, el.url)
        //     })
        //     console.log(this.pokemons)
        // }
        // ,(err)=>{
        //   console.log(err)
        // })
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HTTPService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 15, vars: 0, consts: [["routerLink", ""], [1, "headerSearch"], [1, "left"], ["type", "search", "name", "", "id", ""], [1, "btnn", "fas", "fa-search"], [1, "right", "text-center"], [1, "bottom1"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Pok\u00E9dex ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nombre o n\u00FAmero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Busca un Pok\u00E9mon por su nombre o usando ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " su n\u00FAmero de la Pok\u00E9dex Nacional ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #646464;\n  margin-left: 70px;\n  cursor: pointer;\n}\nheader[_ngcontent-%COMP%]   .headerSearch[_ngcontent-%COMP%] {\n  background: #313131;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: 20px;\n  color: #ffffff;\n}\nheader[_ngcontent-%COMP%]   .headerSearch[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  margin-left: 35px;\n}\nheader[_ngcontent-%COMP%]   .headerSearch[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-family: arial, sans-serif;\n  font-weight: 200;\n}\nheader[_ngcontent-%COMP%]   .headerSearch[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 37px;\n  width: 304px;\n  border: 2px solid #888888;\n  position: relative;\n  top: -15px;\n}\nheader[_ngcontent-%COMP%]   .headerSearch[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  position: relative;\n  top: -15px;\n  border: none;\n  height: 37px;\n  width: 50px;\n  background: #1eb500;\n  color: #ffffff;\n}\nheader[_ngcontent-%COMP%]   .headerSearch[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  color: #ffffff;\n  background: #2e7c00;\n  padding: 7px;\n  padding-left: 25px;\n  padding-right: 25px;\n  margin-top: 30px;\n  margin-right: 35px;\n  font-size: 21px;\n}\nheader[_ngcontent-%COMP%]   .bottom1[_ngcontent-%COMP%] {\n  background: #828282;\n  height: 50px;\n  width: 100% !important;\n}\nheader[_ngcontent-%COMP%]   .bottom2[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 20px;\n  margin-left: auto;\n  margin-right: auto;\n}\n@media (max-width: 480px) {\n  header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 40px;\n    margin-left: 30px;\n  }\n\n  .headerSearch[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding-bottom: 0px;\n    height: 270px;\n  }\n  .headerSearch[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n    font-size: 24px;\n    width: 75%;\n    position: relative;\n    left: 17px;\n    top: -25px;\n  }\n  .headerSearch[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n    margin-left: 5px !important;\n  }\n  .headerSearch[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px !important;\n  }\n  .headerSearch[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 250px !important;\n    height: 60px;\n  }\n  .headerSearch[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    height: 60px;\n    width: 52px;\n  }\n\n  .bottom1[_ngcontent-%COMP%] {\n    height: 35px !important;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUZSO0FBR0k7RUFDSSxtQkFSRTtFQVNGLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQURSO0FBRVE7RUFDSSxpQkFBQTtBQUFaO0FBQ1k7RUFDSSxlQUFBO0VBQ0EsOEJBbEJUO0VBbUJTLGdCQUFBO0FBQ2hCO0FBQVk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRWhCO0FBRFk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUdoQjtBQURRO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBR1o7QUFGSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBSVI7QUFISTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUtSO0FBSEE7RUFFUTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFQUtWOztFQUpFO0lBQ0ksc0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7RUFPTjtFQU5NO0lBQ0ksZUFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0VBUVY7RUFQTTtJQUNJLDJCQUFBO0VBU1Y7RUFSVTtJQUNJLDBCQUFBO0VBVWQ7RUFUVTtJQUNJLHVCQUFBO0lBQ0EsWUFBQTtFQVdkO0VBVlU7SUFFSSxZQUFBO0lBQ0EsV0FBQTtFQVdkOztFQVRFO0lBQ0ksdUJBQUE7SUFDQSxXQUFBO0VBWU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiZ2NvbG9yOiAjMzEzMTMxXHJcbiR0ZXh0OiBhcmlhbCxzYW5zLXNlcmlmXHJcbmhlYWRlclxyXG4gICAgaDFcclxuICAgICAgICBjb2xvcjogIzY0NjQ2NFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3MHB4XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICAuaGVhZGVyU2VhcmNoXHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJnY29sb3JcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXhcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHhcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZlxyXG4gICAgICAgIC5sZWZ0XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4XHJcbiAgICAgICAgICAgIGgyXHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHhcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkdGV4dFxyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMFxyXG4gICAgICAgICAgICBpbnB1dFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzN3B4XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzA0cHhcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM4ODg4ODhcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgICAgICAgICAgICAgdG9wOiAtMTVweFxyXG4gICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgICAgICAgICAgICAgIHRvcDogLTE1cHhcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzN3B4XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzFlYjUwMFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmZcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC5yaWdodFxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyZTdjMDBcclxuICAgICAgICAgICAgcGFkZGluZzogN3B4XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweFxyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHhcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzNXB4XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweFxyXG4gICAgLmJvdHRvbTFcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjODI4MjgyXHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudFxyXG4gICAgLmJvdHRvbTJcclxuICAgICAgICB3aWR0aDogNTAlXHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG9cclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweClcclxuICAgIGhlYWRlclxyXG4gICAgICAgIGgxXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweFxyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweFxyXG4gICAgLmhlYWRlclNlYXJjaFxyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4XHJcbiAgICAgICAgaGVpZ2h0OiAyNzBweCBcclxuICAgICAgICAucmlnaHRcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4XHJcbiAgICAgICAgICAgIHdpZHRoOiA3NSVcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgICAgICAgIGxlZnQ6IDE3cHhcclxuICAgICAgICAgICAgdG9wOiAtMjVweFxyXG4gICAgICAgIC5sZWZ0XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHggIWltcG9ydGFudFxyXG4gICAgICAgICAgICBoMlxyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnRcclxuICAgICAgICAgICAgaW5wdXRcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweCAhaW1wb3J0YW50XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHhcclxuICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAvL3RvcDogLTUycHggIWltcG9ydGFudFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTJweFxyXG4gICAgICAgICAgICAgICAgLy9sZWZ0OiAyNDVweCAhaW1wb3J0YW50XHJcbiAgICAuYm90dG9tMVxyXG4gICAgICAgIGhlaWdodDogMzVweCAhaW1wb3J0YW50XHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.sass']
            }]
    }], function () { return [{ type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HTTPService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _directives_pokemon_type_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/pokemon-type.directive */ "./src/app/directives/pokemon-type.directive.ts");
/* harmony import */ var _pipes_orderby_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/orderby.pipe */ "./src/app/pipes/orderby.pipe.ts");
/* harmony import */ var _pipes_mini_change_id_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/mini-change-id.pipe */ "./src/app/pipes/mini-change-id.pipe.ts");








function HomeComponent_div_21_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, t_r4.type.name));
} }
function HomeComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "miniChangeId");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "miniChangeId");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_21_div_12_Template, 3, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pokemon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/pokeid/", pokemon_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, pokemon_r1.id), ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("N.\u00BA", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, pokemon_r1.id), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, pokemon_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", pokemon_r1.types);
} }
class HomeComponent {
    constructor(serv) {
        this.serv = serv;
        this.pokemons = [];
    }
    ngOnInit() {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
        //Get 20 pokemons (name and url only)
        this.serv.get().subscribe((res) => {
            this.httpResponse = res;
            res.results.forEach((el) => {
                this.serv.pushArray(this.pokemons, el.url);
                console.log(el.front_default);
            });
            console.log(this.pokemons);
        }, (err) => {
            console.log(err);
        });
        let delay = false;
        setTimeout(() => {
            delay = true;
        }, 1000);
        //INFINITE SCROLL
        const cb = () => {
            //This is a delay to this function because if it has not delay, the function is called many times
            if (!delay)
                return;
            if (delay) {
                console.log("asdasd", this.httpResponse);
                this.serv.get(this.httpResponse.next).subscribe((res) => {
                    this.httpResponse = res;
                    res.results.forEach(el => {
                        this.serv.pushArray(this.pokemons, el.url);
                        console.log(el.front_default);
                    });
                });
                delay = false;
                setTimeout(() => {
                    delay = true;
                }, 500);
            }
        };
        const observerOptions = {
            threshold: 0.8
        };
        let observer = new IntersectionObserver(cb, observerOptions);
        observer.observe(document.querySelector(".observer"));
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_1__["HTTPService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 32, vars: 3, consts: [[1, "home"], [1, "filters"], [1, "btn", "btn-primary", "random"], [1, "dropdown"], [1, "btn", "btn-secondary", "dropdown-toggle"], [1, "items"], [1, "item", "bg-secondary"], [1, "pokemonsContainer"], ["class", "pokemon text-left", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "lds-roller", "observer"], [1, "pokemon", "text-left", 3, "routerLink"], [1, "imgcontainer"], ["alt", "", 3, "src"], [1, "textContent"], [1, "num"], [1, "types"], ["class", "span", 3, "PokemonType", 4, "ngFor", "ngForOf"], [1, "span", 3, "PokemonType"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Random");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Order By...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Lowest Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Highest Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "A-Z");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Z-A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HomeComponent_div_21_Template, 13, 11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "orderby");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 1, ctx.pokemons));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _directives_pokemon_type_directive__WEBPACK_IMPORTED_MODULE_4__["PokemonTypeDirective"]], pipes: [_pipes_orderby_pipe__WEBPACK_IMPORTED_MODULE_5__["OrderbyPipe"], _pipes_mini_change_id_pipe__WEBPACK_IMPORTED_MODULE_6__["MiniChangeIdPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"]], styles: [".filters[_ngcontent-%COMP%] {\n  margin: 20px 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n.filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 350px;\n  font-size: 19px;\n  font-weight: 600;\n}\n.filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.filters[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%] {\n  width: auto;\n  color: #ffffff;\n  font-size: 18px;\n}\n.filters[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  padding: 1px 0;\n  cursor: pointer;\n}\n.filters[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n.filters[_ngcontent-%COMP%]   .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  background: #3f3f3f !important;\n}\n.pokemonsContainer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(202px, 1fr));\n  width: 100%;\n}\n.pokemonsContainer[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: auto;\n  margin-right: auto;\n  line-height: 0px !important;\n}\n.pokemonsContainer[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .textContent[_ngcontent-%COMP%] {\n  position: relative;\n  top: -25px;\n}\n.pokemonsContainer[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .imgcontainer[_ngcontent-%COMP%] {\n  height: 202px;\n  width: 202px;\n  background: #c2c2c248;\n  border-radius: 10px;\n}\n.pokemonsContainer[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .imgcontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 202px;\n  height: 202px;\n}\n.pokemonsContainer[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  color: #878787;\n  font-size: 14px;\n}\n.pokemonsContainer[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 500;\n}\n.pokemonsContainer[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   .span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 90px !important;\n  height: 20px;\n  text-align: center;\n  background: #000000;\n  color: #ffffff;\n  border: 2px solid #ffffff;\n  border-radius: 5px;\n}\n.pokemonsContainer[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]:hover {\n  position: relative;\n  animation: pokehover 0.2s linear;\n  animation-fill-mode: forwards;\n}\n@keyframes pokehover {\n  0% {\n    top: 0;\n    box-shadow: 2px 6px 30px 0px rgba(0, 0, 0, 0);\n  }\n  100% {\n    top: -5px;\n    box-shadow: 2px 6px 30px 0px rgba(0, 0, 0, 0.3);\n  }\n}\n.Flyingtype[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%) !important;\n  color: #000000 !important;\n}\n.DragonType[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%) !important;\n}\n@media (max-width: 800px) {\n  .pokemonsContainer[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(242px, 1fr));\n  }\n  .pokemonsContainer[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .imgcontainer[_ngcontent-%COMP%] {\n    height: 242px;\n    width: 242px;\n  }\n  .pokemonsContainer[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .imgcontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 242px;\n    width: 242px;\n  }\n}\n@media (max-width: 480px) {\n  .pokemonsContainer[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  }\n  .pokemonsContainer[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .imgcontainer[_ngcontent-%COMP%] {\n    height: 320px;\n    width: 320px;\n  }\n  .pokemonsContainer[_ngcontent-%COMP%]   .pokemon[_ngcontent-%COMP%]   .imgcontainer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 320px;\n    width: 320px;\n  }\n}\n.lds-roller[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  left: 48%;\n  width: 80px;\n  height: 80px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 40px 40px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #000000;\n  margin: -4px 0 0 -4px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: -0.036s;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1):after {\n  top: 63px;\n  left: 63px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.072s;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2):after {\n  top: 68px;\n  left: 56px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: -0.108s;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3):after {\n  top: 71px;\n  left: 48px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: -0.144s;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4):after {\n  top: 72px;\n  left: 40px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: -0.18s;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(5):after {\n  top: 71px;\n  left: 32px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: -0.216s;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(6):after {\n  top: 68px;\n  left: 24px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7) {\n  animation-delay: -0.252s;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(7):after {\n  top: 63px;\n  left: 17px;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8) {\n  animation-delay: -0.288s;\n}\n.lds-roller[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(8):after {\n  top: 56px;\n  left: 12px;\n}\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBRko7QUFHSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFEUjtBQUVRO0VBQ0ksZ0JBQUE7QUFBWjtBQUNJO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ1I7QUFBUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBRVo7QUFEWTtFQUNJLGlCQUFBO0FBR2hCO0FBRlE7RUFDSSw4QkFBQTtBQUlaO0FBREE7RUFDSSxhQUFBO0VBRUEsMkRBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFHUjtBQUZRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBSVo7QUFIUTtFQUNJLGFBMUNLO0VBMkNMLFlBM0NLO0VBNENMLHFCQUFBO0VBQ0EsbUJBQUE7QUFLWjtBQUpZO0VBQ0ksWUEvQ0M7RUFnREQsYUFoREM7QUFzRGpCO0FBTFE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQU9aO0FBTlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFRWjtBQU5ZO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBUWhCO0FBUEk7RUFDSSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUFTUjtBQUpBO0VBQ0k7SUFDSSxNQUFBO0lBRUEsNkNBQUE7RUFPTjtFQU5FO0lBQ0ksU0FBQTtJQUVBLCtDQUFBO0VBUU47QUFDRjtBQVBBO0VBQ0ksd0VBQUE7RUFDQSx5QkFBQTtBQVNKO0FBUkE7RUFDSSx3RUFBQTtBQVdKO0FBUkE7RUFDSTtJQUNJLDJEQUFBO0VBV047RUFUVTtJQUNJLGFBL0ZLO0lBZ0dMLFlBaEdLO0VBMkduQjtFQVZjO0lBQ0ksYUFsR0M7SUFtR0QsWUFuR0M7RUErR25CO0FBQ0Y7QUFaQTtFQUNJO0lBQ0ksMkRBQUE7RUFjTjtFQVpVO0lBQ0ksYUExR0c7SUEyR0gsWUEzR0c7RUF5SGpCO0VBYmM7SUFDSSxhQTdHRDtJQThHQyxZQTlHRDtFQTZIakI7QUFDRjtBQWJBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQWVKO0FBYkE7RUFDSSxnRUFBQTtFQUNBLDJCQUFBO0FBZ0JKO0FBYkE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFnQko7QUFkQTtFQUNJLHdCQUFBO0FBaUJKO0FBZkE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQWtCSjtBQWhCQTtFQUNJLHdCQUFBO0FBbUJKO0FBakJBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFvQko7QUFsQkE7RUFDSSx3QkFBQTtBQXFCSjtBQW5CQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBc0JKO0FBcEJBO0VBQ0ksd0JBQUE7QUF1Qko7QUFyQkE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQXdCSjtBQXRCQTtFQUNJLHVCQUFBO0FBeUJKO0FBdkJBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUEwQko7QUF4QkE7RUFDSSx3QkFBQTtBQTJCSjtBQXpCQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBNEJKO0FBMUJBO0VBQ0ksd0JBQUE7QUE2Qko7QUEzQkE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQThCSjtBQTVCQTtFQUNJLHdCQUFBO0FBK0JKO0FBN0JBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFnQ0o7QUE5QkE7RUFDSTtJQUNJLHVCQUFBO0VBaUNOO0VBL0JFO0lBQ0kseUJBQUE7RUFpQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiJGhlaWdodEFuZFdpblBDOiAyMDJweFxyXG4kaGVpZ2h0QW5kV2luQ2VsbDogMzIwcHhcclxuJGhlaWdodEFuZFdpblRhYmxldDogMjQycHhcclxuLmZpbHRlcnNcclxuICAgIG1hcmdpbjogMjBweCAwXHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmRcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICAgIGJ1dHRvblxyXG4gICAgICAgIHdpZHRoOiAzNTBweFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweFxyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDBcclxuICAgICAgICBpXHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHhcclxuICAgIC5pdGVtc1xyXG4gICAgICAgIHdpZHRoOiBhdXRvXHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmZcclxuICAgICAgICBmb250LXNpemU6IDE4cHhcclxuICAgICAgICAuaXRlbVxyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcHggMFxyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgICAgICAgICAgaDVcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4XHJcbiAgICAgICAgLml0ZW06aG92ZXJcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzNmM2YzZiAhaW1wb3J0YW50XHJcbiAgICAucmFuZG9tXHJcbiAgICAgICAgXHJcbi5wb2tlbW9uc0NvbnRhaW5lclxyXG4gICAgZGlzcGxheTogZ3JpZFxyXG4gICAgLy9ncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KCBhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpIClcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCBhdXRvLWZpdCwgbWlubWF4KCRoZWlnaHRBbmRXaW5QQywgMWZyKSApXHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgLnBva2Vtb25cclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0b1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0byBcclxuICAgICAgICBsaW5lLWhlaWdodDogMHB4ICFpbXBvcnRhbnRcclxuICAgICAgICAudGV4dENvbnRlbnRcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgICAgICAgIHRvcDogLTI1cHhcclxuICAgICAgICAuaW1nY29udGFpbmVyXHJcbiAgICAgICAgICAgIGhlaWdodDogJGhlaWdodEFuZFdpblBDXHJcbiAgICAgICAgICAgIHdpZHRoOiAkaGVpZ2h0QW5kV2luUENcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2MyYzJjMjQ4XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcclxuICAgICAgICAgICAgaW1nXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJGhlaWdodEFuZFdpblBDXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICRoZWlnaHRBbmRXaW5QQ1xyXG4gICAgICAgIC5udW1cclxuICAgICAgICAgICAgY29sb3I6ICM4Nzg3ODdcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4XHJcbiAgICAgICAgaDRcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDBcclxuICAgICAgICAudHlwZXNcclxuICAgICAgICAgICAgLnNwYW5cclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwcHggIWltcG9ydGFudFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmXHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHhcclxuICAgIC5wb2tlbW9uOmhvdmVyXHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgICAgYW5pbWF0aW9uOiBwb2tlaG92ZXIgMC4ycyBsaW5lYXJcclxuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkc1xyXG4gICAgICAgIC8vdG9wOiAtNXB4XHJcbiAgICAgICAgLy8td2Via2l0LWJveC1zaGFkb3c6IDJweCA2cHggMzBweCAwcHggcmdiYSgwLDAsMCwwLjMpXHJcbiAgICAgICAgLy9ib3gtc2hhZG93OiAycHggNnB4IDMwcHggMHB4IHJnYmEoMCwwLDAsMC4zKVxyXG5cclxuQGtleWZyYW1lcyBwb2tlaG92ZXJcclxuICAgIDAlXHJcbiAgICAgICAgdG9wOiAwXHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggNnB4IDMwcHggMHB4IHJnYmEoMCwwLDAsMC4wKVxyXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCA2cHggMzBweCAwcHggcmdiYSgwLDAsMCwwLjApXHJcbiAgICAxMDAlXHJcbiAgICAgICAgdG9wOiAtNXB4XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggNnB4IDMwcHggMHB4IHJnYmEoMCwwLDAsMC4zKVxyXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCA2cHggMzBweCAwcHggcmdiYSgwLDAsMCwwLjMpXHJcbi8vUE9LRU1PTlMgVFlQRVMgaW4ganMsIGlzIHRoZSBjbGFzc0xpc3QuYWRkIHRvIHRoaXMgY2xhc3NOYW1lc1xyXG4uRmx5aW5ndHlwZVxyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzNkYzdlZiA1MCUsICNiZGI5YjggNTAlKSAhaW1wb3J0YW50XHJcbiAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50XHJcbi5EcmFnb25UeXBlXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNTNhNGNmIDUwJSwgI2YxNmU1NyA1MCUpICFpbXBvcnRhbnRcclxuICAgIFxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KVxyXG4gICAgLnBva2Vtb25zQ29udGFpbmVyXHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoIGF1dG8tZml0LCBtaW5tYXgoJGhlaWdodEFuZFdpblRhYmxldCwgMWZyKSApXHJcbiAgICAgICAgLnBva2Vtb25cclxuICAgICAgICAgICAgLmltZ2NvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0QW5kV2luVGFibGV0XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJGhlaWdodEFuZFdpblRhYmxldFxyXG4gICAgICAgICAgICAgICAgaW1nXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0QW5kV2luVGFibGV0XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICRoZWlnaHRBbmRXaW5UYWJsZXRcclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KVxyXG4gICAgLnBva2Vtb25zQ29udGFpbmVyXHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoIGF1dG8tZml0LCBtaW5tYXgoJGhlaWdodEFuZFdpbkNlbGwsIDFmcikgKVxyXG4gICAgICAgIC5wb2tlbW9uXHJcbiAgICAgICAgICAgIC5pbWdjb250YWluZXJcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJGhlaWdodEFuZFdpbkNlbGxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAkaGVpZ2h0QW5kV2luQ2VsbFxyXG4gICAgICAgICAgICAgICAgaW1nXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAkaGVpZ2h0QW5kV2luQ2VsbFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAkaGVpZ2h0QW5kV2luQ2VsbFxyXG5cclxuLy9MT0FERVIgQ1NTXHJcbi5sZHMtcm9sbGVyIFxyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgIGxlZnQ6IDQ4JVxyXG4gICAgd2lkdGg6IDgwcHhcclxuICAgIGhlaWdodDogODBweFxyXG5cclxuLmxkcy1yb2xsZXIgZGl2IFxyXG4gICAgYW5pbWF0aW9uOiBsZHMtcm9sbGVyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZVxyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNDBweCA0MHB4XHJcbiAgICBcclxuXHJcbi5sZHMtcm9sbGVyIGRpdjphZnRlciBcclxuICAgIGNvbnRlbnQ6IFwiIFwiXHJcbiAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICB3aWR0aDogN3B4XHJcbiAgICBoZWlnaHQ6IDdweFxyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlXHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwXHJcbiAgICBtYXJnaW46IC00cHggMCAwIC00cHhcclxuXHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSkgXHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjAzNnNcclxuXHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSk6YWZ0ZXIgXHJcbiAgICB0b3A6IDYzcHhcclxuICAgIGxlZnQ6IDYzcHhcclxuXHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMikgXHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjA3MnNcclxuXHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMik6YWZ0ZXIgXHJcbiAgICB0b3A6IDY4cHhcclxuICAgIGxlZnQ6IDU2cHhcclxuXHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMykgXHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjEwOHNcclxuXHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMyk6YWZ0ZXIgXHJcbiAgICB0b3A6IDcxcHhcclxuICAgIGxlZnQ6IDQ4cHhcclxuXHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCkgXHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE0NHNcclxuXHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCk6YWZ0ZXIgXHJcbiAgICB0b3A6IDcycHhcclxuICAgIGxlZnQ6IDQwcHhcclxuXHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSkgXHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE4c1xyXG5cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KTphZnRlciBcclxuICAgIHRvcDogNzFweFxyXG4gICAgbGVmdDogMzJweFxyXG5cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KSBcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjE2c1xyXG5cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KTphZnRlciBcclxuICAgIHRvcDogNjhweFxyXG4gICAgbGVmdDogMjRweFxyXG5cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KSBcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjUyc1xyXG5cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KTphZnRlciBcclxuICAgIHRvcDogNjNweFxyXG4gICAgbGVmdDogMTdweFxyXG5cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KSBcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjg4c1xyXG5cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KTphZnRlciBcclxuICAgIHRvcDogNTZweFxyXG4gICAgbGVmdDogMTJweFxyXG5cclxuQGtleWZyYW1lcyBsZHMtcm9sbGVyIFxyXG4gICAgMCUgXHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZylcclxuICBcclxuICAgIDEwMCUgXHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKVxyXG4gIFxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.sass']
            }]
    }], function () { return [{ type: _services_http_service__WEBPACK_IMPORTED_MODULE_1__["HTTPService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/poke-id/poke-id.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/poke-id/poke-id.component.ts ***!
  \*********************************************************/
/*! exports provided: PokeIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokeIdComponent", function() { return PokeIdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");




class PokeIdComponent {
    constructor(router, route, serv) {
        this.router = router;
        this.route = route;
        this.serv = serv;
        this.id = this.route.snapshot.paramMap.get("id");
        this.url = `https://pokeapi.co/api/v2/pokemon/${this.id}`;
    }
    ngOnInit() {
        const q = this.router.getCurrentNavigation();
        console.log(this.router.getCurrentNavigation());
        console.log(this.id);
        this.serv.get(this.url).subscribe((res) => {
            console.log(res);
            this.poke = res;
            console.log(this.poke);
        });
    }
}
PokeIdComponent.ɵfac = function PokeIdComponent_Factory(t) { return new (t || PokeIdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HTTPService"])); };
PokeIdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PokeIdComponent, selectors: [["app-poke-id"]], decls: 10, vars: 2, consts: [[1, "pokemonid"], [1, "miniheader"], [1, "prev"], [1, "next"], [1, "pokemon"], [1, "title"], [1, "inline", "text-secondary"]], template: function PokeIdComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.poke.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.poke.id);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9rZS1pZC9wb2tlLWlkLmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokeIdComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-poke-id',
                templateUrl: './poke-id.component.html',
                styleUrls: ['./poke-id.component.sass']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HTTPService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/directives/pokemon-type.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/directives/pokemon-type.directive.ts ***!
  \******************************************************/
/*! exports provided: PokemonTypeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonTypeDirective", function() { return PokemonTypeDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PokemonTypeDirective {
    constructor(el) {
        this.el = el;
        this.$el = this.el.nativeElement;
    }
    ngAfterViewInit() {
        const text = this.$el.textContent;
        console.log(text);
        if (text === "Poison") {
            console.log("asd");
            this.$el.style.background = "#b97fc9";
        }
        if (text === "Grass") {
            this.$el.style.background = "#9bcc50";
        }
        if (text === "Fire") {
            this.$el.style.background = "#fd7d24";
        }
        if (text === "Flying") {
            this.$el.classList.add("Flyingtype");
        }
        if (text === "Water") {
            this.$el.style.background = "#4592c4";
        }
        if (text === "Bug") {
            this.$el.style.background = "#729f3f";
        }
        if (text === "Normal") {
            this.$el.style.background = "#a4acaf";
            this.$el.style.color = "#000000";
        }
        if (text === "Electric") {
            this.$el.style.background = "#eed535";
            this.$el.style.color = "#000000";
        }
        if (text === "Ground") {
            this.$el.style.background = "#ab9842";
        }
        if (text === "Fairy") {
            this.$el.style.background = "#fdb9e9";
            this.$el.style.color = "#000000";
        }
        if (text === "Fighting") {
            this.$el.style.background = "#d56723";
            this.$el.style.color = "#000000";
        }
        if (text === "Psychic") {
            this.$el.style.background = "#f366b9";
        }
        if (text === "Rock") {
            this.$el.style.background = "#a38c21";
        }
        if (text === "Steel") {
            this.$el.style.background = "#9eb7b8";
            this.$el.style.color = "#000000";
        }
        if (text === "Ice") {
            this.$el.style.background = "#51c4e7";
            this.$el.style.color = "#000000";
        }
        if (text === "Ghost") {
            this.$el.style.background = "#7b62a3";
        }
        if (text === "Dragon") {
            this.$el.classList.add("DragonType");
        }
        if (text === "Dark") {
            this.$el.style.background = "#707070";
        }
    }
}
PokemonTypeDirective.ɵfac = function PokemonTypeDirective_Factory(t) { return new (t || PokemonTypeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
PokemonTypeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PokemonTypeDirective, selectors: [["", "PokemonType", ""]], inputs: { text: ["PokemonType", "text"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PokemonTypeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[PokemonType]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["PokemonType"]
        }] }); })();


/***/ }),

/***/ "./src/app/directives/poketype.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/directives/poketype.directive.ts ***!
  \**************************************************/
/*! exports provided: PoketypeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoketypeDirective", function() { return PoketypeDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PoketypeDirective {
    constructor() { }
}
PoketypeDirective.ɵfac = function PoketypeDirective_Factory(t) { return new (t || PoketypeDirective)(); };
PoketypeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PoketypeDirective, selectors: [["", "appPoketype", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PoketypeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appPoketype]'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/routes/routes.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/routes/routes.module.ts ***!
  \*************************************************/
/*! exports provided: RouteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteModule", function() { return RouteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_poke_id_poke_id_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/poke-id/poke-id.component */ "./src/app/components/poke-id/poke-id.component.ts");






const routes = [
    {
        path: "",
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: "pokeid/:id",
        component: _components_poke_id_poke_id_component__WEBPACK_IMPORTED_MODULE_3__["PokeIdComponent"]
    }
];
class RouteModule {
}
RouteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RouteModule });
RouteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RouteModule_Factory(t) { return new (t || RouteModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RouteModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/mini-change-id.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/mini-change-id.pipe.ts ***!
  \**********************************************/
/*! exports provided: MiniChangeIdPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniChangeIdPipe", function() { return MiniChangeIdPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MiniChangeIdPipe {
    transform(value, ...args) {
        if (!value)
            return value;
        if (value.toString().length === 1) {
            return "00" + value.toString();
        }
        if (value.toString().length === 2) {
            return "0" + value.toString();
        }
        if (value.toString().length <= 3) {
            return value;
        }
    }
}
MiniChangeIdPipe.ɵfac = function MiniChangeIdPipe_Factory(t) { return new (t || MiniChangeIdPipe)(); };
MiniChangeIdPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "miniChangeId", type: MiniChangeIdPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MiniChangeIdPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'miniChangeId'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/orderby.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/orderby.pipe.ts ***!
  \***************************************/
/*! exports provided: OrderbyPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderbyPipe", function() { return OrderbyPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class OrderbyPipe {
    transform(value) {
        if (!value)
            return [];
        if (value.length > 19) {
            return value.sort(function (a, b) {
                return (a.id - b.id);
            });
            //return value.id.sort((a, b) => a - b)
        }
    }
}
OrderbyPipe.ɵfac = function OrderbyPipe_Factory(t) { return new (t || OrderbyPipe)(); };
OrderbyPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "orderby", type: OrderbyPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderbyPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'orderby',
                pure: false
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HTTPService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTPService", function() { return HTTPService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class HTTPService {
    constructor(http) {
        this.http = http;
        this.pokes = [];
    }
    get(url = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`, num = 20) {
        const customUrl = `https://pokeapi.co/api/v2/pokemon?limit=${num}&offset=0`;
        if (num !== 20) {
            return this.http.get(customUrl);
        }
        return this.http.get(url);
    }
    pushArray(array, url) {
        this.http.get(url).subscribe((res) => {
            array.push(res);
        });
    }
    ngOnInit() {
        //this.search20()
    }
}
HTTPService.ɵfac = function HTTPService_Factory(t) { return new (t || HTTPService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HTTPService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HTTPService, factory: HTTPService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HTTPService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Usuario\Documents\gusti\angular\poks\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map