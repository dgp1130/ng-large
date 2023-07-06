import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C683Component } from './c683.component';

describe('C683Component', () => {
  let component: C683Component;
  let fixture: ComponentFixture<C683Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C683Component]
    });
    fixture = TestBed.createComponent(C683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
