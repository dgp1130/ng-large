import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C556Component } from './c556.component';

describe('C556Component', () => {
  let component: C556Component;
  let fixture: ComponentFixture<C556Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C556Component]
    });
    fixture = TestBed.createComponent(C556Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
