import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C97Component } from './c97.component';

describe('C97Component', () => {
  let component: C97Component;
  let fixture: ComponentFixture<C97Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C97Component]
    });
    fixture = TestBed.createComponent(C97Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
