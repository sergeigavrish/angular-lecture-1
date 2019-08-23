import { BehaviorSubject } from 'rxjs';
import { CounterType } from '../../types';

export interface ICounter {
    id?: number;
    value: number;
    type: CounterType;
}
