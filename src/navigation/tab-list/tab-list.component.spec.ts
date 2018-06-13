import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {ITab, TabListComponent} from "./tab-list.component";

describe('Tab-List-Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TabListComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ] // ignore RouterLink
    }).compileComponents();
  }));
  it('should populate template element with name of tag', async(() => {
    const fixture = TestBed.createComponent(TabListComponent);
    const tabList = fixture.debugElement.componentInstance;
    const testTabs: ITab[] = [{title: 'Tab1', route: ''}];
    tabList.tabs = testTabs;

    fixture.detectChanges();
    expect(document.getElementsByClassName('tabNav__link')[0].innerHTML).toContain('Tab1');
  }));
});
