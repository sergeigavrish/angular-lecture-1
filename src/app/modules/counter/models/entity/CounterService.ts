import { BehaviorSubject } from 'rxjs';

import { ICounterService } from '../interfaces/CounterService.interface';

export abstract class CounterService implements ICounterService {

    abstract readonly counter: BehaviorSubject<number>;

    abstract increase();

    abstract decrease();

    getCounter() {
        return this.counter.asObservable();
    }

}
