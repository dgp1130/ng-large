import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C961Component } from './c961.component';

describe('C961Component', () => {
  let component: C961Component;
  let fixture: ComponentFixture<C961Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C961Component]
    });
    fixture = TestBed.createComponent(C961Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
