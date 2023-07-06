import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C454Component } from './c454.component';

describe('C454Component', () => {
  let component: C454Component;
  let fixture: ComponentFixture<C454Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C454Component]
    });
    fixture = TestBed.createComponent(C454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
