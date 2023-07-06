import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C375Component } from './c375.component';

describe('C375Component', () => {
  let component: C375Component;
  let fixture: ComponentFixture<C375Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C375Component]
    });
    fixture = TestBed.createComponent(C375Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
