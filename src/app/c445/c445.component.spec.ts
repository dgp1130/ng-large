import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C445Component } from './c445.component';

describe('C445Component', () => {
  let component: C445Component;
  let fixture: ComponentFixture<C445Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C445Component]
    });
    fixture = TestBed.createComponent(C445Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
