import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C779Component } from './c779.component';

describe('C779Component', () => {
  let component: C779Component;
  let fixture: ComponentFixture<C779Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C779Component]
    });
    fixture = TestBed.createComponent(C779Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
