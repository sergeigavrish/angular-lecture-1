import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterMainComponent } from './components/counter-main/counter-main.component';
import { CounterLayoutComponent } from './components/counter-layout/counter-layout.component';
import { CounterViewComponent } from './components/counter-layout/components/counter-view/counter-view.component';
import { CounterButtonComponent } from './components/counter-layout/components/counter-button/counter-button.component';
import { AdditionCounterComponent } from './components/addition-counter/addition-counter.component';
import { MultiplicationCounterComponent } from './components/multiplication-counter/multiplication-counter.component';
import { CounterPipe } from './pipes/counter.pipe';

@NgModule({
    declarations: [
        CounterMainComponent,
        CounterViewComponent,
        CounterButtonComponent,
        CounterLayoutComponent,
        AdditionCounterComponent,
        MultiplicationCounterComponent,
        CounterPipe
    ],
    imports: [
        CommonModule
    ],
    providers: [],
    exports: [CounterMainComponent]
})
export class CounterModule { }
