import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C741Component } from './c741.component';

describe('C741Component', () => {
  let component: C741Component;
  let fixture: ComponentFixture<C741Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C741Component]
    });
    fixture = TestBed.createComponent(C741Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
