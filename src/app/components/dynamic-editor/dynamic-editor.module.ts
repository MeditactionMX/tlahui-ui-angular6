import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { DynamicEditorComponent } from './dynamic-editor.component';
import { DynamicEditorRouter } from './dynamic-editor-router';
import { DynamicEditorReferencesModule } from  './dynamic-editor-references';

@NgModule({
  imports: [
    CommonModule, DynamicEditorRouter, DynamicEditorReferencesModule
  ],
  declarations: [DynamicFormComponent, DynamicTableComponent, DynamicEditorComponent, DynamicFormComponent]
})


export class DynamicEditorModule {
  constructor(){
   
  }
}
