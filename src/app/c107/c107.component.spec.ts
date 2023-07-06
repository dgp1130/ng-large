import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C107Component } from './c107.component';

describe('C107Component', () => {
  let component: C107Component;
  let fixture: ComponentFixture<C107Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C107Component]
    });
    fixture = TestBed.createComponent(C107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
