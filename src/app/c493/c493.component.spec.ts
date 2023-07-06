import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C493Component } from './c493.component';

describe('C493Component', () => {
  let component: C493Component;
  let fixture: ComponentFixture<C493Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C493Component]
    });
    fixture = TestBed.createComponent(C493Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
