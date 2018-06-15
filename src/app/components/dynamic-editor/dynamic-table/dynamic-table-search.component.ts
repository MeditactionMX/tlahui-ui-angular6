import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef , MatCheckbox } from '@angular/material';
import { DynamicTableColumn } from '../../model/dynamic-form/dynamic-table-column';

@Component({
  selector: 'app-dynamic-table-search',
  templateUrl: './dynamic-table-search.component.html',
  styleUrls: ['./dynamic-table-search.component.scss']
})
export class DynamicTableSearchComponent implements OnInit {

private AvailableColumns:Array<DynamicTableColumn>;
private FilteredColumns:Array<DynamicTableColumn>;
private SelectedValue:string;


  ngOnInit(): void {
    this.SelectedValue="";
  }
  

  constructor(
    public dialogRef: MatDialogRef<DynamicTableSearchComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)  {
      this.AvailableColumns= data.columns;
      this.FilteredColumns=[];
     }

  onNoClick(): void {
    this.dialogRef.close();
  }

  AddFiltered() {

    console.log(this.SelectedValue + "=");
    
    if (this.SelectedValue != "") {
      let value = this.SelectedValue;
      let col = Object.assign({}, this.AvailableColumns.filter(x => x.ShortId == this.SelectedValue)[0]);

      this.AvailableColumns = this.AvailableColumns.filter(function (obj) {
        return obj.ShortId !== value;
      });

      this.FilteredColumns.push(col);

      this.SelectedValue="";

    }
  }

}
