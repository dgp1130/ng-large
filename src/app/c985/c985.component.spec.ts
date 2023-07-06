import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C985Component } from './c985.component';

describe('C985Component', () => {
  let component: C985Component;
  let fixture: ComponentFixture<C985Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C985Component]
    });
    fixture = TestBed.createComponent(C985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
