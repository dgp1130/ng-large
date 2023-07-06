import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C180Component } from './c180.component';

describe('C180Component', () => {
  let component: C180Component;
  let fixture: ComponentFixture<C180Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C180Component]
    });
    fixture = TestBed.createComponent(C180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
