import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountersListComponent } from './counters-list.component';

describe('CountersListComponent', () => {
  let component: CountersListComponent;
  let fixture: ComponentFixture<CountersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
