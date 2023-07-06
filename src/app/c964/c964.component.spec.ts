import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C964Component } from './c964.component';

describe('C964Component', () => {
  let component: C964Component;
  let fixture: ComponentFixture<C964Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C964Component]
    });
    fixture = TestBed.createComponent(C964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
