import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C260Component } from './c260.component';

describe('C260Component', () => {
  let component: C260Component;
  let fixture: ComponentFixture<C260Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C260Component]
    });
    fixture = TestBed.createComponent(C260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
