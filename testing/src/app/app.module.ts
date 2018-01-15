import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NavigationModule} from 'xynga-navigation';
import {Routes, RouterModule} from "@angular/router";
import {TabOneComponent} from "./example-tabs/tab-one.component";
import {TabTwoComponent} from "./example-tabs/tab-two.component";
import {TabThreeComponent} from "./example-tabs/tab-three.component";



const routes: Routes = [
  {path: 'tab1', component: TabOneComponent},
  {path: 'tab2', component: TabTwoComponent},
  {path: 'tab3', component: TabThreeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TabOneComponent,
    TabTwoComponent,
    TabThreeComponent
  ],
  imports: [
    BrowserModule,
    NavigationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
