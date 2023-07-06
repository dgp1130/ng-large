import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C735Component } from './c735.component';

describe('C735Component', () => {
  let component: C735Component;
  let fixture: ComponentFixture<C735Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C735Component]
    });
    fixture = TestBed.createComponent(C735Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
