import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C588Component } from './c588.component';

describe('C588Component', () => {
  let component: C588Component;
  let fixture: ComponentFixture<C588Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C588Component]
    });
    fixture = TestBed.createComponent(C588Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
