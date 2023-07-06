import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C875Component } from './c875.component';

describe('C875Component', () => {
  let component: C875Component;
  let fixture: ComponentFixture<C875Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C875Component]
    });
    fixture = TestBed.createComponent(C875Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
