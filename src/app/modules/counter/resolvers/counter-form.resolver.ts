import { Injectable, Inject } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { ICounter } from '../models/interfaces/Counter.interface';
import { REMOTE_STORAGE_TOKEN } from '../providers/remote-storage.provider';
import { RemoteStorage } from '../models/interfaces/RemoteStorage';

@Injectable()
export class CounterFormResolver implements Resolve<ICounter | null> {

    constructor(@Inject(REMOTE_STORAGE_TOKEN) private remote: RemoteStorage<ICounter>) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ICounter> | null {
        return route.params.id
            ? this.remote.loadById(route.params.id).pipe(first())
            : null;
    }
}
