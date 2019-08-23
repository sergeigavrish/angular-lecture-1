import { InjectionToken, ValueProvider } from '@angular/core';

import { CounterType } from '../types';

export const COUNTER_TYPE_TOKEN = new InjectionToken('COUNTER_TYPE_TOKEN');

export const counterTypes: CounterType[] = [CounterType.ADDITION, CounterType.MULTIPLICATION];

export const CounterTypeProvider: ValueProvider = {
    provide: COUNTER_TYPE_TOKEN,
    useValue: counterTypes
};
