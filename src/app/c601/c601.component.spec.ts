import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C601Component } from './c601.component';

describe('C601Component', () => {
  let component: C601Component;
  let fixture: ComponentFixture<C601Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C601Component]
    });
    fixture = TestBed.createComponent(C601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
