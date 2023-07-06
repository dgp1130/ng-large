import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C500Component } from './c500.component';

describe('C500Component', () => {
  let component: C500Component;
  let fixture: ComponentFixture<C500Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C500Component]
    });
    fixture = TestBed.createComponent(C500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
