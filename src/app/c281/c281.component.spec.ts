import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C281Component } from './c281.component';

describe('C281Component', () => {
  let component: C281Component;
  let fixture: ComponentFixture<C281Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C281Component]
    });
    fixture = TestBed.createComponent(C281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
