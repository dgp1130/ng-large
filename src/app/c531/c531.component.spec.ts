import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C531Component } from './c531.component';

describe('C531Component', () => {
  let component: C531Component;
  let fixture: ComponentFixture<C531Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C531Component]
    });
    fixture = TestBed.createComponent(C531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
