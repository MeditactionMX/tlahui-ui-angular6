import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2cLoginComponent } from './b2c-login.component';

describe('B2cLoginComponent', () => {
  let component: B2cLoginComponent;
  let fixture: ComponentFixture<B2cLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2cLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2cLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
