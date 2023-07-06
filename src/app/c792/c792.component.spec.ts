import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C792Component } from './c792.component';

describe('C792Component', () => {
  let component: C792Component;
  let fixture: ComponentFixture<C792Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C792Component]
    });
    fixture = TestBed.createComponent(C792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
