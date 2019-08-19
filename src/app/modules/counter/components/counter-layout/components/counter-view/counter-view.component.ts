import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-counter-view',
    templateUrl: './counter-view.component.html',
    styleUrls: ['./counter-view.component.less']
})
export class CounterViewComponent implements OnInit {

    @Input() count: number;

    constructor() { }

    ngOnInit() {
    }

}
