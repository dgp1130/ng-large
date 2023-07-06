import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C448Component } from './c448.component';

describe('C448Component', () => {
  let component: C448Component;
  let fixture: ComponentFixture<C448Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C448Component]
    });
    fixture = TestBed.createComponent(C448Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
