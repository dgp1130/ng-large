import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C542Component } from './c542.component';

describe('C542Component', () => {
  let component: C542Component;
  let fixture: ComponentFixture<C542Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C542Component]
    });
    fixture = TestBed.createComponent(C542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
