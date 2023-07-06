import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C74Component } from './c74.component';

describe('C74Component', () => {
  let component: C74Component;
  let fixture: ComponentFixture<C74Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C74Component]
    });
    fixture = TestBed.createComponent(C74Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
