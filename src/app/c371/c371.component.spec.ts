import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C371Component } from './c371.component';

describe('C371Component', () => {
  let component: C371Component;
  let fixture: ComponentFixture<C371Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C371Component]
    });
    fixture = TestBed.createComponent(C371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
