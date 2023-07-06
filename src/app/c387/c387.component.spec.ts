import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C387Component } from './c387.component';

describe('C387Component', () => {
  let component: C387Component;
  let fixture: ComponentFixture<C387Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C387Component]
    });
    fixture = TestBed.createComponent(C387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
