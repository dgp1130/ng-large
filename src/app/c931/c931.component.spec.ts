import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C931Component } from './c931.component';

describe('C931Component', () => {
  let component: C931Component;
  let fixture: ComponentFixture<C931Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C931Component]
    });
    fixture = TestBed.createComponent(C931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
