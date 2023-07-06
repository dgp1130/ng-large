import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C869Component } from './c869.component';

describe('C869Component', () => {
  let component: C869Component;
  let fixture: ComponentFixture<C869Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C869Component]
    });
    fixture = TestBed.createComponent(C869Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
