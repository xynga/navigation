import { EventEmitter, ElementRef, Renderer, OnDestroy } from '@angular/core';
export declare enum KeyCode {
    RETURN = 13,
    ENTER = 14,
    DOWN = 40,
}
export declare class MenuDirective implements OnDestroy {
    private elementRef;
    private renderer;
    focusActivate: boolean;
    clickToggle: boolean;
    mouseActivate: boolean;
    opened: EventEmitter<{}>;
    closed: EventEmitter<{}>;
    private focusListenerUnsubscribe;
    private clickListenerUnsubscribe;
    private Open;
    private JustActivatedByFocus;
    constructor(elementRef: ElementRef, renderer: Renderer);
    onHostMouseOver(): void;
    onHostMouseOut(): void;
    onHostFocus(): void;
    onHostClick(): void;
    onHostKeydown(event: KeyboardEvent): void;
    onHostBlur(event: FocusEvent): void;
    ngOnDestroy(): void;
    private checkFocus(event);
    private open();
    private close();
    private addListeners();
    private removeListeners();
}
