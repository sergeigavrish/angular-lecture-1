import { Injectable } from '@angular/core';

import { CounterService } from '../models/entity/CounterService';
import { CountersStateService } from './counters-state.service';

@Injectable()
export class MultiplicationCounterService extends CounterService {

    constructor(
        private state: CountersStateService
    ) { super(); }

    increase(id: number, value: number) {
        this.state.changeCounter(id, value * 2);
    }

    decrease(id: number, value: number) {
        this.state.changeCounter(id, value / 2);
    }

}
