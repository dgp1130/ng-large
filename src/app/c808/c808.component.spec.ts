import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C808Component } from './c808.component';

describe('C808Component', () => {
  let component: C808Component;
  let fixture: ComponentFixture<C808Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C808Component]
    });
    fixture = TestBed.createComponent(C808Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
