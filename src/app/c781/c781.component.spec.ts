import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C781Component } from './c781.component';

describe('C781Component', () => {
  let component: C781Component;
  let fixture: ComponentFixture<C781Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C781Component]
    });
    fixture = TestBed.createComponent(C781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
