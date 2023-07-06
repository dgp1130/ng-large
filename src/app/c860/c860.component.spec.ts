import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C860Component } from './c860.component';

describe('C860Component', () => {
  let component: C860Component;
  let fixture: ComponentFixture<C860Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C860Component]
    });
    fixture = TestBed.createComponent(C860Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
