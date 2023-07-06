import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C618Component } from './c618.component';

describe('C618Component', () => {
  let component: C618Component;
  let fixture: ComponentFixture<C618Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C618Component]
    });
    fixture = TestBed.createComponent(C618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
