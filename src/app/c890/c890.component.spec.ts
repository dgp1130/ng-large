import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C890Component } from './c890.component';

describe('C890Component', () => {
  let component: C890Component;
  let fixture: ComponentFixture<C890Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C890Component]
    });
    fixture = TestBed.createComponent(C890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
