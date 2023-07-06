import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C571Component } from './c571.component';

describe('C571Component', () => {
  let component: C571Component;
  let fixture: ComponentFixture<C571Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C571Component]
    });
    fixture = TestBed.createComponent(C571Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
