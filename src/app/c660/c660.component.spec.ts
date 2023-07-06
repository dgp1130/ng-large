import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C660Component } from './c660.component';

describe('C660Component', () => {
  let component: C660Component;
  let fixture: ComponentFixture<C660Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C660Component]
    });
    fixture = TestBed.createComponent(C660Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
