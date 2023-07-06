import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C227Component } from './c227.component';

describe('C227Component', () => {
  let component: C227Component;
  let fixture: ComponentFixture<C227Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C227Component]
    });
    fixture = TestBed.createComponent(C227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
