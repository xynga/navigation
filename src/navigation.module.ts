import {TabListComponent} from "./tab-list/tab-list.component";
import {NgModule} from "@angular/core";

import {CommonModule} from "@angular/common";
import {MenuComponent} from "./menu/menu.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    TabListComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    TabListComponent
  ],
})

export class NavigationModule {}
