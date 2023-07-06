import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C160Component } from './c160.component';

describe('C160Component', () => {
  let component: C160Component;
  let fixture: ComponentFixture<C160Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C160Component]
    });
    fixture = TestBed.createComponent(C160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
