import { Injectable } from '@angular/core';

import { of } from 'rxjs';

import { ICounter } from '../models/interfaces/Counter.interface';
import { CounterType } from '../types';

@Injectable()
export class CountersStateService {

    private counters: ICounter[] = [
        { id: 1, value: 0, type: CounterType.ADDITION },
        { id: 2, value: 1, type: CounterType.MULTIPLICATION }
    ];

    constructor() { }

    getCounters() {
        return of(this.counters);
    }

    changeCounter(id: number, value: number) {
        this.counters.find(counter => counter.id === id).value = value;
    }

}
