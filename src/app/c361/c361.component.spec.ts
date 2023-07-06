import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C361Component } from './c361.component';

describe('C361Component', () => {
  let component: C361Component;
  let fixture: ComponentFixture<C361Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [C361Component]
    });
    fixture = TestBed.createComponent(C361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
