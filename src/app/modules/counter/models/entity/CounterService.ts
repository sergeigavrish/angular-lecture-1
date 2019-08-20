import { BehaviorSubject } from 'rxjs';

import { ICounterService } from '../interfaces/CounterService.interface';

export abstract class CounterService implements ICounterService {
    abstract increase(id: number, value: number): void;
    abstract decrease(id: number, value: number): void;
}
