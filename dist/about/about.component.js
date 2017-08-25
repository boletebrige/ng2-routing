"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// this is beacause of type safety it isn't necessary
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var users = [
    {
        id: 1,
        name: 'Josip',
        username: 'boletebrige',
        avatar: 'https://pbs.twimg.com/profile_images/827146559192170496/hxBWvDiC_400x400.jpg'
    },
    {
        id: 2,
        name: 'Nema',
        username: 'nikad',
        avatar: 'https://pbs.twimg.com/profile_images/738655910067851264/kMTd4Z8c_400x400.jpg'
    },
    {
        id: 3,
        name: 'Niko',
        username: 'nije',
        avatar: 'https://pbs.twimg.com/profile_images/693910281945243648/Fov72uA0_400x400.jpg'
    }
];
var AboutComponent = (function () {
    function AboutComponent() {
        this.users = users;
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'about-page',
        templateUrl: './app/about/about.component.html',
        styleUrls: ['./app/about/about.component.css']
    })
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map