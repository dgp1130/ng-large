import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C997Component } from './c997.component';

describe('C997Component', () => {
  let component: C997Component;
  let fixture: ComponentFixture<C997Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C997Component]
    });
    fixture = TestBed.createComponent(C997Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
