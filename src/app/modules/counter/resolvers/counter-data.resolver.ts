import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CountersStateService } from './../services/counters-state.service';
import { ICounter } from '../models/interfaces/Counter.interface';

@Injectable()
export class CounterDataResolver implements Resolve<ICounter> {

    constructor(private state: CountersStateService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ICounter> {
        return this.state.getCounters().pipe(
            map(counters => counters.find(c => c.id === +route.params.id))
        );
    }
}
