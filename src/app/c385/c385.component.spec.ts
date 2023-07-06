import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C385Component } from './c385.component';

describe('C385Component', () => {
  let component: C385Component;
  let fixture: ComponentFixture<C385Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C385Component]
    });
    fixture = TestBed.createComponent(C385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
