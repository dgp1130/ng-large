import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C288Component } from './c288.component';

describe('C288Component', () => {
  let component: C288Component;
  let fixture: ComponentFixture<C288Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C288Component]
    });
    fixture = TestBed.createComponent(C288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
