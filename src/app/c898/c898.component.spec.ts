import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C898Component } from './c898.component';

describe('C898Component', () => {
  let component: C898Component;
  let fixture: ComponentFixture<C898Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C898Component]
    });
    fixture = TestBed.createComponent(C898Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
