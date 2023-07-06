import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C739Component } from './c739.component';

describe('C739Component', () => {
  let component: C739Component;
  let fixture: ComponentFixture<C739Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C739Component]
    });
    fixture = TestBed.createComponent(C739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
