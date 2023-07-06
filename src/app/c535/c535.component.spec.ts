import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C535Component } from './c535.component';

describe('C535Component', () => {
  let component: C535Component;
  let fixture: ComponentFixture<C535Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C535Component]
    });
    fixture = TestBed.createComponent(C535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
