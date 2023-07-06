import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C754Component } from './c754.component';

describe('C754Component', () => {
  let component: C754Component;
  let fixture: ComponentFixture<C754Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C754Component]
    });
    fixture = TestBed.createComponent(C754Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
