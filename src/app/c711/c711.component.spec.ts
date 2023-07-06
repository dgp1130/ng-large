import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C711Component } from './c711.component';

describe('C711Component', () => {
  let component: C711Component;
  let fixture: ComponentFixture<C711Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C711Component]
    });
    fixture = TestBed.createComponent(C711Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
