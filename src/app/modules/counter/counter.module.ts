import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CounterMainComponent } from './components/counter-main/counter-main.component';
import { CounterLayoutComponent } from './components/counter-layout/counter-layout.component';
import { CounterViewComponent } from './components/counter-layout/components/counter-view/counter-view.component';
import { CounterButtonComponent } from './components/counter-layout/components/counter-button/counter-button.component';
import { AdditionCounterComponent } from './components/addition-counter/addition-counter.component';
import { MultiplicationCounterComponent } from './components/multiplication-counter/multiplication-counter.component';
import { CounterPipe } from './pipes/counter.pipe';
import { CounterRoutingModule } from './counter-routing.module';
import { CountersListComponent } from './components/counters-list/counters-list.component';
import { RemoteStorageProvider } from './providers/remote-storage.provider';
import { CounterFormComponent } from './components/counter-form/counter-form.component';
import { CounterTypeProvider } from './providers/counter-type.provider';

@NgModule({
    declarations: [
        CounterMainComponent,
        CounterViewComponent,
        CounterButtonComponent,
        CounterLayoutComponent,
        AdditionCounterComponent,
        MultiplicationCounterComponent,
        CounterPipe,
        CountersListComponent,
        CounterFormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CounterRoutingModule
    ],
    providers: [RemoteStorageProvider, CounterTypeProvider],
    exports: [CounterMainComponent]
})
export class CounterModule { }
