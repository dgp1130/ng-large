import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C654Component } from './c654.component';

describe('C654Component', () => {
  let component: C654Component;
  let fixture: ComponentFixture<C654Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C654Component]
    });
    fixture = TestBed.createComponent(C654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
