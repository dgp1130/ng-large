import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C687Component } from './c687.component';

describe('C687Component', () => {
  let component: C687Component;
  let fixture: ComponentFixture<C687Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C687Component]
    });
    fixture = TestBed.createComponent(C687Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
