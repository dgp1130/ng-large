import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C211Component } from './c211.component';

describe('C211Component', () => {
  let component: C211Component;
  let fixture: ComponentFixture<C211Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C211Component]
    });
    fixture = TestBed.createComponent(C211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
