import { Component } from '@angular/core';
import {ITab} from 'xynga-navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  selection: string = null;

  public onMenuItemClick(selection: string): void {
    this.selection = selection;
  }

  public onMenuOpen(menuRootElement: HTMLElement): void {
    console.dir(menuRootElement);
  }

  public onMenuClose(menuRootElement: HTMLElement): void {
    console.dir(menuRootElement);
  }

  tabs: ITab[] = [
    {
      title: 'Tab1',
      route: '/tab1'
    },
    {
      title: 'Tab2',
      route: '/tab2'
    },
    {
      title: 'Tab3',
      route: '/tab3'
    }
  ];
}

