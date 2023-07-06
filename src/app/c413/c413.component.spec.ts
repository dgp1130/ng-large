import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C413Component } from './c413.component';

describe('C413Component', () => {
  let component: C413Component;
  let fixture: ComponentFixture<C413Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C413Component]
    });
    fixture = TestBed.createComponent(C413Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
