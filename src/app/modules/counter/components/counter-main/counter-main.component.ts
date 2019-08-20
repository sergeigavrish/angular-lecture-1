import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CountersStateService } from '../../services/counters-state.service';

@Component({
    selector: 'app-counter-main',
    templateUrl: './counter-main.component.html',
    styleUrls: ['./counter-main.component.less']
})
export class CounterMainComponent implements OnInit {
    counters$: Observable<any>;

    constructor(private state: CountersStateService) { }

    ngOnInit() {
        this.counters$ = this.state.getCounters();
    }
}
