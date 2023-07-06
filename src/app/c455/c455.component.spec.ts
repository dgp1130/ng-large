import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C455Component } from './c455.component';

describe('C455Component', () => {
  let component: C455Component;
  let fixture: ComponentFixture<C455Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C455Component]
    });
    fixture = TestBed.createComponent(C455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
