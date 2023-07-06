import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C880Component } from './c880.component';

describe('C880Component', () => {
  let component: C880Component;
  let fixture: ComponentFixture<C880Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C880Component]
    });
    fixture = TestBed.createComponent(C880Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
