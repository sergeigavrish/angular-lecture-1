import { ICounter } from './Counter.interface';
import { Observable } from 'rxjs';

export interface ICounterService {
    increase(counter: ICounter): Observable<ICounter>;
    decrease(counter: ICounter): Observable<ICounter>;
}
