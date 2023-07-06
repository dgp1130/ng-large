import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C816Component } from './c816.component';

describe('C816Component', () => {
  let component: C816Component;
  let fixture: ComponentFixture<C816Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C816Component]
    });
    fixture = TestBed.createComponent(C816Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
