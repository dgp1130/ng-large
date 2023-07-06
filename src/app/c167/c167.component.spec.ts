import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C167Component } from './c167.component';

describe('C167Component', () => {
  let component: C167Component;
  let fixture: ComponentFixture<C167Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C167Component]
    });
    fixture = TestBed.createComponent(C167Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
