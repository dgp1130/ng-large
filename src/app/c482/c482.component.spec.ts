import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C482Component } from './c482.component';

describe('C482Component', () => {
  let component: C482Component;
  let fixture: ComponentFixture<C482Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C482Component]
    });
    fixture = TestBed.createComponent(C482Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
