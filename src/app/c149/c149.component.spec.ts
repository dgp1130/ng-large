import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C149Component } from './c149.component';

describe('C149Component', () => {
  let component: C149Component;
  let fixture: ComponentFixture<C149Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C149Component]
    });
    fixture = TestBed.createComponent(C149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
