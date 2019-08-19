import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicationCounterComponent } from './multiplication-counter.component';

describe('MultiplicationCounterComponent', () => {
  let component: MultiplicationCounterComponent;
  let fixture: ComponentFixture<MultiplicationCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplicationCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicationCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
