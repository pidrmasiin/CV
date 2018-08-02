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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _myjava_myjava_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myjava/myjava.component */ "./src/app/myjava/myjava.component.ts");
/* harmony import */ var _myjavascript_myjavascript_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./myjavascript/myjavascript.component */ "./src/app/myjavascript/myjavascript.component.ts");
/* harmony import */ var _demola_demola_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demola/demola.component */ "./src/app/demola/demola.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'java', component: _myjava_myjava_component__WEBPACK_IMPORTED_MODULE_3__["MyjavaComponent"] },
    { path: 'javascript', component: _myjavascript_myjavascript_component__WEBPACK_IMPORTED_MODULE_4__["MyjavascriptComponent"] },
    { path: 'demola', component: _demola_demola_component__WEBPACK_IMPORTED_MODULE_5__["DemolaComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\" fxLayout=\"column\"  fxLayoutGap=\"2em\">\n  <div fxLayout=\"row\" style=\"padding-top: 1em; border-bottom: 0.1em solid #e6f2ff\">\n      <button mat-button style=\"margin: 0.5em;\" routerLink=\"/\">Esittely</button>\n      <button mat-button routerLink=\"/javascript\">JavaScript</button>\n      <button mat-button routerLink=\"/java\">Java</button>\n      <button mat-button routerLink=\"/demola\">Demola-projekti</button>\n  </div>\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutGap=\"11em\" >\n      <div  fxFlex=\"20%\" >\n        <div fxLayout=\"row\" style=\"margin-top: 4.5em\">\n          <div [ngClass]=\"targetClass\" style=\"padding: 1em; background: #e6f2ff\">\n            <p>Petteri Pääkkönen<br />\n            050 590 68 77<br />\n            petteri.paakkonen@helsinki.fi</p>\n            <img class=\"center\" height=\"330em\" width=\"240em\" src=\"https://i.imgur.com/SeFIQ2o.jpg\" alt=\"Photo of a me\">\n          </div>\n          <div fxFlex=\"20%\"></div>\n        </div>\n      </div>\n    <div fxFlex=\"80%\">\n      <router-outlet></router-outlet>\n    </div>\n  \n  </div>\n  <div fxLayout=\"row\"><br/><br/></div>\n</div>\n\n\n\n"

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
        this.title = 'angularcv';
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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _myjava_myjava_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./myjava/myjava.component */ "./src/app/myjava/myjava.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _myjavascript_myjavascript_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./myjavascript/myjavascript.component */ "./src/app/myjavascript/myjavascript.component.ts");
/* harmony import */ var _demola_demola_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./demola/demola.component */ "./src/app/demola/demola.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _myjava_myjava_component__WEBPACK_IMPORTED_MODULE_8__["MyjavaComponent"],
                _myjavascript_myjavascript_component__WEBPACK_IMPORTED_MODULE_10__["MyjavascriptComponent"],
                _demola_demola_component__WEBPACK_IMPORTED_MODULE_11__["DemolaComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/demola/demola.component.css":
/*!*********************************************!*\
  !*** ./src/app/demola/demola.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "sup {\n    font-size: 1.1em\n}\n\nh4{\n    padding: 1em; \n    padding-bottom: 0.1em; \n    padding-left: 0em;\n}\n\nh3 {\n    padding-bottom: 1em\n}\n\np {\n    text-align: justify;\n}\n\nsup {\n    font-size: 1.1em\n}"

/***/ }),

/***/ "./src/app/demola/demola.component.html":
/*!**********************************************!*\
  !*** ./src/app/demola/demola.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h3 style=\"padding-bottom: 1em\">Demola-projekti</h3>\n    <p>\n      Olin mukana  <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.demola.net/\">demola-kurssilla</a>, \n      jossa ajatuksena on tuoda yhteen yritysmaailma, yliopisto ja opiskelijat. Kurssi toimi siten, \n      että demola yhteystyöyritys antoi opiskelijoille jonkin ongelman, joka opiskelijoiden piti ratkaista.</p>\n      <img src=\"https://s3-eu-west-1.amazonaws.com/files.demola.net/images/logos/logo-demola.png\" alt=\"Demola logo\">\n    <h4>Tehtävä</h4>\n      <p>\n      Olin mukana ryhmässä, jossa loimme Liiteri-palvelulle\n      prototyypin markkinointi tarkoituksia varten. Liiteri-palvelulla on ympäri Helsinkiä kontteja, joiden\n      seinillä on isot tabletit. Meidän tehtävämme oli luoda noille tableteille jonkinlaista interaktiivista \n      sisältöä.\n      </p>\n    <h4>Ratkaisu</h4>\n      <p>\n      Koska Liiteri tarjoaa korjauspalveluita, joiden tunnettuus on melko vähäistä keskityimme niihin. Tarkoituksenamme\n      oli siis saada ihmiset kiinnostumaan asioiden korjaamisesta. Perehdyimme korjausliiketoimintaan lukemalla tutkimuksia\n      ja tekemällä haastateluja. Osoittautui, että yksi keskeisimmistä syistä jättää asiat korjaamatta, on\n      korjauspalveluiden kokeminen vaivalloiseksi. Koska Liiteri tarjoaa eräänlaista 24/7 korjauspalvelua, päätimme\n      korostaa markkinoinnin prototyypissä Liiteriä ratkaisuna korjaamisen vaivalloisuuteen. \n      <br/><br/>\n      Meidän täytyi kuitenkin ratkaista myös toinen ongelma, joka koski yksilöiden kohtaamaa tietotulvaa. Kuinka saada\n      ohikulkijat kiinnittämään huomio tablettiin ja sen tarjoamaan ratkaisuun. Jotta saisimme tietää, kiinnittävätkö\n      ihmiset huomioita tablettiin ja reagoivatko he siihen jotenkin, päätimme luoda muutaman animaation, jonka \n      tarkoituksena oli houkutella ohikulkijoita koskettamaan tablettia.\n      <br/><br/>\n      Animaatioden luominen jäi vastuulleni ja, vaikken aiemmin ollut tehnyt animaatioita, onnistuin luomaan\n      kaksi prototyyppiä, joita olisi ollut mahdollista testata myös käytännössä. Valitettavasti tabletteissa\n      oli kuitenkin ikävä tyyppivika ja ne reagoivat aurinkoon odottamattomalla tavalla. Emme siis saaneet\n      animaatioita näytöille, sillä niitä ei saatu riittävän ajoissa toimimaan.\n      </p>\n    <h4>Lopputulema</h4>\n    <p>\n      Vaikkemme lopulta saaneet animaatioita testattua, opin kuitenkin projektityöstä yleisesti hyvin paljon.\n      Tiimimme oli monikansallinen ja poikkitieteellinen, mikä oli kiinnostavaa. Henkilökohtaisesti minulle oli hyvä päästä\n      työskentelemään ja kommunikoimaan englanniksi ja sain kurssista kaivattua itsevarmuutta.\n      <br/><br/>\n      Alla linkit animaatioihin ja koodiin.\n    </p>\n    <i class=\"material-icons\" style=\"font-size: 32px\">web</i><a style=\"padding-right: 1em\" target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://liiterimap.herokuapp.com/\"><sup> Animaatiot</sup></a> <sup>(ei responsiivisia, suunniteltu 892x1517 -tabletille )</sup><br/>\n    <i class=\"material-icons\" style=\"font-size: 32px\">code</i><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/pidrmasiin/liiteriDnD\"><sup> Github</sup></a><br/>\n    <p>\n      Loin siis kaksi animaatiota, jotka on toteutettu React-paketteja hyödyntäen. Molemmissa on käytetty NodeJS:ää palvelinpuolella\n      ja reduxia selainpuolen tilanhallinnassa. \n    </p>\n    <mat-expansion-panel style=\"background: #e6f2ff\"(opened)=\"panelOpenState = true\"\n      (closed)=\"panelOpenState = false\">\n      <mat-expansion-panel-header>\n      <mat-panel-title>\n        Lisätietoja\n      </mat-panel-title>\n      </mat-expansion-panel-header>\n      <p style=\"background:white;padding: 2em\"> Toisessa käytin react-dnd tarjoamia komponentteja \n      ja loin simppelin \"vedä ja pudota\" -toiminnallisuuden. Jouduin myös käyttämään react-dnd-touch-backend -paketin\n      tarjoamia komponentteja, sillä animaatiot tehtiin yrityksen mainostablettia varten. \n      <br/><br/>\n      Toisessa animaatiossa käytin GreenSock Animation Platform:n gsap-pakettia ja react-lottie -pakettia, joiden\n      avulla loin simppelin pyöräilijä animaation. Paketteja ei ole käytetty aivan optimaalisella tavalla ja käytännössä\n      hyödynsinkin lähinnä setTimeout() metodia ja Reactin routeria. Routeriakaan ei tosin ole käytetty aivan \n      parhaalla mahdollisella tavalla. \n      <br/><br/>\n      Animaatiot ovat itsenäisen työn tulos ja apu olisi varmasti helpottanut työtä. Opin kuitenkin paljon\n      ja seuraavalla kerralla ohjelmointi jälkikin on varmasti siistimpää. Ohjelmoinnin lisäksi opin -projektissa\n      myös paljon yleistä startup-yrityksen ja monikansallisten tiimien toiminnasta. \n      </p>\n    </mat-expansion-panel>\n</div>"

/***/ }),

