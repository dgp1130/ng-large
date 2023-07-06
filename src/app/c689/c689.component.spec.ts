import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C689Component } from './c689.component';

describe('C689Component', () => {
  let component: C689Component;
  let fixture: ComponentFixture<C689Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C689Component]
    });
    fixture = TestBed.createComponent(C689Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
