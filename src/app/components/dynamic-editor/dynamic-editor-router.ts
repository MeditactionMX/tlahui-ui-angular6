import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicEditorComponent } from './dynamic-editor.component'
import {} from '../../main/common/material.module';

const dynamicEditorRoutes: Routes = [
	{ 
	  path: '',
          component: DynamicEditorComponent,
	}	
];

@NgModule({
  imports: [ RouterModule.forChild(dynamicEditorRoutes) ],
  exports: [ RouterModule ]
})
export class DynamicEditorRouter { } 