import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C981Component } from './c981.component';

describe('C981Component', () => {
  let component: C981Component;
  let fixture: ComponentFixture<C981Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C981Component]
    });
    fixture = TestBed.createComponent(C981Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
