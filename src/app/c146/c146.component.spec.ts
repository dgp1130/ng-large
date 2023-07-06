import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C146Component } from './c146.component';

describe('C146Component', () => {
  let component: C146Component;
  let fixture: ComponentFixture<C146Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C146Component]
    });
    fixture = TestBed.createComponent(C146Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
