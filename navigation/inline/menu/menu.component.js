import { Component } from "@angular/core";
var SELECTOR = 'menu-component';
var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.decorators = [
        { type: Component, args: [{
                    selector: SELECTOR,
                    template: "\n    <ng-content></ng-content>\n  ",
                    styles: ["\n    [menu]{display:block}[menu]:not(.open)>[body]{transform:scale(0.001, 0.001) translate(-100%, -100%);opacity:0}[menu].open>[body]{transform:scale(1, 1) translate(-50%, 0);opacity:1}[menu]>[body]{z-index:9999;position:absolute;left:50%;box-shadow:2px 2px 10px 0 rgba(0,0,0,0.3);border:1px solid #d5d5d5;margin:0;padding:12px 0;min-width:200px;background-color:#fff;font-family:\"Gotham SSm A\",\"Gotham SSm B\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-weight:700;text-align:left;white-space:nowrap;transition:transform 1s,opacity 1s;list-style:none}[menu]>[body] a{display:block;padding:12px 16px;font-size:14px;font-size:1rem;color:#262626;transition:background-color 1s}[menu]>[body] a:focus,[menu]>[body] a:hover{background-color:#f0efef;text-decoration:underline}\n  "]
                },] },
    ];
    /** @nocollapse */
    MenuComponent.ctorParameters = function () { return []; };
    return MenuComponent;
}());
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map