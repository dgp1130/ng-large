import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C78Component } from './c78.component';

describe('C78Component', () => {
  let component: C78Component;
  let fixture: ComponentFixture<C78Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C78Component]
    });
    fixture = TestBed.createComponent(C78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
