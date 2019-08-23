import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { first, map } from 'rxjs/operators';

import { COUNTER_TYPE_TOKEN } from './../../providers/counter-type.provider';
import { CounterType } from './../../types/index';
import { ICounter } from '../../models/interfaces/Counter.interface';
import { REMOTE_STORAGE_TOKEN } from '../../providers/remote-storage.provider';
import { RemoteStorage } from '../../models/interfaces/RemoteStorage';

@Component({
    selector: 'app-counter-form',
    templateUrl: './counter-form.component.html',
    styleUrls: ['./counter-form.component.less']
})
export class CounterFormComponent implements OnInit {

    readonly defaultValue: ICounter = {
        value: 0,
        type: CounterType.ADDITION
    };

    counter: ICounter;

    constructor(
        @Inject(COUNTER_TYPE_TOKEN) public types: CounterType[],
        @Inject(REMOTE_STORAGE_TOKEN) public remote: RemoteStorage<ICounter>,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.initForm();
    }

    onSubmit() {
        this.counter.id
            ? this.updateCounter()
            : this.createCounter();
    }

    private initForm() {
        this.route.data
            .pipe(
                first(),
                map(data => data.counter)
            )
            .subscribe(counter => counter
                ? this.counter = counter
                : this.counter = { ...this.defaultValue }
            );
    }

    private createCounter() {
        this.remote.create(this.counter)
            .pipe(first())
            .subscribe(
                _ => this.counter = { ...this.defaultValue },
                error => console.error(error)
            );
    }

    private updateCounter() {
        this.remote.update(this.counter)
            .pipe(first())
            .subscribe(
                data => this.counter = { ...data },
                error => console.error(error)
            );
    }

}
