import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C758Component } from './c758.component';

describe('C758Component', () => {
  let component: C758Component;
  let fixture: ComponentFixture<C758Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C758Component]
    });
    fixture = TestBed.createComponent(C758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
