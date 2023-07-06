import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C195Component } from './c195.component';

describe('C195Component', () => {
  let component: C195Component;
  let fixture: ComponentFixture<C195Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C195Component]
    });
    fixture = TestBed.createComponent(C195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
