import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C948Component } from './c948.component';

describe('C948Component', () => {
  let component: C948Component;
  let fixture: ComponentFixture<C948Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C948Component]
    });
    fixture = TestBed.createComponent(C948Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
