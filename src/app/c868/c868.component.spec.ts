import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C868Component } from './c868.component';

describe('C868Component', () => {
  let component: C868Component;
  let fixture: ComponentFixture<C868Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C868Component]
    });
    fixture = TestBed.createComponent(C868Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
