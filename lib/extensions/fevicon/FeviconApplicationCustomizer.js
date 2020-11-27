var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
import * as strings from 'FeviconApplicationCustomizerStrings';
require('./Style.css');
var LOG_SOURCE = 'FeviconApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var FeviconApplicationCustomizer = /** @class */ (function (_super) {
    __extends(FeviconApplicationCustomizer, _super);
    function FeviconApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FeviconApplicationCustomizer.prototype.onInit = function () {
        Log.info(LOG_SOURCE, "Initialized " + strings.Title);
        var url = this.properties.testMessage;
        // if (!message) {
        //   message = '(No properties were provided.)';
        // }
        if (!url) {
            console.log(url);
            alert(url);
        }
        else {
            console.log(this.context);
            var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
            link.setAttribute('type', 'image/x-icon');
            link.setAttribute('rel', 'shortcut icon');
            link.setAttribute('href', this.context.pageContext.web.absoluteUrl + "/Shared%20Documents/FevIcon.jpg");
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        return Promise.resolve();
    };
    __decorate([
        override
    ], FeviconApplicationCustomizer.prototype, "onInit", null);
    return FeviconApplicationCustomizer;
}(BaseApplicationCustomizer));
export default FeviconApplicationCustomizer;
//# sourceMappingURL=FeviconApplicationCustomizer.js.map