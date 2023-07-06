import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C785Component } from './c785.component';

describe('C785Component', () => {
  let component: C785Component;
  let fixture: ComponentFixture<C785Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C785Component]
    });
    fixture = TestBed.createComponent(C785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
