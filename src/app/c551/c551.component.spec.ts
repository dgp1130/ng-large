import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C551Component } from './c551.component';

describe('C551Component', () => {
  let component: C551Component;
  let fixture: ComponentFixture<C551Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C551Component]
    });
    fixture = TestBed.createComponent(C551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
