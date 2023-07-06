import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C788Component } from './c788.component';

describe('C788Component', () => {
  let component: C788Component;
  let fixture: ComponentFixture<C788Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C788Component]
    });
    fixture = TestBed.createComponent(C788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
