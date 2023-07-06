import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C156Component } from './c156.component';

describe('C156Component', () => {
  let component: C156Component;
  let fixture: ComponentFixture<C156Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C156Component]
    });
    fixture = TestBed.createComponent(C156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
