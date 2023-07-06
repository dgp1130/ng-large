import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C752Component } from './c752.component';

describe('C752Component', () => {
  let component: C752Component;
  let fixture: ComponentFixture<C752Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C752Component]
    });
    fixture = TestBed.createComponent(C752Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
