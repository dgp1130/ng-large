import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C835Component } from './c835.component';

describe('C835Component', () => {
  let component: C835Component;
  let fixture: ComponentFixture<C835Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C835Component]
    });
    fixture = TestBed.createComponent(C835Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
