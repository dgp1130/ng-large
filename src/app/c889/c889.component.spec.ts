import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C889Component } from './c889.component';

describe('C889Component', () => {
  let component: C889Component;
  let fixture: ComponentFixture<C889Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C889Component]
    });
    fixture = TestBed.createComponent(C889Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
