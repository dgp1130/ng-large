import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C249Component } from './c249.component';

describe('C249Component', () => {
  let component: C249Component;
  let fixture: ComponentFixture<C249Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C249Component]
    });
    fixture = TestBed.createComponent(C249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
