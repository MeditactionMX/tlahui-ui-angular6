import { Component, OnInit, Input, Inject } from '@angular/core';
import { HTTPResourceService } from 'tlahui-webapi-client'; 
import { HttpClient } from "@angular/common/http";
import { UITable, UIColumn } from 'tlahui-webapi-client'; 
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DynamicTableFieldPickerComponent } from './dynamic-table-field-picker.component';
import { DynamicTableColumn } from '../../model/dynamic-form/dynamic-table-column';
import { DynamicTableSearchComponent } from './dynamic-table-search.component';


@Component({
  selector: 'dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {

  private client: HTTPResourceService<any>;
  protected ready: boolean;
  protected finished: boolean;
  protected anyErrors: boolean;
  protected tablemetadata: UITable;
  protected PickColumns: Array<DynamicTableColumn>;

  @Input() ComponentName:string;

  rows: any[];
  loadingIndicator = true;
  reorderable = true;

  constructor(protected httpClient:HttpClient, public dialog: MatDialog) { }

  ngOnInit() {
    this.ready=false;
    this.PickColumns=[];
    this.client = new HTTPResourceService<any>(this.httpClient,"https://localhost:8021/api/", this.ComponentName.replace("-","/"));
    this.GetMetadata();
  }



  //Configuracion inicial despue del GET
  private GetMetadata(){
    this.client.GetMetadataTable().subscribe(
     data=>{
      
      this.tablemetadata=data;
      this.ready=true;
      this.PickColumns=  this.GetColumnsCopy(this.tablemetadata.Columns, true, false);

     },
     error => this.anyErrors = true,
     () => this.finished = true);
  }


  //auxiliar para obtener las columnas visibles
  protected GetVisibleCols(): Array<DynamicTableColumn>{
    return this.PickColumns.filter(x=>x.ForceVisible==true).sort(x=>x.DisplayIndex);
  }



  //Abre el dialogo de selección de columnas 
  protected openColumnDialog(){
    let tmp=this.GetColumnsCopy(this.PickColumns, true, false);

    let tmpSort={ columns: tmp.sort((leftside, rightside): number =>{
      if(leftside.Traslation<rightside.Traslation) return -1;
      if(leftside.Traslation>rightside.Traslation) return 1;
      return 0;
    }) };

    let dialogRef = this.dialog.open(DynamicTableFieldPickerComponent, {
      data: tmpSort, disableClose:true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.UpdateViewColumns(result);
    });
  }


  //Abre el dialogo de selección de columnas 
  protected openSearchDialog(){
    let tmp=this.GetColumnsCopy(this.tablemetadata.Columns, false, true );

    let tmpSort={ columns: tmp.sort((leftside, rightside): number =>{
      if(leftside.Traslation<rightside.Traslation) return -1;
      if(leftside.Traslation>rightside.Traslation) return 1;
      return 0;
    }) };

    let dialogRef = this.dialog.open(DynamicTableSearchComponent, {
      data: tmpSort, disableClose:true, width: '80%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Buscar");
      //this.UpdateViewColumns(result);
    });
  }




  // actualiza las columnas vivibles
  private UpdateViewColumns(columns: Array<DynamicTableColumn>){
    columns.forEach(column=>{
      this.PickColumns.filter(x=>x.ShortId==column.ShortId)[0].ForceVisible=column.ForceVisible;
    });
  }


  private GetColumnsCopy(source:Array<any>, visibles: boolean, searchables: boolean): Array<DynamicTableColumn> {

    let tmp: Array<DynamicTableColumn> = source.map(function (value) {
      let n = new DynamicTableColumn();

      if (value.DisplayByDefault == true) {
        n.ForceVisible = true;
      }

      Object.keys(value).forEach(key => n[key] = value[key]);
      return n;
    })

    if (visibles == true) {
      tmp = tmp.filter(x => x.AlwaysHidden == false);
    }

    if (searchables == true) {
      tmp = tmp.filter(x => x.Searchable == true);
    }

    return tmp;
  }

  
  protected openFilterDialog(){
    
  }

}

