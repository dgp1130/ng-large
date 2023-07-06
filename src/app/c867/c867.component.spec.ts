import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C867Component } from './c867.component';

describe('C867Component', () => {
  let component: C867Component;
  let fixture: ComponentFixture<C867Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C867Component]
    });
    fixture = TestBed.createComponent(C867Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
