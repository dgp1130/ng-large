import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C845Component } from './c845.component';

describe('C845Component', () => {
  let component: C845Component;
  let fixture: ComponentFixture<C845Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C845Component]
    });
    fixture = TestBed.createComponent(C845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
