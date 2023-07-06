import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C231Component } from './c231.component';

describe('C231Component', () => {
  let component: C231Component;
  let fixture: ComponentFixture<C231Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C231Component]
    });
    fixture = TestBed.createComponent(C231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
