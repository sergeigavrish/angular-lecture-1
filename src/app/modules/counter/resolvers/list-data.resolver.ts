import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { CountersStateService } from './../services/counters-state.service';
import { ICounter } from '../models/interfaces/Counter.interface';

@Injectable()
export class ListDataResolver implements Resolve<ICounter[]> {

    constructor(private state: CountersStateService) { }

    resolve(): Observable<ICounter[]> {
        return this.state.getCounters();
    }
}
