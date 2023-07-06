import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C938Component } from './c938.component';

describe('C938Component', () => {
  let component: C938Component;
  let fixture: ComponentFixture<C938Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C938Component]
    });
    fixture = TestBed.createComponent(C938Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
