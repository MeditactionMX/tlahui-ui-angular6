import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTableFieldPickerComponent } from './dynamic-table-field-picker.component';

describe('DynamicTableFieldPickerComponent', () => {
  let component: DynamicTableFieldPickerComponent;
  let fixture: ComponentFixture<DynamicTableFieldPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTableFieldPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTableFieldPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
