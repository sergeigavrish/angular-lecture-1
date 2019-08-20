import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditionCounterComponent } from './components/addition-counter/addition-counter.component';
import { CounterMainComponent } from './components/counter-main/counter-main.component';

const routes: Routes = [
    {
        path: 'home', component: CounterMainComponent, children: [
            { path: 'addition', component: AdditionCounterComponent },
            { path: 'multipication', component: AdditionCounterComponent }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class CounterRoutingModule { }
