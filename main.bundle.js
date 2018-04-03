webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".live-stream-app {\r\n    width: 100%;\r\n}\r\n\r\nheader {\r\n    background: #205081;\r\n    color: white;\r\n    padding: 8px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.title{\r\n    font-size: 20px;\r\n    font-style: italic;\r\n}\r\n\r\n.router-div {\r\n    margin: 0 20px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"live-stream-app\">\n  \n  <header>\n    <div class=\"title\">\n      Live Stream Application\n    </div>\n  </header>\n\n   <div class=\"router-div\">\n      <router-outlet></router-outlet>\n   </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__googleAPI_service__ = __webpack_require__("./src/app/googleAPI.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_guard_service__ = __webpack_require__("./src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__live_stream_live_stream_component__ = __webpack_require__("./src/app/live-stream/live-stream.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__live_stream_live_stream_component__["a" /* LiveStreamComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot([
                    {
                        path: 'login',
                        component: __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                        data: { title: 'Login' }
                    },
                    {
                        path: 'liveStream',
                        component: __WEBPACK_IMPORTED_MODULE_9__live_stream_live_stream_component__["a" /* LiveStreamComponent */],
                        canActivate: [__WEBPACK_IMPORTED_MODULE_7__auth_guard_service__["a" /* AuthGuard */]]
                    },
                    {
                        path: '',
                        redirectTo: '/login',
                        pathMatch: 'full'
                    },
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__googleAPI_service__["a" /* GoogleAPIService */], __WEBPACK_IMPORTED_MODULE_7__auth_guard_service__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('token')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/googleAPI.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleAPIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoogleAPIService = /** @class */ (function () {
    function GoogleAPIService(http) {
        this.http = http;
    }
    /**
     * Calls Google API to get the chat id which is required to get chat messages
     */
    GoogleAPIService.prototype.getChatId = function () {
        var token = localStorage.getItem('token');
        var params = {
            'access_token': token,
            'part': "id, snippet, liveStreamingDetails",
            'id': "y3niFzo5VLI"
        };
        return this.http.get('https://www.googleapis.com/youtube/v3/videos', { params: params });
    };
    /**
     * Calls Google API to get live chat messages for the live stream
     * @param liveChatId
     */
    GoogleAPIService.prototype.getChatMessages = function (liveChatId) {
        var token = localStorage.getItem('token');
        var params = {
            'access_token': token,
            'part': "id, snippet, authorDetails",
            'liveChatId': liveChatId
        };
        return this.http.get('https://www.googleapis.com/youtube/v3/liveChat/messages', { params: params });
    };
    GoogleAPIService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GoogleAPIService);
    return GoogleAPIService;
}());



/***/ }),

/***/ "./src/app/live-stream/live-stream.component.css":
/***/ (function(module, exports) {

module.exports = ".chat-messages>ul {\r\n    width:600px;\r\n    height:500px;\r\n    overflow: scroll;\r\n}"

/***/ }),

/***/ "./src/app/live-stream/live-stream.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n        <div class=\"col-6\">\r\n                <iframe id=\"existing-iframe-example\"\r\n                width=\"640\" height=\"360\"\r\n                src=\"https://www.youtube.com/embed/y3niFzo5VLI?enablejsapi=1&autoplay=1\"\r\n                frameborder=\"0\"\r\n                style=\"border: solid 4px #37474F\"></iframe>\r\n        </div>\r\n        \r\n        <div class=\"chat-messages\">\r\n                <p>Chat Messages</p>\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchInput\"\r\n             placeholder=\"Filter list by entering a user name\" /><br>\r\n             <button class=\"btn btn-primary\" (click)=\"filterChatList()\">Filter</button><br><br>\r\n                <ul>\r\n                        <li *ngFor=\"let chatMessge of chatMessagesModel\">\r\n                          {{ chatMessge.snippet.displayMessage }}\r\n                        </li>\r\n                </ul>\r\n        </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/live-stream/live-stream.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveStreamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__googleAPI_service__ = __webpack_require__("./src/app/googleAPI.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LiveStreamComponent = /** @class */ (function () {
    function LiveStreamComponent(googleAPIService, router) {
        this.googleAPIService = googleAPIService;
        this.router = router;
        this.searchInput = '';
    }
    LiveStreamComponent.prototype.ngOnInit = function () {
        this.executeAPICalls();
    };
    /**
     * Gets the live chat messages for the specified live stream
     */
    LiveStreamComponent.prototype.executeAPICalls = function () {
        var _this = this;
        this.googleAPIService.getChatId().mergeMap(function (data) {
            var chatId;
            for (var _i = 0, _a = data['items']; _i < _a.length; _i++) {
                var item = _a[_i];
                chatId = item.liveStreamingDetails.activeLiveChatId;
                if (chatId != null) {
                    break;
                }
            }
            return _this.googleAPIService.getChatMessages(chatId);
        }).subscribe(function (res) {
            _this.chatMessages = res['items'];
            _this.chatMessagesModel = _this.chatMessages;
            // updates the chat list based on the polling returned by the chat messages
            _this.timeoutId = setTimeout(function () {
                _this.executeAPICalls();
            }, res['pollingIntervalMillis']);
        }, function (error) {
            _this.router.navigate(['login']);
            window.location.reload(true);
            console.log(error);
        });
    };
    /**
     * Filters the chat list given a user name.
     * If no user name is specified we show the whole list
     */
    LiveStreamComponent.prototype.filterChatList = function () {
        var _this = this;
        if (this.searchInput.length > 0) {
            this.searchInput = this.searchInput.toLowerCase();
            this.chatMessagesModel = this.chatMessages.filter(function (item) {
                return item.authorDetails.displayName.toLowerCase() === _this.searchInput;
            });
        }
        else {
            this.chatMessagesModel = this.chatMessages;
        }
    };
    LiveStreamComponent.prototype.ngOnDestroy = function () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    };
    LiveStreamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-live-stream',
            template: __webpack_require__("./src/app/live-stream/live-stream.component.html"),
            styles: [__webpack_require__("./src/app/live-stream/live-stream.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__googleAPI_service__["a" /* GoogleAPIService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LiveStreamComponent);
    return LiveStreamComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".login-form {\r\n    margin: 0 auto;\r\n    width: 600px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"login-page\">\n  <div class=\"login-form\">\n    <h5>Sign In using your google account to join the live stream</h5>\n    <button class=\"btn btn-primary\" (click)=\"login()\">Sign In</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, zone) {
        var _this = this;
        this.router = router;
        this.zone = zone;
        this.googleClientId = '822051958083-mp3anh7elnegkgabcsagl2dnss7917cv.apps.googleusercontent.com';
        this.googleApiScope = [
            'https://www.googleapis.com/auth/youtube'
        ].join(' ');
        // intialize google client i.e the app 
        gapi.load('auth2', function () {
            gapi.auth2.init({
                client_id: _this.googleClientId,
                scope: _this.googleApiScope
            });
            _this.googleAuth = gapi.auth2.getAuthInstance();
        });
    }
    /**
     * Starts the Auth 2.0 flow to login the user
     */
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.googleAuth.signIn().then(function (res) {
            var googleUser = _this.googleAuth.currentUser.get();
            localStorage.setItem('token', googleUser.getAuthResponse().access_token);
            _this.router.navigate(['liveStream']);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map