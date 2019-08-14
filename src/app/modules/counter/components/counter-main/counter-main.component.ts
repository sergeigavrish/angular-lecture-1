import { Component, OnInit } from '@angular/core';

import { Actions } from '../../types';

@Component({
    selector: 'app-counter-main',
    templateUrl: './counter-main.component.html',
    styleUrls: ['./counter-main.component.less']
})
export class CounterMainComponent implements OnInit {

    counter = 0;

    readonly actions: Record<Actions, Actions> = {
        add: Actions.ADD,
        reduce: Actions.REDUCE
    };

    constructor() { }

    ngOnInit() {
    }

    onAdd() {
        this.counter += 1;
    }

    onReduce() {
        this.counter -= 1;
    }

}
