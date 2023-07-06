import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C483Component } from './c483.component';

describe('C483Component', () => {
  let component: C483Component;
  let fixture: ComponentFixture<C483Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C483Component]
    });
    fixture = TestBed.createComponent(C483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
