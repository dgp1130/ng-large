import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C487Component } from './c487.component';

describe('C487Component', () => {
  let component: C487Component;
  let fixture: ComponentFixture<C487Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C487Component]
    });
    fixture = TestBed.createComponent(C487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
