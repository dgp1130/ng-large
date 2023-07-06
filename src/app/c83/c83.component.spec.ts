import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C83Component } from './c83.component';

describe('C83Component', () => {
  let component: C83Component;
  let fixture: ComponentFixture<C83Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C83Component]
    });
    fixture = TestBed.createComponent(C83Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
