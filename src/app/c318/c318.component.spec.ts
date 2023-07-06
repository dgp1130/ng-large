import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C318Component } from './c318.component';

describe('C318Component', () => {
  let component: C318Component;
  let fixture: ComponentFixture<C318Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C318Component]
    });
    fixture = TestBed.createComponent(C318Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
