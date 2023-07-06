import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C559Component } from './c559.component';

describe('C559Component', () => {
  let component: C559Component;
  let fixture: ComponentFixture<C559Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C559Component]
    });
    fixture = TestBed.createComponent(C559Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
