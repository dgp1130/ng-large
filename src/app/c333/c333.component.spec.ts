import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C333Component } from './c333.component';

describe('C333Component', () => {
  let component: C333Component;
  let fixture: ComponentFixture<C333Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C333Component]
    });
    fixture = TestBed.createComponent(C333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
