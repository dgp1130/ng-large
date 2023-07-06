import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C859Component } from './c859.component';

describe('C859Component', () => {
  let component: C859Component;
  let fixture: ComponentFixture<C859Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C859Component]
    });
    fixture = TestBed.createComponent(C859Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
