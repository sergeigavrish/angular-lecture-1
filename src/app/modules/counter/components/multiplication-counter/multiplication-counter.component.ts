import { Component, OnInit } from '@angular/core';

import { MultiplicationActionsProvider } from './../../providers/actions.provider';
import { CounterService } from '../../models/entity/CounterService';
import { MultiplicationCounterService } from '../../services/multiplication-counter.service';

@Component({
    selector: 'app-multiplication-counter',
    templateUrl: './multiplication-counter.component.html',
    styleUrls: ['./multiplication-counter.component.less'],
    providers: [
        MultiplicationActionsProvider,
        { provide: CounterService, useClass: MultiplicationCounterService }
    ]
})
export class MultiplicationCounterComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
