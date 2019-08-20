import { Observable, BehaviorSubject } from 'rxjs';

export interface ICounterService {
    increase(id: number, value: number): void;
    decrease(id: number, value: number): void;
}
