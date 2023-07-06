import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C303Component } from './c303.component';

describe('C303Component', () => {
  let component: C303Component;
  let fixture: ComponentFixture<C303Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C303Component]
    });
    fixture = TestBed.createComponent(C303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
