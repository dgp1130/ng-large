import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C185Component } from './c185.component';

describe('C185Component', () => {
  let component: C185Component;
  let fixture: ComponentFixture<C185Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C185Component]
    });
    fixture = TestBed.createComponent(C185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
