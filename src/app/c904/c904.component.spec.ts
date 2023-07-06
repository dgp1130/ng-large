import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C904Component } from './c904.component';

describe('C904Component', () => {
  let component: C904Component;
  let fixture: ComponentFixture<C904Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C904Component]
    });
    fixture = TestBed.createComponent(C904Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
