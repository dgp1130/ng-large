import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C407Component } from './c407.component';

describe('C407Component', () => {
  let component: C407Component;
  let fixture: ComponentFixture<C407Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C407Component]
    });
    fixture = TestBed.createComponent(C407Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
