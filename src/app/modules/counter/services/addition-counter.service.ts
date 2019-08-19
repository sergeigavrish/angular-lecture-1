import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { CounterService } from '../models/entity/CounterService';

@Injectable()
export class AdditionCounterService extends CounterService {

    readonly counter = new BehaviorSubject<number>(0);

    constructor() { super(); }

    increase() {
        this.counter.next(this.counter.getValue() + 1);
    }

    decrease() {
        this.counter.next(this.counter.getValue() - 1);
    }
}
