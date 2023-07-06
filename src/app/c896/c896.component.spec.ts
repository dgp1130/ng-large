import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C896Component } from './c896.component';

describe('C896Component', () => {
  let component: C896Component;
  let fixture: ComponentFixture<C896Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C896Component]
    });
    fixture = TestBed.createComponent(C896Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
