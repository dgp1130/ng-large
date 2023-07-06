import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C579Component } from './c579.component';

describe('C579Component', () => {
  let component: C579Component;
  let fixture: ComponentFixture<C579Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C579Component]
    });
    fixture = TestBed.createComponent(C579Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
