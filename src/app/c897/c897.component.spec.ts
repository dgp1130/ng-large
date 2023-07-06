import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C897Component } from './c897.component';

describe('C897Component', () => {
  let component: C897Component;
  let fixture: ComponentFixture<C897Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C897Component]
    });
    fixture = TestBed.createComponent(C897Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
