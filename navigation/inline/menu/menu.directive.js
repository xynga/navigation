import { Directive, Input, Output, EventEmitter, ElementRef, Renderer, HostListener } from '@angular/core';
export var KeyCode;
(function (KeyCode) {
    KeyCode[KeyCode["RETURN"] = 13] = "RETURN";
    KeyCode[KeyCode["ENTER"] = 14] = "ENTER";
    KeyCode[KeyCode["DOWN"] = 40] = "DOWN";
})(KeyCode || (KeyCode = {}));
var SELECTOR = '[menu]';
var MenuDirective = /** @class */ (function () {
    function MenuDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.focusActivate = false;
        this.clickToggle = true;
        this.mouseActivate = false;
        this.opened = new EventEmitter();
        this.closed = new EventEmitter();
        this.Open = false;
        this.JustActivatedByFocus = false;
    }
    MenuDirective.prototype.onHostMouseOver = function () {
        if (this.mouseActivate) {
            this.open();
        }
    };
    MenuDirective.prototype.onHostMouseOut = function () {
        if (this.mouseActivate) {
            this.close();
        }
    };
    MenuDirective.prototype.onHostFocus = function () {
        var _this = this;
        if (this.focusActivate && !this.Open) {
            this.open();
            this.JustActivatedByFocus = true;
            // clicking on the menu open control fires both click and focus events, so
            // allow time for the click event to be ignored by our click @HostListener
            setTimeout(function () {
                _this.JustActivatedByFocus = false;
            }, 200);
        }
    };
    MenuDirective.prototype.onHostClick = function () {
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
    };
    MenuDirective.prototype.onHostKeydown = function (event) {
        if (KeyCode.DOWN === event.keyCode || KeyCode.ENTER === event.keyCode || KeyCode.RETURN === event.keyCode) {
            this.open();
        }
    };
    MenuDirective.prototype.onHostBlur = function (event) {
        if (event.relatedTarget && event.relatedTarget !== this.elementRef.nativeElement) {
            this.close();
        }
    };
    MenuDirective.prototype.ngOnDestroy = function () {
        this.removeListeners();
    };
    MenuDirective.prototype.checkFocus = function (event) {
        if (event.target !== this.elementRef.nativeElement && !this.elementRef.nativeElement.contains(event.target)) {
            this.close();
        }
    };
    MenuDirective.prototype.open = function () {
        this.elementRef.nativeElement.classList.add('open');
        this.Open = true;
        this.addListeners();
        this.opened.emit(this.elementRef.nativeElement);
    };
    MenuDirective.prototype.close = function () {
        this.elementRef.nativeElement.classList.remove('open');
        this.Open = false;
        this.removeListeners();
        this.closed.emit(this.elementRef.nativeElement);
    };
    MenuDirective.prototype.addListeners = function () {
        this.focusListenerUnsubscribe = this.renderer.listenGlobal('document', 'focus', this.checkFocus.bind(this));
        this.clickListenerUnsubscribe = this.renderer.listenGlobal('document', 'click', this.checkFocus.bind(this));
    };
    MenuDirective.prototype.removeListeners = function () {
        if (null != this.clickListenerUnsubscribe) {
            this.clickListenerUnsubscribe();
        }
        if (null != this.focusListenerUnsubscribe) {
            this.focusListenerUnsubscribe();
        }
    };
    MenuDirective.decorators = [
        { type: Directive, args: [{
                    selector: SELECTOR
                },] },
    ];
    /** @nocollapse */
    MenuDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer, },
    ]; };
    MenuDirective.propDecorators = {
        'focusActivate': [{ type: Input },],
        'clickToggle': [{ type: Input },],
        'mouseActivate': [{ type: Input },],
        'opened': [{ type: Output },],
        'closed': [{ type: Output },],
        'onHostMouseOver': [{ type: HostListener, args: ['mouseover', ['$event'],] },],
        'onHostMouseOut': [{ type: HostListener, args: ['mouseout', ['$event'],] },],
        'onHostFocus': [{ type: HostListener, args: ['focusin', ['$event'],] },],
        'onHostClick': [{ type: HostListener, args: ['click', ['$event'],] },],
        'onHostKeydown': [{ type: HostListener, args: ['keydown', ['$event'],] },],
        'onHostBlur': [{ type: HostListener, args: ['blur', ['$event'],] },],
    };
    return MenuDirective;
}());
export { MenuDirective };
//# sourceMappingURL=menu.directive.js.map