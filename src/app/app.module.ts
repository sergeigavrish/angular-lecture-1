import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterModule } from './modules/counter/counter.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CounterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
