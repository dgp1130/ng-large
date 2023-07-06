import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C431Component } from './c431.component';

describe('C431Component', () => {
  let component: C431Component;
  let fixture: ComponentFixture<C431Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C431Component]
    });
    fixture = TestBed.createComponent(C431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
