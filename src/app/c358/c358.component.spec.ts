import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C358Component } from './c358.component';

describe('C358Component', () => {
  let component: C358Component;
  let fixture: ComponentFixture<C358Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C358Component]
    });
    fixture = TestBed.createComponent(C358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
