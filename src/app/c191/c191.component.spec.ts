import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C191Component } from './c191.component';

describe('C191Component', () => {
  let component: C191Component;
  let fixture: ComponentFixture<C191Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C191Component]
    });
    fixture = TestBed.createComponent(C191Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
