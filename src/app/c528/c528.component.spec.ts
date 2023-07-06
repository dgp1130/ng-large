import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C528Component } from './c528.component';

describe('C528Component', () => {
  let component: C528Component;
  let fixture: ComponentFixture<C528Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C528Component]
    });
    fixture = TestBed.createComponent(C528Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