/***/ "./src/app/demola/demola.component.ts":
/*!********************************************!*\
  !*** ./src/app/demola/demola.component.ts ***!
  \********************************************/
/*! exports provided: DemolaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemolaComponent", function() { return DemolaComponent; });
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

var DemolaComponent = /** @class */ (function () {
    function DemolaComponent() {
    }
    DemolaComponent.prototype.ngOnInit = function () {
    };
    DemolaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demola',
            template: __webpack_require__(/*! ./demola.component.html */ "./src/app/demola/demola.component.html"),
            styles: [__webpack_require__(/*! ./demola.component.css */ "./src/app/demola/demola.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DemolaComponent);
    return DemolaComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n    padding: 1em; \n    padding-left: 0em;\n}\n\np {\n    text-align: justify;\n}\n\nsup {\n    font-size: 1.1em\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div>\n      <h3 style=\"padding-bottom: 1em\">Esittely</h3>\n      <p>\n            Olen 29-vuotias helsinkiläinen ja opiskelen Helsingin yliopistossa valtiotieteellisessä tiedekunnassa. \n            Opintoni ovat loppusuoralla ja tutkinnostani uupuu enää \n            pro gradu -tutkielman viimeistely sekä pari kurssia. \n            Sivuaineina olen lukenut tietojenkäsittelytiedettä ja taloustiedettä. \n            Tietojenkäsittelytieteen opintojen myötä olen innostunut ohjelmoinnista, \n            joten nyt haen työtä alalta.\n      </p>\n      <h4 style=\"padding-bottom: 0em\">Osaaminen</h4> \n          <td><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/pidrmasiin/\"><i class=\"material-icons\" style=\"font-size: 32px\">code</i><sup> Github</sup></a></td>\n      <p>\n          Olen suorittanut noin 60 opintopistettä tietojenkäsittelystä, jonka lisäksi olen \n          opiskellut ohjelmointia omatoimisesti. Näillä sivuilla avaan osaamistani kertomalla\n          tekemistäni harjoitustöistä ja esitelemällä projektejani. Ohjelmointikielistä \n          parhaiten minulla on hallussa <a routerLink=\"/javascript\">Javascript</a> ja\n          <a routerLink=\"/java\">Java</a>.\n      </p>\n      <br/>\n      <table class=\"table\">\n            <thead>\n              <tr>\n                <th scope=\"col\">Kieli</th>\n                <th scope=\"col\">Tekniikka</th>\n                <th scope=\"col\">Github</th>\n                <th scope=\"col\">Esimerkki</th>\n              </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td rowspan=\"2\">Javascript</td>\n                    <td>React/NodeJS</td>\n                    <td><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/pidrmasiin/vaalikone\"><i class=\"material-icons\" style=\"font-size: 32px\">code</i></a></td>\n                    <td><a target=\"_blank\" href=\"https://vaalitback.herokuapp.com\"><i class=\"material-icons\" style=\"font-size: 32px\">web</i></a></td>\n                    \n                </tr>\n                <tr>\n                    <td>Angular2</td>\n                    <td><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/pidrmasiin/angularcv\"><i class=\"material-icons\" style=\"font-size: 32px\">code</i></a></td>\n                    <td>Nämä sivut</td>\n                </tr>\n                <tr>\n                    <td>Java</td>\n                    <td >Spring Boot</td>\n                    <td><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/pidrmasiin/uutiset\"><i class=\"material-icons\" style=\"font-size: 32px\">code</i></a></td>\n                    <td><a target=\"_blank\" href=\"https://uutista.herokuapp.com\"><i class=\"material-icons\" style=\"font-size: 32px\">web</i></a></td>\n                </tr>\n                <tr>\n                    <td>SQL</td>\n                    <td >PostgreSQL</td>\n                    <td colspan=\"2\" rowspan=\"2\"><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/pidrmasiin/Tsoha-Bootstrap\"><i class=\"material-icons\" style=\"font-size: 32px\">code</i></a></td>\n                </tr>\n                <tr>\n                    <td colspan=\"2\">PHP</td>\n                </tr>\n        </tbody>\n    </table>\n      <h4>Työhistoria</h4>    \n      <p>\n          Tällä hetkellä työskentelen iltavahtimestarina Kinaporin palvelutalossa. \n          Lisäksi työskentelen Kivenlahden Starkilla, jossa olen työskennellyt osa-aikasena \n          noin kuuden vuoden ajan. Työhistoriani koostuukin pääasiassa varasto- \n          ja asiakaspalvelutyöstä. Olen kuitenkin suorittanut niin sanotun työelämäkurssin, jonka puitteissa\n          tein eräälle yritykselle prototyypin javascript-animaatiosta. Projektista lisää  <a routerLink=\"/demola\">täällä</a>.\n      </p>\n    </div>\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTableModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatTableModule"]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/myjava/myjava.component.css":
/*!*********************************************!*\
  !*** ./src/app/myjava/myjava.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n    padding: 1em; \n    padding-bottom: 0.1em; \n    padding-left: 0em;\n}\nh3 {\n    padding-bottom: 1em\n}\np {\n    text-align: justify;\n}\nsup {\n    font-size: 1.1em\n}\ni {\n font-size: 32px\n}"

/***/ }),

/***/ "./src/app/myjava/myjava.component.html":
/*!**********************************************!*\
  !*** ./src/app/myjava/myjava.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3>Java</h3>\n  <ul>\n      <li>Spring Boot</li>\n        <ul style=\"list-style-type:circle\">\n          <li>Spring Data JPA</li>\n        </ul>\n      <li>Thymeleaf</li>\n      <li>JUnit</li>\n    </ul>\n  <p>\n    Java toimii Helsingin yliopiston peruskurssien ohjelmointikielenä ja olenkin opetellut\n    ohjelmoimaan Javalla. Java on myös kieli, jota olen käyttänyt ehkä eniten. Java web-ohjelmoinnissa \n    olen käyttänyt apuna Spring Boot -sovellukehystä. \n  <h4>Uutissovellus</h4> \n    <i class=\"material-icons\">web</i><a style=\"padding-right: 1em\" target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://uutista.herokuapp.com/\"><sup> Sovellus</sup></a>\n    <i class=\"material-icons\">code</i><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/pidrmasiin/uutiset\"><sup> Github</sup></a><br/>\n    <p>\n    Olen tehnyt uutissovelluksen osana web-palvelinohjelmointi -kurssia. Uutissovelluksen ohjelmoinnissa apuna ovat toimineet Spring Boot, \n    Thymeleaf ja H2-tietokantamoottori. Käytössä oli relaatiotietokanta, johon oliot tallennettiin Spring Data JPA:n avulla. \n    Lisäksi kurssilla käytiin pintapuolisesti läpi Travisia ja Seleniumia testaamisen \n    apuvälineinä. Ulkoasu on tehty Bootstrapin avulla.  <br/>\n  </p>\n  <h4>Kortinlaskija</h4>    \n  <i class=\"material-icons\">code</i><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/pidrmasiin/holdemHelp\"><sup> Github</sup></a><br/>\n  <p>\n    Ensimmäinen hieman laajempi ohjelmani. Kyseessä on työpöytäsovellus, \n    joka laskee suhteita voitolle hold'emissä, kun vastustajan käsi arvataan. Ohjelman testauksessa käytettiin \n    JUnit -testejä. <br/>\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/myjava/myjava.component.ts":
/*!********************************************!*\
  !*** ./src/app/myjava/myjava.component.ts ***!
  \********************************************/
/*! exports provided: MyjavaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyjavaComponent", function() { return MyjavaComponent; });
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

var MyjavaComponent = /** @class */ (function () {
    function MyjavaComponent() {
    }
    MyjavaComponent.prototype.ngOnInit = function () {
    };
    MyjavaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myjava',
            template: __webpack_require__(/*! ./myjava.component.html */ "./src/app/myjava/myjava.component.html"),
            styles: [__webpack_require__(/*! ./myjava.component.css */ "./src/app/myjava/myjava.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyjavaComponent);
    return MyjavaComponent;
}());



/***/ }),

/***/ "./src/app/myjavascript/myjavascript.component.css":
/*!*********************************************************!*\
  !*** ./src/app/myjavascript/myjavascript.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "sup {\n    font-size: 1.1em\n}\n\nh4{\n    padding: 1em; \n    padding-bottom: 0.1em; \n    padding-left: 0em;\n}\n\nh3 {\n    padding-bottom: 1em\n}\n\np {\n    text-align: justify;\n}\n\nsup {\n    font-size: 1.1em\n}"

/***/ }),

