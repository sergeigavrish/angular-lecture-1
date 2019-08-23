import { CounterType } from './../../types/index';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ICounter } from '../../models/interfaces/Counter.interface';

@Component({
    selector: 'app-counters-list',
    templateUrl: './counters-list.component.html',
    styleUrls: ['./counters-list.component.less']
})
export class CountersListComponent implements OnInit {

    counters$: Observable<ICounter[]>;

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.counters$ = this.route.data.pipe(
            map(data => data.counters)
        );
    }

    onClick(id: number, type: CounterType) {
        this.router.navigate(
            [id, type],
            {
                relativeTo: this.route
            }
        );
    }

    onAdd() {
        this.router.navigate(['/home/add']);
    }

    onEdit(id: number) {
        this.router.navigate([`/home/${id}/edit`]);
    }

}
