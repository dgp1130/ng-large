import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C426Component } from './c426.component';

describe('C426Component', () => {
  let component: C426Component;
  let fixture: ComponentFixture<C426Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C426Component]
    });
    fixture = TestBed.createComponent(C426Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
