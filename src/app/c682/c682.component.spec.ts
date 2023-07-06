import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C682Component } from './c682.component';

describe('C682Component', () => {
  let component: C682Component;
  let fixture: ComponentFixture<C682Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C682Component]
    });
    fixture = TestBed.createComponent(C682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
