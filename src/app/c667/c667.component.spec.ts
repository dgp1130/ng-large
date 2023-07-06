import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C667Component } from './c667.component';

describe('C667Component', () => {
  let component: C667Component;
  let fixture: ComponentFixture<C667Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C667Component]
    });
    fixture = TestBed.createComponent(C667Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
