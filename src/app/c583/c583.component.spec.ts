import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C583Component } from './c583.component';

describe('C583Component', () => {
  let component: C583Component;
  let fixture: ComponentFixture<C583Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C583Component]
    });
    fixture = TestBed.createComponent(C583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
