import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Inject, SkipSelf } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ACTIONS_TOKEN } from '../../providers/actions.provider';
import { ActionTypes, CounterType } from './../../types/index';
import { CounterService } from '../../models/entity/CounterService';
import { ICounter } from '../../models/interfaces/Counter.interface';

@Component({
    selector: 'app-counter-layout',
    templateUrl: './counter-layout.component.html',
    styleUrls: ['./counter-layout.component.less']
})
export class CounterLayoutComponent implements OnInit {

    counter$: Observable<ICounter>;

    constructor(
        @SkipSelf() @Inject(ACTIONS_TOKEN) public actions: Record<ActionTypes, any>,
        private counterService: CounterService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.counter$ = this.route.data.pipe(map(data => data.counter));
    }

    onAdd(id: number, value: number) {
        this.counterService.increase(id, value);
    }

    onReduce(id: number, value: number) {
        this.counterService.decrease(id, value);
    }

}
