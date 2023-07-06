import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C291Component } from './c291.component';

describe('C291Component', () => {
  let component: C291Component;
  let fixture: ComponentFixture<C291Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C291Component]
    });
    fixture = TestBed.createComponent(C291Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
