import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C444Component } from './c444.component';

describe('C444Component', () => {
  let component: C444Component;
  let fixture: ComponentFixture<C444Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C444Component]
    });
    fixture = TestBed.createComponent(C444Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
