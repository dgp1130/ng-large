import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C369Component } from './c369.component';

describe('C369Component', () => {
  let component: C369Component;
  let fixture: ComponentFixture<C369Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C369Component]
    });
    fixture = TestBed.createComponent(C369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
