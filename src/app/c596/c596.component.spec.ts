import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C596Component } from './c596.component';

describe('C596Component', () => {
  let component: C596Component;
  let fixture: ComponentFixture<C596Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C596Component]
    });
    fixture = TestBed.createComponent(C596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
