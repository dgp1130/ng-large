import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C599Component } from './c599.component';

describe('C599Component', () => {
  let component: C599Component;
  let fixture: ComponentFixture<C599Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C599Component]
    });
    fixture = TestBed.createComponent(C599Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
