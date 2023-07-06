import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C708Component } from './c708.component';

describe('C708Component', () => {
  let component: C708Component;
  let fixture: ComponentFixture<C708Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C708Component]
    });
    fixture = TestBed.createComponent(C708Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
