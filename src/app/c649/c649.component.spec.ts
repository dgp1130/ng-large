import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C649Component } from './c649.component';

describe('C649Component', () => {
  let component: C649Component;
  let fixture: ComponentFixture<C649Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C649Component]
    });
    fixture = TestBed.createComponent(C649Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
