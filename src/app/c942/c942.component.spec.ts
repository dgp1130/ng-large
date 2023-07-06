import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C942Component } from './c942.component';

describe('C942Component', () => {
  let component: C942Component;
  let fixture: ComponentFixture<C942Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C942Component]
    });
    fixture = TestBed.createComponent(C942Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
