import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C144Component } from './c144.component';

describe('C144Component', () => {
  let component: C144Component;
  let fixture: ComponentFixture<C144Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C144Component]
    });
    fixture = TestBed.createComponent(C144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
