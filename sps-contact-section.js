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
var SpsContactSection = (function () {
    function SpsContactSection() {
    }
    __decorate([
        core_1.Input("contact-text"), 
        __metadata('design:type', Object)
    ], SpsContactSection.prototype, "contactText", void 0);
    __decorate([
        core_1.Input("contact-email"), 
        __metadata('design:type', Object)
    ], SpsContactSection.prototype, "contactEmail", void 0);
    __decorate([
        core_1.Input("contact-phone"), 
        __metadata('design:type', Object)
    ], SpsContactSection.prototype, "contactPhone", void 0);
    SpsContactSection = __decorate([
        core_1.Component({
            selector: 'sps-contact-section',
            template: "\n\t\t<section id=\"contact\" class=\"section-padding bg-image overlay-dark dark-bg text-center\" data-stellar-background-ratio=\"0.5\" data-background-img=\"img/full/33.jpg\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<p>{{contactText}}</p>\n\t\t\t\t\t\t<p *ngIf=\"contactEmail\"><a href=\"mailto:{{contactEmail}}\" target=\"_top\">{{contactEmail}}</a><p>\n\t\t\t\t\t\t<p *ngIf=\"contactPhone\">contactPhone</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t",
            styles: ["\n\t\t.dark-bg a:hover {color: white;}\n\t"]
        }), 
        __metadata('design:paramtypes', [])
    ], SpsContactSection);
    return SpsContactSection;
}());
exports.SpsContactSection = SpsContactSection;
//# sourceMappingURL=sps-contact-section.js.map