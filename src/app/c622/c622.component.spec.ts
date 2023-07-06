import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C622Component } from './c622.component';

describe('C622Component', () => {
  let component: C622Component;
  let fixture: ComponentFixture<C622Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C622Component]
    });
    fixture = TestBed.createComponent(C622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
