import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-counter-button',
    templateUrl: './counter-button.component.html',
    styleUrls: ['./counter-button.component.less']
})
export class CounterButtonComponent {

    @Input() action: string;

    @Output() buttonClick = new EventEmitter<void>();

    constructor() { }

    onClick() {
        this.buttonClick.emit();
    }

}
