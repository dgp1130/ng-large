import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C22Component } from './c22.component';

describe('C22Component', () => {
  let component: C22Component;
  let fixture: ComponentFixture<C22Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C22Component]
    });
    fixture = TestBed.createComponent(C22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
