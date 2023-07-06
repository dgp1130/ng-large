import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C40Component } from './c40.component';

describe('C40Component', () => {
  let component: C40Component;
  let fixture: ComponentFixture<C40Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C40Component]
    });
    fixture = TestBed.createComponent(C40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
