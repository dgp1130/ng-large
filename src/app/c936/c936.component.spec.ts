import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C936Component } from './c936.component';

describe('C936Component', () => {
  let component: C936Component;
  let fixture: ComponentFixture<C936Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C936Component]
    });
    fixture = TestBed.createComponent(C936Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
