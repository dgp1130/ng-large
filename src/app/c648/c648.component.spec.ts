import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C648Component } from './c648.component';

describe('C648Component', () => {
  let component: C648Component;
  let fixture: ComponentFixture<C648Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C648Component]
    });
    fixture = TestBed.createComponent(C648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
