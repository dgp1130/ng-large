import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C226Component } from './c226.component';

describe('C226Component', () => {
  let component: C226Component;
  let fixture: ComponentFixture<C226Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C226Component]
    });
    fixture = TestBed.createComponent(C226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
