import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C389Component } from './c389.component';

describe('C389Component', () => {
  let component: C389Component;
  let fixture: ComponentFixture<C389Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C389Component]
    });
    fixture = TestBed.createComponent(C389Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
