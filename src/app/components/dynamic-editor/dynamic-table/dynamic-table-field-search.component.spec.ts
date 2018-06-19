import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTableFieldSearchComponent } from './dynamic-table-field-search.component';

describe('DynamicTableFieldSearchComponent', () => {
  let component: DynamicTableFieldSearchComponent;
  let fixture: ComponentFixture<DynamicTableFieldSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTableFieldSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTableFieldSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
