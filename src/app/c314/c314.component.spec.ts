import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C314Component } from './c314.component';

describe('C314Component', () => {
  let component: C314Component;
  let fixture: ComponentFixture<C314Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C314Component]
    });
    fixture = TestBed.createComponent(C314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
