import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C645Component } from './c645.component';

describe('C645Component', () => {
  let component: C645Component;
  let fixture: ComponentFixture<C645Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C645Component]
    });
    fixture = TestBed.createComponent(C645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
