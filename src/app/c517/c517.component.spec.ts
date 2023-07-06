import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C517Component } from './c517.component';

describe('C517Component', () => {
  let component: C517Component;
  let fixture: ComponentFixture<C517Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C517Component]
    });
    fixture = TestBed.createComponent(C517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
