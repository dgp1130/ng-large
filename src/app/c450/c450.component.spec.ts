import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C450Component } from './c450.component';

describe('C450Component', () => {
  let component: C450Component;
  let fixture: ComponentFixture<C450Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C450Component]
    });
    fixture = TestBed.createComponent(C450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
