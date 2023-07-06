import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C173Component } from './c173.component';

describe('C173Component', () => {
  let component: C173Component;
  let fixture: ComponentFixture<C173Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C173Component]
    });
    fixture = TestBed.createComponent(C173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
