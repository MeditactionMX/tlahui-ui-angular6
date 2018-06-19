import { Component, OnInit, Inject, Input, HostListener } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef , MatCheckbox } from '@angular/material';
import { DynamicTableColumn } from '../../model/dynamic-form/dynamic-table-column';

@Component({
  selector: 'app-dynamic-table-search',
  templateUrl: './dynamic-table-search.component.html',
  styleUrls: ['./dynamic-table-search.component.scss']
})
export class DynamicTableSearchComponent implements OnInit {

@Input() Columns:Array<DynamicTableColumn>;
private FilteredColumns:Array<DynamicTableColumn>;
private SelectedValue:string;
protected searchPanelOpenState: boolean; 
public innerWidth: any;

@HostListener('window:resize', ['$event'])


onResize(event) {
  this.innerWidth = window.innerWidth;
}

  ngOnInit(): void {
    this.SelectedValue="";
    this.searchPanelOpenState=false;
    this.innerWidth = window.innerWidth;
  }
  
  constructor()  {
      this.FilteredColumns=[];
     }


  getFlexOrientation(): string {

    if (this.innerWidth < 600) {
      return "column";
    }

    return "row";
  }


  removeItem(ShortId:string){

    let col = Object.assign({}, this.FilteredColumns.filter(x => x.ShortId == ShortId)[0]);
    this.FilteredColumns = this.FilteredColumns.filter(function (obj) {
      return obj.ShortId !== ShortId;
    });
    
    this.Columns.push(col);

  }

  getHumannReadable(): string{

    let s: string = "";
    this.FilteredColumns.forEach(element => {
      s = s + ", " +  element.Traslation;
    });

    if(s!=""){
      s= "Filtrando por: " + s;
    }
    

    return s;

  }

  AddFiltered() {

    if (this.SelectedValue != "") {
      let value = this.SelectedValue;
      let col = Object.assign({}, this.Columns.filter(x => x.ShortId == this.SelectedValue)[0]);

      this.Columns = this.Columns.filter(function (obj) {
        return obj.ShortId !== value;
      });

      this.FilteredColumns.push(col);

      this.SelectedValue="";
      this.searchPanelOpenState=true;
    }
  }

}
