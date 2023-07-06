import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C576Component } from './c576.component';

describe('C576Component', () => {
  let component: C576Component;
  let fixture: ComponentFixture<C576Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C576Component]
    });
    fixture = TestBed.createComponent(C576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
