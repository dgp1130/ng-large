import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C117Component } from './c117.component';

describe('C117Component', () => {
  let component: C117Component;
  let fixture: ComponentFixture<C117Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C117Component]
    });
    fixture = TestBed.createComponent(C117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
