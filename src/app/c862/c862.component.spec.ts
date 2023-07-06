import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C862Component } from './c862.component';

describe('C862Component', () => {
  let component: C862Component;
  let fixture: ComponentFixture<C862Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C862Component]
    });
    fixture = TestBed.createComponent(C862Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
