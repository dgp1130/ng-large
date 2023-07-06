import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C727Component } from './c727.component';

describe('C727Component', () => {
  let component: C727Component;
  let fixture: ComponentFixture<C727Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C727Component]
    });
    fixture = TestBed.createComponent(C727Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
