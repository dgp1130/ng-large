import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C34Component } from './c34.component';

describe('C34Component', () => {
  let component: C34Component;
  let fixture: ComponentFixture<C34Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C34Component]
    });
    fixture = TestBed.createComponent(C34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
