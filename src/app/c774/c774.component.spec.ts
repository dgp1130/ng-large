import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C774Component } from './c774.component';

describe('C774Component', () => {
  let component: C774Component;
  let fixture: ComponentFixture<C774Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C774Component]
    });
    fixture = TestBed.createComponent(C774Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
