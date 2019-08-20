import { HttpClient } from '@angular/common/http';
import { InjectionToken, FactoryProvider } from '@angular/core';

import { CounterRemoteService } from '../services/counter-remote.service';


export const REMOTE_STORAGE_TOKEN = new InjectionToken<string>('REMOTE_STORAGE_TOKEN');

export const RemoteStorageProvider: FactoryProvider = {
    provide: REMOTE_STORAGE_TOKEN,
    useFactory: (http: HttpClient) => new CounterRemoteService(http),
    deps: [HttpClient]
};
