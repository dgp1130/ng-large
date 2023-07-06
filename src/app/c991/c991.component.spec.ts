import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C991Component } from './c991.component';

describe('C991Component', () => {
  let component: C991Component;
  let fixture: ComponentFixture<C991Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C991Component]
    });
    fixture = TestBed.createComponent(C991Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
