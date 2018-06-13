import {Component, Input} from '@angular/core';

const SELECTOR: string = 'tab-list';

export interface ITab {
  title: string;
  route: string;
  class?: string;
}

@Component({
  selector: SELECTOR,
  templateUrl: './tab-list.html',
  styleUrls : ['./tab-list.scss']
})

export class TabListComponent {
  @Input() tabs: ITab[] = [];

  setActive(myTab: ITab){
    for(let tab of this.tabs){
      tab.class = '';
    }
    myTab.class = 'active';
  }
}
