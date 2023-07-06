import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C357Component } from './c357.component';

describe('C357Component', () => {
  let component: C357Component;
  let fixture: ComponentFixture<C357Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C357Component]
    });
    fixture = TestBed.createComponent(C357Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
