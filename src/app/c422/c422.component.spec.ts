import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C422Component } from './c422.component';

describe('C422Component', () => {
  let component: C422Component;
  let fixture: ComponentFixture<C422Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C422Component]
    });
    fixture = TestBed.createComponent(C422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
