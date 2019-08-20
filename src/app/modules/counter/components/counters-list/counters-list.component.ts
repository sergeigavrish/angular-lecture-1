import { Router, ActivatedRoute } from "@angular/router";
import { CountersStateService } from "./../../services/counters-state.service";
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs";

@Component({
    selector: 'app-counters-list',
    templateUrl: './counters-list.component.html',
    styleUrls: ['./counters-list.component.less']
})
export class CountersListComponent implements OnInit {

    @Input() counters: any;

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
    }

    onClick(i: number) {
        this.router.navigate(
            ['addition'],
            {
                relativeTo: this.route
            }
        );
    }

}
