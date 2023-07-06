import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C982Component } from './c982.component';

describe('C982Component', () => {
  let component: C982Component;
  let fixture: ComponentFixture<C982Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C982Component]
    });
    fixture = TestBed.createComponent(C982Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
