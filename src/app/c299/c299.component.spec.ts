import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C299Component } from './c299.component';

describe('C299Component', () => {
  let component: C299Component;
  let fixture: ComponentFixture<C299Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C299Component]
    });
    fixture = TestBed.createComponent(C299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
