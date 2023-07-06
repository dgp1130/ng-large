import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C228Component } from './c228.component';

describe('C228Component', () => {
  let component: C228Component;
  let fixture: ComponentFixture<C228Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C228Component]
    });
    fixture = TestBed.createComponent(C228Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
