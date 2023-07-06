import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C685Component } from './c685.component';

describe('C685Component', () => {
  let component: C685Component;
  let fixture: ComponentFixture<C685Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C685Component]
    });
    fixture = TestBed.createComponent(C685Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
