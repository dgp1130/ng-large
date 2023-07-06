import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C864Component } from './c864.component';

describe('C864Component', () => {
  let component: C864Component;
  let fixture: ComponentFixture<C864Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C864Component]
    });
    fixture = TestBed.createComponent(C864Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
