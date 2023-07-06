import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C200Component } from './c200.component';

describe('C200Component', () => {
  let component: C200Component;
  let fixture: ComponentFixture<C200Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C200Component]
    });
    fixture = TestBed.createComponent(C200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
