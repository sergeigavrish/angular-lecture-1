import { Observable } from 'rxjs';

export interface RemoteStorage<T> {
    loadAll(): Observable<T[]>;
    loadById(id: number): Observable<T>;
    update(data: T): Observable<T>;
    create(data: T): Observable<T>;
}