/***/ "./src/app/myjavascript/myjavascript.component.html":
/*!**********************************************************!*\
  !*** ./src/app/myjavascript/myjavascript.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <h3>JavaScript</h3>\n    <ul>\n        <li>React</li>\n          <ul style=\"list-style-type:circle\">\n            <li>Redux</li>\n            <li>Ajax</li>\n            <li>Semantic UI</li>\n          </ul>\n        <li>NodeJS</li>\n          <ul style=\"list-style-type:circle\">\n            <li>Express</li>\n          </ul>\n        <li>REST</li>\n          <ul style=\"list-style-type:circle\">\n            <li>MongoDB/Mongoose</li>\n            <li>JSON</li>\n          </ul>\n        <li>Angular2</li>\n        <ul style=\"list-style-type:circle\">\n            <li>Material UI</li>\n        </ul>\n    </ul>\n    <p>\n      Olen oppinut Javascriptin yliopiston full stack -kurssin kautta. Kurssilla pääpaino oli \n     <i>\"React-kirjaston avulla toteutettavissa single page -sovelluksissa, ja niitä tukevissa \n      Node.js:llä toteutetuissa REST-rajapinnoissa.\"</i> Tietokantana kurssilla toimi MongoDB, jota\n      käytettiin Mongoose -kirjaston avulla. Kurssin jälkeen olen syventänyt oppimaani omatoimisesti\n      pääasiallisesti Reactia ja NodeJS:ää käyttäen. Tämän esittelysivuston ohjelmoinnissa tutustuin kuitenkin \n      pintapuolisesti myös Angular2-sovelluskehykseen.\n    <h4>Vaalikone</h4> \n    <i class=\"material-icons\" style=\"font-size: 32px\">web</i><a style=\"padding-right: 1em\" target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://vaalitback.herokuapp.com/\"><sup> Sovellus</sup></a>\n      <i class=\"material-icons\" style=\"font-size: 32px\">code</i><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/pidrmasiin/vaalikone\"><sup> Github </sup></a><sup>(vanha ulkoasu) </sup><br/>\n      <p>\n      Tämä on tällä hetkellä monimutkaisin tekemäni web-sovellus. Vaalikone on tehty Reactin ja NodeJS:n avulla. \n      Selainpuolen tilanhallinnassa on käytetty Reduxia ja palvelinpuolella pyyntöjen käsittelyssä apuna on toiminut Express. \n      </p>\n      <mat-expansion-panel style=\"background:#e6f2ff;\"(opened)=\"panelOpenState = true\"\n                           (closed)=\"panelOpenState = false\">\n        <mat-expansion-panel-header>\n        <mat-panel-title>\n        Lisätietoja\n        </mat-panel-title>\n        </mat-expansion-panel-header>\n        <p style=\"background:white;padding: 2em\"> Sovelluksen ajatuksena on vertailla eduskuntaryhmien tekemien päätöksien osuvuutta vaalikoneen käyttäjän näkemyksiin. Lisäksi ajatuksena on, että käyttäjä\n            voisi vertailla ryhmien ja edustajien käyttäytymistä ylen vaalikoneesta löytyneisiin vastauksiin. \n            <br/><br/>\n            Sovelluksessa onkin hyödynnetty ylen tarjomaa avointa dataa sen oman vaalikoneen vastauksista. Ylen data on parsittu ja \n            käsitelty sovelluksen tarpeisiin sopivaksi. Käsitellystä datasta  on sitten luotu rajapinta, jota sovellus käyttää.\n            Eduskunnassa tehdyt päätökset avataan ja lisätään avattuina REST-rajapintaan lomakkeella. \n            <br/><br/>\n            Vaalikone on yhä työnalla ja olen saanut sen ulkoasun muokkaamiseen apua ystävältä. Nykyisen ulkoasun\n            olen tehnyt tämän <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://marvelapp.com/307d052/screen/44649696\">marvelapp -prototyypin</a> \n            pohjalta. Uuden ulkoasun koodi löytyy <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://marvelapp.com/307d052/screen/44649696\">täältä</a>. \n          </p>\n        </mat-expansion-panel>\n    <br/>\n    <h4>Liiteri-animaatiot</h4>    \n    <i class=\"material-icons\" style=\"font-size: 32px\">web</i><a style=\"padding-right: 1em\" target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://liiterimap.herokuapp.com/\"><sup> Animaatiot</sup></a> <sup>(ei responsiivisia, suunniteltu 892x1517 -tabletille )</sup><br/>\n    <i class=\"material-icons\" style=\"font-size: 32px\">code</i><a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://github.com/pidrmasiin/liiteriDnD\"><sup> Github</sup></a><br/>\n    \n    <p>\n      Kaksi animaatiota, jotka on toteutettu React-paketteja hyödyntäen. Molemmissa on käytetty NodeJS:ää palvelinpuolella\n      ja reduxia selainpuolen tilanhallinnassa. \n    </p>\n    <mat-expansion-panel style=\"background: #e6f2ff\"(opened)=\"panelOpenState = true\"\n      (closed)=\"panelOpenState = false\">\n      <mat-expansion-panel-header>\n      <mat-panel-title>\n        Lisätietoja\n      </mat-panel-title>\n      </mat-expansion-panel-header>\n      <p style=\"background:white;padding: 2em\"> Toisessa käytin react-dnd tarjoamia komponentteja \n      ja loin simppelin \"vedä ja pudota\" -toiminnallisuuden. Jouduin myös käyttämään react-dnd-touch-backend -paketin\n      tarjoamia komponentteja, sillä animaatiot tehtiin yrityksen mainostablettia varten. \n      <br/><br/>\n      Toisessa animaatiossa käytin GreenSock Animation Platform:n gsap-pakettia ja react-lottie -pakettia, joiden\n      avulla loin simppelin pyöräilijä animaation. Paketteja ei ole käytetty aivan optimaalisella tavalla ja käytännössä\n      hyödynsinkin lähinnä setTimeout() metodia ja Reactin routeria. Routeriakaan ei tosin ole käytetty aivan \n      parhaalla mahdollisella tavalla. \n      <br/><br/>\n      Animaatiot ovat itsenäisen työn tulos ja apu olisi varmasti helpottanut työtä. Opin kuitenkin paljon\n      ja seuraavalla kerralla ohjelmointi jälkikin on varmasti siistimpää. Ohjelmoinnin lisäksi opin -projektissa\n      myös paljon yleistä startup-yrityksen ja monikansallisten tiimien toiminnasta. Demola -projektista lisää \n      <a routerLink=\"/demola\">demola-välilehdellä</a>.\n      </p>\n    </mat-expansion-panel>\n    "

/***/ }),

/***/ "./src/app/myjavascript/myjavascript.component.ts":
/*!********************************************************!*\
  !*** ./src/app/myjavascript/myjavascript.component.ts ***!
  \********************************************************/
/*! exports provided: MyjavascriptComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyjavascriptComponent", function() { return MyjavascriptComponent; });
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

var MyjavascriptComponent = /** @class */ (function () {
    function MyjavascriptComponent() {
    }
    MyjavascriptComponent.prototype.ngOnInit = function () {
    };
    MyjavascriptComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myjavascript',
            template: __webpack_require__(/*! ./myjavascript.component.html */ "./src/app/myjavascript/myjavascript.component.html"),
            styles: [__webpack_require__(/*! ./myjavascript.component.css */ "./src/app/myjavascript/myjavascript.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MyjavascriptComponent);
    return MyjavascriptComponent;
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

module.exports = __webpack_require__(/*! /home/petteri/angularcv/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map