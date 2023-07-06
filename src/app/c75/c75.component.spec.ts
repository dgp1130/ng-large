import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C75Component } from './c75.component';

describe('C75Component', () => {
  let component: C75Component;
  let fixture: ComponentFixture<C75Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C75Component]
    });
    fixture = TestBed.createComponent(C75Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
