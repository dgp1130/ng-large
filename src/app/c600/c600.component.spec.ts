import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C600Component } from './c600.component';

describe('C600Component', () => {
  let component: C600Component;
  let fixture: ComponentFixture<C600Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C600Component]
    });
    fixture = TestBed.createComponent(C600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
