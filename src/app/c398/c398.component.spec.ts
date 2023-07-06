import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C398Component } from './c398.component';

describe('C398Component', () => {
  let component: C398Component;
  let fixture: ComponentFixture<C398Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C398Component]
    });
    fixture = TestBed.createComponent(C398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
