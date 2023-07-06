import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C209Component } from './c209.component';

describe('C209Component', () => {
  let component: C209Component;
  let fixture: ComponentFixture<C209Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C209Component]
    });
    fixture = TestBed.createComponent(C209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
