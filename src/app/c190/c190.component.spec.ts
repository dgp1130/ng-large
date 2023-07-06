import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C190Component } from './c190.component';

describe('C190Component', () => {
  let component: C190Component;
  let fixture: ComponentFixture<C190Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C190Component]
    });
    fixture = TestBed.createComponent(C190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
