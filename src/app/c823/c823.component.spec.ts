import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C823Component } from './c823.component';

describe('C823Component', () => {
  let component: C823Component;
  let fixture: ComponentFixture<C823Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C823Component]
    });
    fixture = TestBed.createComponent(C823Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
