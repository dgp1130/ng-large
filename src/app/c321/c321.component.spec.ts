import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C321Component } from './c321.component';

describe('C321Component', () => {
  let component: C321Component;
  let fixture: ComponentFixture<C321Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C321Component]
    });
    fixture = TestBed.createComponent(C321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
