import { TabListComponent } from "./tab-list/tab-list.component";
import { NgModule } from "@angular/core";
import { MenuDirective } from "./menu/menu.directive";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu/menu.component";
import { RouterModule } from "@angular/router";
var NavigationModule = /** @class */ (function () {
    function NavigationModule() {
    }
    NavigationModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        TabListComponent,
                        MenuComponent,
                        MenuDirective,
                    ],
                    imports: [
                        CommonModule,
                        RouterModule
                    ],
                    exports: [
                        MenuComponent,
                        MenuDirective,
                        TabListComponent,
                    ],
                },] },
    ];
    /** @nocollapse */
    NavigationModule.ctorParameters = function () { return []; };
    return NavigationModule;
}());
export { NavigationModule };
//# sourceMappingURL=navigation.module.js.map