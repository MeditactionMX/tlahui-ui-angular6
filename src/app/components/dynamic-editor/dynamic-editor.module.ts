import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { DynamicEditorComponent } from './dynamic-editor.component';
import { DynamicEditorRouter } from './dynamic-editor-router';
import { DynamicEditorReferencesModule } from  './dynamic-editor-references';
import { DynamicTableFieldPickerComponent } from './dynamic-table/dynamic-table-field-picker.component';
import { DynamicTableFieldSearchComponent } from './dynamic-table/dynamic-table-field-search.component';
import { DynamicTableSearchComponent } from './dynamic-table/dynamic-table-search.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
@NgModule({
  imports: [
    CommonModule, 
    DynamicEditorRouter, 
    DynamicEditorReferencesModule,
    FormsModule,
    ReactiveFormsModule,
    FuseSharedModule,
    FuseWidgetModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule
  ],

  declarations: [DynamicFormComponent, 
    DynamicTableComponent, 
    DynamicEditorComponent, 
    DynamicFormComponent, 
    DynamicTableFieldPickerComponent, 
    DynamicTableFieldSearchComponent, 
    DynamicTableSearchComponent],

    entryComponents: [ 
      DynamicTableFieldPickerComponent,
       DynamicTableSearchComponent ],
    providers: [FormBuilder]
})


export class DynamicEditorModule {
  constructor(){
   
  }
}
