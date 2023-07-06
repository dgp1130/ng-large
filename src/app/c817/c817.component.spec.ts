import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C817Component } from './c817.component';

describe('C817Component', () => {
  let component: C817Component;
  let fixture: ComponentFixture<C817Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C817Component]
    });
    fixture = TestBed.createComponent(C817Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
