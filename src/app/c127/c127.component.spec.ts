import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C127Component } from './c127.component';

describe('C127Component', () => {
  let component: C127Component;
  let fixture: ComponentFixture<C127Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C127Component]
    });
    fixture = TestBed.createComponent(C127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
