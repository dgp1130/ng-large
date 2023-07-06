import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C480Component } from './c480.component';

describe('C480Component', () => {
  let component: C480Component;
  let fixture: ComponentFixture<C480Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C480Component]
    });
    fixture = TestBed.createComponent(C480Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
