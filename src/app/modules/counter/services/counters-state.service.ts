import { BehaviorSubject, of } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable()
export class CountersStateService {

    private counters = [
        { value: new BehaviorSubject<number>(0), type: 'addition' },
        { value: new BehaviorSubject<number>(1), type: 'multiplication' }
    ];

    constructor() { }

    getCounters() {
        return of(this.counters);
    }

    changeCounter(id: number, value: number) {
        this.counters[id].value.next(value);
    }

}
