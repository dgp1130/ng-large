import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C216Component } from './c216.component';

describe('C216Component', () => {
  let component: C216Component;
  let fixture: ComponentFixture<C216Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C216Component]
    });
    fixture = TestBed.createComponent(C216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
