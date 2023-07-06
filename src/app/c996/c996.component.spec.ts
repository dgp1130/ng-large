import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C996Component } from './c996.component';

describe('C996Component', () => {
  let component: C996Component;
  let fixture: ComponentFixture<C996Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C996Component]
    });
    fixture = TestBed.createComponent(C996Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
