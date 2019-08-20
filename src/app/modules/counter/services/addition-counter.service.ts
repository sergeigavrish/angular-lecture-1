import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { CounterService } from '../models/entity/CounterService';
import { CountersStateService } from './counters-state.service';

@Injectable()
export class AdditionCounterService extends CounterService {

    constructor(
        private state: CountersStateService
    ) { super(); }

    increase(id: number, value: number) {
        this.state.changeCounter(id, value + 1);
    }

    decrease(id: number, value: number) {
        this.state.changeCounter(id, value - 1);
    }
}
