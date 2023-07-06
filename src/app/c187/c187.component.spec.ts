import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C187Component } from './c187.component';

describe('C187Component', () => {
  let component: C187Component;
  let fixture: ComponentFixture<C187Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C187Component]
    });
    fixture = TestBed.createComponent(C187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
