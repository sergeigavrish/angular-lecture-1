import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionCounterComponent } from './addition-counter.component';

describe('AdditionCounterComponent', () => {
  let component: AdditionCounterComponent;
  let fixture: ComponentFixture<AdditionCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
