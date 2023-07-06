import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C636Component } from './c636.component';

describe('C636Component', () => {
  let component: C636Component;
  let fixture: ComponentFixture<C636Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C636Component]
    });
    fixture = TestBed.createComponent(C636Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
