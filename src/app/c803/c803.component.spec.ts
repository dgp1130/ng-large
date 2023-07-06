import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C803Component } from './c803.component';

describe('C803Component', () => {
  let component: C803Component;
  let fixture: ComponentFixture<C803Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C803Component]
    });
    fixture = TestBed.createComponent(C803Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
