import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Inject, SkipSelf } from '@angular/core';

import { Observable } from 'rxjs';
import { map, first, tap } from 'rxjs/operators';

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

    counter: ICounter;

    constructor(
        @SkipSelf() @Inject(ACTIONS_TOKEN) public actions: Record<ActionTypes, any>,
        private counterService: CounterService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.data
            .pipe(
                first(),
                map(data => data.counter)
            )
            .subscribe(counter => this.counter = counter);
    }

    onAdd(counter: ICounter) {
        this.counterService.increase(counter)
            .pipe(
                first(),
                tap(console.log)
            )
            .subscribe(data => this.counter = data);
    }

    onReduce(counter: ICounter) {
        this.counterService.decrease(counter)
            .pipe(
                first(),
                tap(console.log)
            )
            .subscribe(data => this.counter = data);
    }

}
