import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterMainComponent } from './components/counter-main/counter-main.component';
import { CounterViewComponent } from './components/counter-view/counter-view.component';
import { CounterButtonComponent } from './components/counter-button/counter-button.component';



@NgModule({
    declarations: [CounterMainComponent, CounterViewComponent, CounterButtonComponent],
    imports: [
        CommonModule
    ],
    exports: [CounterMainComponent]
})
export class CounterModule { }
