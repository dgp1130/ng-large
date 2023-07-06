import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C773Component } from './c773.component';

describe('C773Component', () => {
  let component: C773Component;
  let fixture: ComponentFixture<C773Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C773Component]
    });
    fixture = TestBed.createComponent(C773Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
