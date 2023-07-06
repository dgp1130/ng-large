import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C522Component } from './c522.component';

describe('C522Component', () => {
  let component: C522Component;
  let fixture: ComponentFixture<C522Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C522Component]
    });
    fixture = TestBed.createComponent(C522Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
