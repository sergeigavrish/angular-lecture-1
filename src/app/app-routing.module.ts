import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './modules/core/components/page-not-found/page-not-found.component';
import { CounterMainComponent } from './modules/counter/components/counter-main/counter-main.component';

const routes: Routes = [
    { path: 'home', component: CounterMainComponent },
    //   { path: 'edit/:id', component: EditFormComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class AppRoutingModule { }
