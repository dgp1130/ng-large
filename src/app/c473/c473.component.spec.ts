import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C473Component } from './c473.component';

describe('C473Component', () => {
  let component: C473Component;
  let fixture: ComponentFixture<C473Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C473Component]
    });
    fixture = TestBed.createComponent(C473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
