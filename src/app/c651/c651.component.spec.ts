import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C651Component } from './c651.component';

describe('C651Component', () => {
  let component: C651Component;
  let fixture: ComponentFixture<C651Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C651Component]
    });
    fixture = TestBed.createComponent(C651Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
