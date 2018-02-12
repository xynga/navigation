import { TestBed, async } from '@angular/core/testing';
import { MenuComponent, TabListComponent, ITab } from 'xynga-navigation';
import { NO_ERRORS_SCHEMA } from '@angular/core';

enum KeyCode {
  RETURN = 13,
  ENTER = 14,
  DOWN = 40
}

describe('Menu-Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuComponent
      ],
    }).compileComponents();
  }));
  it('should call this.open() if mouseActivate is true when onHostMouseOver is called', async ( () => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menu = fixture.debugElement.componentInstance;
    const spy = spyOn(menu, 'open').and.stub();
    menu.mouseActivate = true;
    menu.onHostMouseOver();
    expect(spy).toHaveBeenCalled();
  }));
  it('should NOT call this.open() if mouseActivate is false when onHostMouseOver is called', async ( () => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menu = fixture.debugElement.componentInstance;
    const spy = spyOn(menu, 'open').and.stub();
    menu.mouseActivate = false;
    menu.onHostMouseOver();
    expect(spy).not.toHaveBeenCalled();
  }));
  it('should call this.close() if mouseActivate is true when onHostMouseOut is called', async ( () => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menu = fixture.debugElement.componentInstance;
    const spy = spyOn(menu, 'close').and.stub();
    menu.mouseActivate = true;
    menu.onHostMouseOut();
    expect(spy).toHaveBeenCalled();
  }));
  it('should NOT call this.close() if mouseActivate is false when onHostMouseOut is called', async ( () => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menu = fixture.debugElement.componentInstance;
    const spy = spyOn(menu, 'close').and.stub();
    menu.mouseActivate = false;
    menu.onHostMouseOut();
    expect(spy).not.toHaveBeenCalled();
  }));
  it('should close menu when "host focus" event is triggered', async(() => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menu = fixture.debugElement.componentInstance;
    menu.focusActive = false;
    menu.justActivatedByFocus = false;
    menu.onHostFocus();
    expect(menu.justActivatedByFocus).not.toBeTruthy();
  }));
  it('should be activated by focus when onHostFocus is called', async(() => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menu = fixture.debugElement.componentInstance;
    menu.focusActivate = true;
    menu.justActivatedByFocus = false;
    menu.Open = false;
    const spy = spyOn(menu, 'open').and.stub();
    menu.onHostFocus();
    expect(spy).toHaveBeenCalled();

  }));
  it('should set justActivatedByFocus to false if it is true', async(() => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menu = fixture.debugElement.componentInstance;
    menu.JustActivatedByFocus = true;
    menu.onHostClick();
    fixture.detectChanges();
    expect(menu.JustActivatedByFocus).toBeFalsy();
  }));
  it('should open menu after click event is triggered', async(() => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menu = fixture.debugElement.componentInstance;
    menu.clickToggle = true;
    menu.onHostClick();
    fixture.detectChanges();
    expect(menu.Open).toBeTruthy();
  }));
  it('should call open if open is false', async(() => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menu = fixture.debugElement.componentInstance;
    menu.Open = false;
    menu.clickToggle = false;
    menu.JustActivatedByFocus = false;
    const spy = spyOn(menu, 'open').and.stub();
    menu.onHostClick();
    expect(spy).toHaveBeenCalled();
  }));
  it('should not call any functions', async(() => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menu = fixture.debugElement.componentInstance;
    menu.Open = true;
    menu.clickToggle = false;
    menu.JustActivatedByFocus = false;
    const spy = spyOn(menu, 'open').and.stub();
    menu.onHostClick();
    expect(spy).not.toHaveBeenCalled();
  }));
  it('should call close when clickToggle is true and Open is true', async(() => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menu = fixture.debugElement.componentInstance;
    menu.Open = true;
    menu.clickToggle = true;
    menu.JustActivatedByFocus = false;
    const spy = spyOn(menu, 'close').and.stub();
    menu.onHostClick();
    expect(spy).toHaveBeenCalled();
  }));
  // it('should call open if the down key is pressed', async(() => {
  //   const fixture = TestBed.createComponent(MenuComponent);
  //   const menu = fixture.debugElement.componentInstance;
  //   const event = new KeyboardEvent('keydown', {'key' : 'ArrowDown'});
  //   const spy = spyOn(menu, 'open').and.stub();
  //   console.log(event.keyCode);
  //   menu.onHostKeydown(event);
  //   expect(spy).toHaveBeenCalled();
  //
  // }));
  it('should close menu after "mouse over" event is triggered', async(() => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menu = fixture.debugElement.componentInstance;
    menu.mouseActivate = false;
    menu.onHostMouseOver();
    fixture.detectChanges();
    expect(menu.Open).not.toBeTruthy();
  }));
  it('should open menu after "mouse out" event is triggered', async(() => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menu = fixture.debugElement.componentInstance;
    menu.Open = true;
    menu.mouseActivate = false;
    menu.onHostMouseOut();
    fixture.detectChanges();
    expect(menu.Open).toBeTruthy();
  }));

  it('should emit a nativeElement (HTMLElement) using opened output', async(() => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menu = fixture.debugElement.componentInstance;
    spyOn(menu.opened, 'emit');
    menu.open();
    fixture.detectChanges();
    expect(menu.opened.emit).toHaveBeenCalledWith(jasmine.any(HTMLElement));
  }));
  it('should emit a nativeElement (HTMLElement) using closed output', async(() => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menu = fixture.debugElement.componentInstance;
    spyOn(menu.closed, 'emit');
    menu.close();
    fixture.detectChanges();
    expect(menu.closed.emit).toHaveBeenCalledWith(jasmine.any(HTMLElement));
  }));
  it('should listen for a focus event and bind checkFocus', async(() => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menu = fixture.debugElement.componentInstance;
    spyOn(menu.checkFocus, 'bind');
    menu.open();
    menu.onHostFocus();
    fixture.detectChanges();
    expect(menu.checkFocus.bind).toHaveBeenCalled();
  }));
});

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
