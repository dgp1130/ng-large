import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C548Component } from './c548.component';

describe('C548Component', () => {
  let component: C548Component;
  let fixture: ComponentFixture<C548Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C548Component]
    });
    fixture = TestBed.createComponent(C548Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
