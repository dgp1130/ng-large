import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C56Component } from './c56.component';

describe('C56Component', () => {
  let component: C56Component;
  let fixture: ComponentFixture<C56Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C56Component]
    });
    fixture = TestBed.createComponent(C56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
