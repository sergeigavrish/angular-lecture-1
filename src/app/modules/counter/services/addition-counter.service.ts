import { Injectable, Inject } from '@angular/core';

import {  Observable } from 'rxjs';

import { CounterService } from '../models/entity/CounterService';
import { ICounter } from '../models/interfaces/Counter.interface';
import { REMOTE_STORAGE_TOKEN } from '../providers/remote-storage.provider';
import { RemoteStorage } from '../models/interfaces/RemoteStorage';

@Injectable()
export class AdditionCounterService extends CounterService {

    constructor(
        @Inject(REMOTE_STORAGE_TOKEN) private remote: RemoteStorage<ICounter>
    ) { super(); }

    increase(counter: ICounter): Observable<ICounter> {
        return this.remote.update({ ...counter, value: counter.value + 1 });
    }

    decrease(counter: ICounter): Observable<ICounter> {
        return this.remote.update({ ...counter, value: counter.value + 1 });
    }
}
