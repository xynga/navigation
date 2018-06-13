import {Component, Input, Output, EventEmitter, ElementRef, Renderer, HostListener, OnDestroy} from '@angular/core';

export enum KeyCode {
  RETURN = 13,
  ENTER = 14,
  DOWN = 40
}

const SELECTOR: string = 'menu-xynga';

@Component({
    selector: SELECTOR,
    template: `
      <div>
      <ng-content></ng-content>
      </div>
    `,
    styles: [`
      :host(.open){position:absolute}:host(.open) /deep/ [body]{transform:scale(1, 1) translate(-50%, 0);opacity:1;z-index:9999;position:absolute;box-shadow:2px 2px 10px 0 rgba(0,0,0,0.3);border:1px solid #d5d5d5;margin:0;padding:12px 0;min-width:200px;background-color:#fff;font-family:"Gotham SSm A","Gotham SSm B","Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:700;text-align:left;white-space:nowrap;transition:transform 1s,opacity 1s;list-style:none}:host(.open) /deep/ [body] a{display:block;padding:12px 16px;font-size:14px;font-size:1rem;color:#262626;transition:background-color 1s}:host(.open) /deep/ [body] a:focus,:host(.open) /deep/ [body] a:hover{background-color:#f0efef;text-decoration:underline}:host{position:absolute}:host /deep/ [body]{transform:scale(0.001, 0.001) translate(-100%, -100%);opacity:0;z-index:9999;position:absolute;top:150%;left:75%;box-shadow:2px 2px 10px 0 rgba(0,0,0,0.3);border:1px solid #d5d5d5;margin:0;padding:12px 0;min-width:200px;background-color:#fff;font-family:"Gotham SSm A","Gotham SSm B","Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:700;text-align:left;white-space:nowrap;transition:transform 1s,opacity 1s;list-style:none}:host /deep/ [body] a{display:block;padding:12px 16px;font-size:14px;font-size:1rem;color:#262626;transition:background-color 1s}:host /deep/ [body] a:focus,:host /deep/ [body] a:hover{background-color:#f0efef;text-decoration:underline}
    `]
})
export class MenuComponent implements OnDestroy {
  @Input() focusActivate = false;
  @Input() clickToggle = true;
  @Input() mouseActivate = false;

  @Output() opened = new EventEmitter();
  @Output() closed = new EventEmitter();

  private focusListenerUnsubscribe: Function;
  private clickListenerUnsubscribe: Function;

  private Open: boolean = false;
  private JustActivatedByFocus: boolean = false;

  public constructor(private elementRef: ElementRef, private renderer: Renderer) {
  }

  @HostListener('mouseover', ['$event']) onHostMouseOver() {
    if (this.mouseActivate) {
      this.open();
    }
  }

  @HostListener('mouseout', ['$event']) onHostMouseOut() {
    if (this.mouseActivate) {
      this.close();
    }
  }

  @HostListener('focusin', ['$event']) onHostFocus() {
    if (this.focusActivate && !this.Open) {
      this.open();
      this.JustActivatedByFocus = true;

      // clicking on the menu open control fires both click and focus events, so
      // allow time for the click event to be ignored by our click @HostListener

      setTimeout(() => {
        this.JustActivatedByFocus = false;
      }, 200);
    }
  }

  @HostListener('click', ['$event']) onHostClick() {
    // clicking on the menu open control fires both click and focus events, so
    // there is no need to open a menu that was just opened by the focus event

    if (this.JustActivatedByFocus) {
      this.JustActivatedByFocus = false;
      return;
    }

    if (this.clickToggle) {
      this.Open ? this.close() : this.open();
      return;
    }

    if (!this.Open) {
      this.open();
    }
  }

  @HostListener('keydown', ['$event']) onHostKeydown(event: KeyboardEvent) {
      if (<number>KeyCode.DOWN === event.keyCode || <number>KeyCode.ENTER === event.keyCode || <number>KeyCode.RETURN === event.keyCode) {
          this.open();
      }
  }

  @HostListener('blur', ['$event']) onHostBlur(event: FocusEvent) {
    if (event.relatedTarget && event.relatedTarget !== this.elementRef.nativeElement) {
      this.close();
    }
  }

  ngOnDestroy(): void {
    this.removeListeners();
  }

  private checkFocus(event: Event): void {
    if (event.target !== this.elementRef.nativeElement && !this.elementRef.nativeElement.contains(event.target)) {
      this.close();
    }
  }

  private open(): void {
    this.elementRef.nativeElement.classList.add('open');

    this.Open = true;

    this.addListeners();

    this.opened.emit(this.elementRef.nativeElement);
  }

  private close(): void {
    this.elementRef.nativeElement.classList.remove('open');

    this.Open = false;

    this.removeListeners();

    this.closed.emit(this.elementRef.nativeElement);
  }

  private addListeners(): void {
    this.focusListenerUnsubscribe = this.renderer.listenGlobal('document', 'focus', this.checkFocus.bind(this));
    this.clickListenerUnsubscribe = this.renderer.listenGlobal('document', 'click', this.checkFocus.bind(this));
  }

  private removeListeners(): void {
    if (null != this.clickListenerUnsubscribe) {
      this.clickListenerUnsubscribe();
    }

    if (null != this.focusListenerUnsubscribe) {
      this.focusListenerUnsubscribe();
    }
  }
}
