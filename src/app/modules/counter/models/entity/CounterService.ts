import { BehaviorSubject, Observable } from 'rxjs';

import { ICounterService } from '../interfaces/CounterService.interface';
import { ICounter } from '../interfaces/Counter.interface';

export abstract class CounterService implements ICounterService {
    abstract increase(counter: ICounter): Observable<ICounter>;
    abstract decrease(counter: ICounter): Observable<ICounter>;
}
