import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C726Component } from './c726.component';

describe('C726Component', () => {
  let component: C726Component;
  let fixture: ComponentFixture<C726Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C726Component]
    });
    fixture = TestBed.createComponent(C726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
