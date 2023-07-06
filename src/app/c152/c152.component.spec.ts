import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C152Component } from './c152.component';

describe('C152Component', () => {
  let component: C152Component;
  let fixture: ComponentFixture<C152Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C152Component]
    });
    fixture = TestBed.createComponent(C152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
