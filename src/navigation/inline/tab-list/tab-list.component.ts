import {Component, Input} from '@angular/core';

const SELECTOR: string = 'tab-list';

export interface ITab {
  title: string;
  route: string;
}

@Component({
  selector: SELECTOR,
  template: `
    <div class="tabNav">
      <ul class="tabNav__tabs">
        <li *ngFor="let tab of tabs" class="tabNav__tabItem" role="presentation">
          <a [routerLink]="tab.route" class="tabNav__link" role="tab" aria-selected="true" tabindex="0">{{tab.title}}</a>
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .tabNav__tabs{display:none}@media screen and (min-width: 768px){.tabNav__tabs{display:flex;flex-wrap:nowrap;justify-content:center;margin:0;padding:0;width:100%;list-style:none}}.tabNav__tabItem{overflow:hidden;position:relative;flex:1;margin:0;border:1px solid #d5d5d5;border-left:0;transition:background-color 1s;display:block;border-bottom-color:transparent;background-color:#fff;color:#262626}.tabNav__tabItem:first-child{border-left:1px solid #d5d5d5}.tabNav__link{display:block;padding:15px;line-height:1.25em;font-family:'Gotham SSm A', 'Gotham SSm B', 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:13px;font-size:.92857rem;font-weight:500;color:#266eb3;text-align:left;cursor:pointer}@media screen and (min-width: 768px){.tabNav__link{display:flex;align-items:center;justify-content:center;height:100%;text-align:center}}.is-active .tabNav__link{color:#262626}.tabNav__link:focus,.tabNav__link:hover{text-decoration:underline;color:#262626}.tabNav__contentContainer{border:1px solid #d5d5d5;border-bottom:0}.tabNav__contentContainer:last-child{border-bottom:1px solid #d5d5d5}@media screen and (min-width: 768px){.tabNav__contentContainer:last-child{border:0}}@media screen and (min-width: 768px){.tabNav__contentContainer{border:0}}.tabNav__header{margin:0;background-color:#f0efef;transition:background-color 1s;cursor:pointer;-webkit-touch-callout:none;user-select:none}.tabNav__header.is-active{border-bottom:none}@media screen and (min-width: 768px){.tabNav__header{display:none}}.tabNav__content{display:none;padding:30px;background-color:#fff}@media screen and (min-width: 768px){.tabNav__content{border:1px solid #d5d5d5;border-top:0}}.panel .tabNav{margin:-1px -1px 0}.tabNav__container{margin-top:-1px}
  `]
})

export class TabListComponent {
  @Input() tabs: ITab[] = [];
}
