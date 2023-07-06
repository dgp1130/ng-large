import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C960Component } from './c960.component';

describe('C960Component', () => {
  let component: C960Component;
  let fixture: ComponentFixture<C960Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C960Component]
    });
    fixture = TestBed.createComponent(C960Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
