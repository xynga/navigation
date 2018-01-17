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
  it('should have menu closed when "host focus" event is triggered', async(() => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menu = fixture.debugElement.componentInstance;
    menu.focusActive = false;
    menu.onHostFocus();
    fixture.detectChanges();
    expect(menu.Open).not.toBeTruthy();
  }));
  it('should have menu open after click event is triggered', async(() => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menu = fixture.debugElement.componentInstance;
    menu.clickToggle = true;
    menu.onHostClick();
    fixture.detectChanges();
    expect(menu.Open).toBeTruthy();
  }));
  it('should have menu closed after "mouse over" event is triggered', async(() => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menu = fixture.debugElement.componentInstance;
    menu.mouseActivate = false;
    menu.onHostMouseOver();
    fixture.detectChanges();
    expect(menu.Open).not.toBeTruthy();
  }));
  it('should have menu open after "mouse out" event is triggered', async(() => {
    const fixture = TestBed.createComponent(MenuComponent);
    const menu = fixture.debugElement.componentInstance;
    menu.Open = true;
    menu.mouseActivate = false;
    menu.onHostMouseOut();
    fixture.detectChanges();
    expect(menu.Open).toBeTruthy();
  }));
});
