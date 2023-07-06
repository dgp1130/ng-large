import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C963Component } from './c963.component';

describe('C963Component', () => {
  let component: C963Component;
  let fixture: ComponentFixture<C963Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C963Component]
    });
    fixture = TestBed.createComponent(C963Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
