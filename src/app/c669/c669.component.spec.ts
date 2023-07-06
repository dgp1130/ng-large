import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C669Component } from './c669.component';

describe('C669Component', () => {
  let component: C669Component;
  let fixture: ComponentFixture<C669Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C669Component]
    });
    fixture = TestBed.createComponent(C669Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
