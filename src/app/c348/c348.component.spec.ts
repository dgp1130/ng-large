import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C348Component } from './c348.component';

describe('C348Component', () => {
  let component: C348Component;
  let fixture: ComponentFixture<C348Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C348Component]
    });
    fixture = TestBed.createComponent(C348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
