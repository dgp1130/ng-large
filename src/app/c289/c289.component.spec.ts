import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C289Component } from './c289.component';

describe('C289Component', () => {
  let component: C289Component;
  let fixture: ComponentFixture<C289Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C289Component]
    });
    fixture = TestBed.createComponent(C289Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
