import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './modules/core/components/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'home', loadChildren: () => import('./modules/counter/counter.module').then(m => m.CounterModule)  },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class AppRoutingModule { }
