import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterMainComponent } from './counter-main.component';

describe('CounterMainComponent', () => {
    let component: CounterMainComponent;
    let fixture: ComponentFixture<CounterMainComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CounterMainComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CounterMainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
