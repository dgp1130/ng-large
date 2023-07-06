import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C419Component } from './c419.component';

describe('C419Component', () => {
  let component: C419Component;
  let fixture: ComponentFixture<C419Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C419Component]
    });
    fixture = TestBed.createComponent(C419Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
