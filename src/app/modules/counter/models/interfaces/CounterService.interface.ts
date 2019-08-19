import { Observable, BehaviorSubject } from 'rxjs';

export interface ICounterService {
    readonly counter: BehaviorSubject<number>;
    increase(): void;
    decrease(): void;
    getCounter(): Observable<number>;
}
