import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C729Component } from './c729.component';

describe('C729Component', () => {
  let component: C729Component;
  let fixture: ComponentFixture<C729Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C729Component]
    });
    fixture = TestBed.createComponent(C729Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
