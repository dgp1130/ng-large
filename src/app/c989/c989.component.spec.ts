import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C989Component } from './c989.component';

describe('C989Component', () => {
  let component: C989Component;
  let fixture: ComponentFixture<C989Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C989Component]
    });
    fixture = TestBed.createComponent(C989Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
