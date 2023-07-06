import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C55Component } from './c55.component';

describe('C55Component', () => {
  let component: C55Component;
  let fixture: ComponentFixture<C55Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C55Component]
    });
    fixture = TestBed.createComponent(C55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
