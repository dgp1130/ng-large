import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C591Component } from './c591.component';

describe('C591Component', () => {
  let component: C591Component;
  let fixture: ComponentFixture<C591Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C591Component]
    });
    fixture = TestBed.createComponent(C591Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
