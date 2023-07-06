import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C894Component } from './c894.component';

describe('C894Component', () => {
  let component: C894Component;
  let fixture: ComponentFixture<C894Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C894Component]
    });
    fixture = TestBed.createComponent(C894Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
