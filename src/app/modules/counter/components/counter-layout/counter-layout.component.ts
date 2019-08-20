import { Component, OnInit, Inject, SkipSelf } from '@angular/core';

import { ACTIONS_TOKEN } from '../../providers/actions.provider';
import { ActionTypes } from './../../types/index';
import { CounterService } from '../../models/entity/CounterService';

@Component({
    selector: 'app-counter-layout',
    templateUrl: './counter-layout.component.html',
    styleUrls: ['./counter-layout.component.less']
})
export class CounterLayoutComponent implements OnInit {

    constructor(
        @SkipSelf() @Inject(ACTIONS_TOKEN) public actions: Record<ActionTypes, any>,
        public counterService: CounterService
    ) { }

    ngOnInit() {
    }

    onAdd() {
        this.counterService.increase(0, 0);
    }

    onReduce() {
        this.counterService.decrease(0, 0);
    }

}
