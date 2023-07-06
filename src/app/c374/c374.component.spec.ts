import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C374Component } from './c374.component';

describe('C374Component', () => {
  let component: C374Component;
  let fixture: ComponentFixture<C374Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C374Component]
    });
    fixture = TestBed.createComponent(C374Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
