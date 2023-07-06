import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C977Component } from './c977.component';

describe('C977Component', () => {
  let component: C977Component;
  let fixture: ComponentFixture<C977Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C977Component]
    });
    fixture = TestBed.createComponent(C977Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
