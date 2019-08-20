import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { ICounter } from '../models/interfaces/Counter.interface';
import { RemoteStorage } from './../models/interfaces/RemoteStorage';

@Injectable()
export class CounterRemoteService implements RemoteStorage<ICounter> {

    constructor(private http: HttpClient) { }

    loadAll(): Observable<ICounter[]> {
        return this.http.get<ICounter[]>(`${environment.backendUrl}/counters`);
    }

    loadById(id: number) {
        return this.http.get<ICounter>(`${environment.backendUrl}/counters/${id}`);
    }

    update(counter: ICounter) {
        return this.http.put<ICounter>(`${environment.backendUrl}/counters/${counter.id}`, counter);
    }

}
