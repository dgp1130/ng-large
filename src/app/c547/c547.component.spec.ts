import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C547Component } from './c547.component';

describe('C547Component', () => {
  let component: C547Component;
  let fixture: ComponentFixture<C547Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C547Component]
    });
    fixture = TestBed.createComponent(C547Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
