import {Component, Input} from '@angular/core';

const SELECTOR: string = 'tab-list';

export interface ITab {
  title: string;
  route: string;
}

@Component({
  selector: SELECTOR,
  templateUrl: './tab-list.html',
  styleUrls : ['./tab-list.scss']
})

export class TabListComponent {
  @Input() tabs: ITab[] = [];
}
