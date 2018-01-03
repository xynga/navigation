import {TabListComponent} from "./tab-list/tab-list.component";
import {NgModule} from "@angular/core";
import {MenuDirective} from "../menu/menu.directive";
import {CommonModule} from "@angular/common";
import {MenuComponent} from "../menu/menu.component";
import {RouterModule} from "@angular/router";

@NgModule({
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
})

export class NavigationModule {}
