import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C311Component } from './c311.component';

describe('C311Component', () => {
  let component: C311Component;
  let fixture: ComponentFixture<C311Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C311Component]
    });
    fixture = TestBed.createComponent(C311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
