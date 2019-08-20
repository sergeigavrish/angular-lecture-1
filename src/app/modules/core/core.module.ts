import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CoreLayoutComponent } from './components/core-layout/core-layout.component';



@NgModule({
    declarations: [PageNotFoundComponent, CoreLayoutComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [CoreLayoutComponent]
})
export class CoreModule { }
