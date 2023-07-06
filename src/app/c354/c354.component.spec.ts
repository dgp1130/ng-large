import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C354Component } from './c354.component';

describe('C354Component', () => {
  let component: C354Component;
  let fixture: ComponentFixture<C354Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C354Component]
    });
    fixture = TestBed.createComponent(C354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
