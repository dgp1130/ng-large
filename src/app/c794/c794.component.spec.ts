import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C794Component } from './c794.component';

describe('C794Component', () => {
  let component: C794Component;
  let fixture: ComponentFixture<C794Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C794Component]
    });
    fixture = TestBed.createComponent(C794Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
