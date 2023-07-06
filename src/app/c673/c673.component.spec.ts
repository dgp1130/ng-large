import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C673Component } from './c673.component';

describe('C673Component', () => {
  let component: C673Component;
  let fixture: ComponentFixture<C673Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C673Component]
    });
    fixture = TestBed.createComponent(C673Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
