import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C841Component } from './c841.component';

describe('C841Component', () => {
  let component: C841Component;
  let fixture: ComponentFixture<C841Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C841Component]
    });
    fixture = TestBed.createComponent(C841Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
