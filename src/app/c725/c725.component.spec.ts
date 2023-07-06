import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C725Component } from './c725.component';

describe('C725Component', () => {
  let component: C725Component;
  let fixture: ComponentFixture<C725Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C725Component]
    });
    fixture = TestBed.createComponent(C725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
