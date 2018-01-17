import { TestBed, async } from '@angular/core/testing';
import { MenuComponent, TabListComponent } from 'xynga-navigation';

describe('Menu-Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuComponent
      ],
    }).compileComponents();
  }));
  it('should close menu when "host focus" event is triggered', async(() => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menu = fixture.debugElement.componentInstance;
    menu.focusActive = false;
    menu.onHostFocus();
    fixture.detectChanges();
    expect(menu.Open).not.toBeTruthy();
  }));
  it('should open menu after click event is triggered', async(() => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menu = fixture.debugElement.componentInstance;
    menu.clickToggle = true;
    menu.onHostClick();
    fixture.detectChanges();
    expect(menu.Open).toBeTruthy();
  }));
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
/*  Cannot test Listeners with toHaveBeenCalled() because they are not methods of the menu class

 it('should remove clickListener', async(() => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menu = fixture.debugElement.componentInstance;
    spyOn(menu, 'clickListenerUnsubscribe');
    menu.addListeners();
    menu.removeListeners();
    fixture.detectChanges();
    expect(menu.clickListenerUnsubscribe).toHaveBeenCalled();
  }));
  it('should remove focusListener', async(() => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menu = fixture.debugElement.componentInstance;
    spyOn(menu, 'focusListenerUnsubscribe');
    menu.addListeners();
    menu.removeListeners();
    fixture.detectChanges();
    expect(menu.focusListenerUnsubscribe).toHaveBeenCalled();
  }));
  */

});
