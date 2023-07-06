import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C172Component } from './c172.component';

describe('C172Component', () => {
  let component: C172Component;
  let fixture: ComponentFixture<C172Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C172Component]
    });
    fixture = TestBed.createComponent(C172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
