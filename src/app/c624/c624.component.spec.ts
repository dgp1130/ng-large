import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C624Component } from './c624.component';

describe('C624Component', () => {
  let component: C624Component;
  let fixture: ComponentFixture<C624Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C624Component]
    });
    fixture = TestBed.createComponent(C624Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
