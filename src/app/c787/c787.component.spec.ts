import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C787Component } from './c787.component';

describe('C787Component', () => {
  let component: C787Component;
  let fixture: ComponentFixture<C787Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C787Component]
    });
    fixture = TestBed.createComponent(C787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
