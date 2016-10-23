"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var AppComponent_1 = require('./component/AppComponent');
var HeroComponent_1 = require('./component/HeroComponent');
var HeroDetailComponent_1 = require('./component/HeroDetailComponent');
var DashboardComponent_1 = require("./component/DashboardComponent");
var HeroService_1 = require("./service/HeroService");
var AppRoutingModule_1 = require("./AppRoutingModule");
var http_1 = require("@angular/http");
var in_memory_web_api_module_1 = require("angular-in-memory-web-api/in-memory-web-api.module");
var in_memory_data_service_1 = require("./service/in-memory-data.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                AppRoutingModule_1.AppRoutingModule,
                http_1.HttpModule,
                in_memory_web_api_module_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService)
            ],
            declarations: [
                AppComponent_1.AppComponent,
                DashboardComponent_1.DashboardComponent,
                HeroComponent_1.HeroComponent,
                HeroDetailComponent_1.HeroDetailComponent
            ],
            providers: [HeroService_1.HeroService],
            bootstrap: [AppComponent_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
