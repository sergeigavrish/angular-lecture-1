import { Injectable, Inject } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';

import { ICounter } from '../models/interfaces/Counter.interface';
import { first } from 'rxjs/operators';
import { REMOTE_STORAGE_TOKEN } from '../providers/remote-storage.provider';
import { RemoteStorage } from '../models/interfaces/RemoteStorage';

@Injectable()
export class ListDataResolver implements Resolve<ICounter[]> {

    constructor(@Inject(REMOTE_STORAGE_TOKEN) private remote: RemoteStorage<ICounter>) { }

    resolve(): Observable<ICounter[]> {
        return this.remote.loadAll().pipe(
            first()
        );
    }
}
