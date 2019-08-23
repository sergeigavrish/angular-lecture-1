import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditionCounterComponent } from './components/addition-counter/addition-counter.component';
import { CounterMainComponent } from './components/counter-main/counter-main.component';
import { CountersListComponent } from './components/counters-list/counters-list.component';
import { ListDataResolver } from './resolvers/list-data.resolver';
import { MultiplicationCounterComponent } from './components/multiplication-counter/multiplication-counter.component';
import { CounterDataResolver } from './resolvers/counter-data.resolver';
import { CounterFormComponent } from './components/counter-form/counter-form.component';
import { CounterFormResolver } from './resolvers/counter-form.resolver';

const routes: Routes = [
    {
        path: '', component: CounterMainComponent, children: [
            {
                path: '',
                component: CountersListComponent,
                resolve: {
                    counters: ListDataResolver
                }
            },
            { path: ':id/addition', component: AdditionCounterComponent, resolve: { counter: CounterDataResolver } },
            { path: ':id/multiplication', component: MultiplicationCounterComponent, resolve: { counter: CounterDataResolver } },
            { path: 'add', component: CounterFormComponent, resolve: { counter: CounterFormResolver } },
            { path: ':id/edit', component: CounterFormComponent, resolve: { counter: CounterFormResolver } }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [ListDataResolver, CounterDataResolver, CounterFormResolver],
    declarations: [],
})
export class CounterRoutingModule { }
