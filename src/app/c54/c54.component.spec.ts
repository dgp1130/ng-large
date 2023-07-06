import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C54Component } from './c54.component';

describe('C54Component', () => {
  let component: C54Component;
  let fixture: ComponentFixture<C54Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C54Component]
    });
    fixture = TestBed.createComponent(C54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
