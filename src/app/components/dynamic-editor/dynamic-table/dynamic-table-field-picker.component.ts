import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef , MatCheckbox } from '@angular/material';
import { DynamicTableColumn } from '../../model/dynamic-form/dynamic-table-column';

@Component({
  selector: 'app-dynamic-table-field-picker',
  templateUrl: './dynamic-table-field-picker.component.html',
  styleUrls: ['./dynamic-table-field-picker.component.scss']
})
export class DynamicTableFieldPickerComponent implements OnInit {


  ngOnInit(): void {
  }
  

  constructor(
    public dialogRef: MatDialogRef<DynamicTableFieldPickerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)  {
     }

  onNoClick(): void {

    this.dialogRef.close();
   
  }

  SetState(item: DynamicTableColumn, event: any){
    item.ForceVisible = event.checked;
  }

}
