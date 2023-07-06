import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C159Component } from './c159.component';

describe('C159Component', () => {
  let component: C159Component;
  let fixture: ComponentFixture<C159Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C159Component]
    });
    fixture = TestBed.createComponent(C159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
