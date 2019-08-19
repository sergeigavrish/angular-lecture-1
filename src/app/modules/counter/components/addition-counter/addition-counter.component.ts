import { Component, OnInit } from '@angular/core';

import { AdditionActionsProvider } from './../../providers/actions.provider';
import { CounterService } from '../../models/entity/CounterService';
import { AdditionCounterService } from '../../services/addition-counter.service';

@Component({
    selector: 'app-addition-counter',
    templateUrl: './addition-counter.component.html',
    styleUrls: ['./addition-counter.component.less'],
    providers: [
        AdditionActionsProvider,
        { provide: CounterService, useClass: AdditionCounterService }
    ]
})
export class AdditionCounterComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
