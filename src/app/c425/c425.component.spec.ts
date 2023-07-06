import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C425Component } from './c425.component';

describe('C425Component', () => {
  let component: C425Component;
  let fixture: ComponentFixture<C425Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C425Component]
    });
    fixture = TestBed.createComponent(C425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
