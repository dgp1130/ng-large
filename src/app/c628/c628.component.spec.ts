import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C628Component } from './c628.component';

describe('C628Component', () => {
  let component: C628Component;
  let fixture: ComponentFixture<C628Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C628Component]
    });
    fixture = TestBed.createComponent(C628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
