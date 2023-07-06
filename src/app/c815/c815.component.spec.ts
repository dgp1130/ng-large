import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C815Component } from './c815.component';

describe('C815Component', () => {
  let component: C815Component;
  let fixture: ComponentFixture<C815Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C815Component]
    });
    fixture = TestBed.createComponent(C815Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
