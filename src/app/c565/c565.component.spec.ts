import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C565Component } from './c565.component';

describe('C565Component', () => {
  let component: C565Component;
  let fixture: ComponentFixture<C565Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C565Component]
    });
    fixture = TestBed.createComponent(C565Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
