import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C962Component } from './c962.component';

describe('C962Component', () => {
  let component: C962Component;
  let fixture: ComponentFixture<C962Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C962Component]
    });
    fixture = TestBed.createComponent(C962Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
