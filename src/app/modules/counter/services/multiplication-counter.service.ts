import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { CounterService } from '../models/entity/CounterService';

@Injectable()
export class MultiplicationCounterService extends CounterService {

    readonly counter = new BehaviorSubject<number>(1);

    constructor() { super(); }

    increase() {
        this.counter.next(this.counter.getValue() * 2);
    }

    decrease() {
        this.counter.next(this.counter.getValue() / 2);
    }

}
