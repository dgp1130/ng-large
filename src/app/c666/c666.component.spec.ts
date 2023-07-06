import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C666Component } from './c666.component';

describe('C666Component', () => {
  let component: C666Component;
  let fixture: ComponentFixture<C666Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C666Component]
    });
    fixture = TestBed.createComponent(C666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
