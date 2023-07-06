import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C292Component } from './c292.component';

describe('C292Component', () => {
  let component: C292Component;
  let fixture: ComponentFixture<C292Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C292Component]
    });
    fixture = TestBed.createComponent(C292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
